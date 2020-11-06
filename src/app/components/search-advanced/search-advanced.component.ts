import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SubjectService } from 'src/app/services';

@Component({
  selector: 'app-search-advanced',
  templateUrl: './search-advanced.component.html',
  styleUrls: ['./search-advanced.component.css']
})
export class SearchAdvancedComponent implements OnInit {

  statesLanguage: any[] = [
    { code: "ua", name: "українська"},
    { code: "ai", name: "англійська"},
  ];
  defaultLanguage: string = this.statesLanguage[this.statesLanguage.findIndex(e => e.code == this.subjectService.getData().language)].name

  statesDateRestrict: any[] = ["усi", 1, 7, 30];
  defaultDateRestrict: string = this.statesDateRestrict[0]
  

  query = new FormControl(this.subjectService.getData().query);
  language = new FormControl(this.defaultLanguage);
  dateRestrict = new FormControl(this.defaultDateRestrict);

  advancedSearch = new FormGroup({
    query: this.query,
    language: this.language,
    dateRestrict: this.dateRestrict
  })

  constructor(private subjectService: SubjectService) { }
  
  ngOnInit(): void {
    
    this.subjectService.subcribeQueryData().subscribe(v => {

      this.advancedSearch.setValue({
        query: v.query,
        language: v.language,
        dateRestrict: v.dateRestrict
      })

    });
  }

  action(): void {
    let { query, language, dateRestrict } = this.advancedSearch.controls
    let obj = {
      query: query.value,
      language: language.value,
      dateRestrict: typeof this.statesDateRestrict[dateRestrict.value] == 'number' ? this.statesDateRestrict[dateRestrict.value] : null
    }
    this.subjectService.setData(obj);
  }



}
