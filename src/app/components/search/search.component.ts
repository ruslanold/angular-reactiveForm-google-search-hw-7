import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SearchPage } from 'src/app/interfaces';
import { SearchService } from 'src/app/services';
import { SubjectService } from 'src/app/services';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup;
  results: any[] = [];
  query: string = '';

  constructor(
    private searchService: SearchService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      query: new FormControl()
    });

    this.subjectService.subcribeQueryData().subscribe(v => {
      this.form.setValue({
        query: v.query,
      })
    });
  }

  getResultGoogle(event, form: FormGroup): void{
    let { target: { parentElement } } = event
    const { value: { query } } = form;
    if (query) {
      this.query = query;
      this.searchService.getResult(query).subscribe(v => {
        this.results = v
        if (this.query && !this.results[1].length) {
          parentElement.classList.add('formAdRadius')
          parentElement.classList.remove('formRemoveRadius')
          return
        }
        parentElement.classList.add('formRemoveRadius')
        parentElement.classList.remove('formAdRadius')
      });
    }
  }
  handlerFocus(e): void {
    let { target: { parentElement } } = e
    if (this.results[1] && this.results[1].length) {
      parentElement.classList.add('formRemoveRadius')
      parentElement.classList.remove('formAdRadius')
      return
    }
    parentElement.classList.add('formAdRadius')
    parentElement.classList.remove('formRemoveRadius')
  }
  handlerBlur(e): void {
    let { target: { parentElement } } = e
    parentElement.classList.add('formAdRadius')
    parentElement.classList.remove('formRemoveRadius')
  }
  handlerClick(q): void {
    let {language, dateRestrict} = this.subjectService.getData()
    this.subjectService.setData({ query: q, language, dateRestrict});
    this.form.controls.query.setValue(q);
  }
}
