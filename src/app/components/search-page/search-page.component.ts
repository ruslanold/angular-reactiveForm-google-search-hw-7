import { Component, OnInit } from '@angular/core';
import { SearchPage } from 'src/app/interfaces';
import { SearchService, SubjectService } from 'src/app/services';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  results: SearchPage;
  constructor(
    private searchService: SearchService,
    private subjectService: SubjectService
  ) { }

  ngOnInit(): void {
    this.subjectService.subcribeQueryData().subscribe(queryData => {
      console.log(queryData, 'behaviorS')
      this.searchService.getResultsByQuery(queryData).subscribe(v => {
        console.log(v);
        this.results = v
      });
    })
  }

}
