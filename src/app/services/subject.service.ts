import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  private queryData$: BehaviorSubject<any> = new BehaviorSubject({
    query: 'angular',
    language: "ua", //ai
    dateRestrict: null
  })

  constructor() { }

  setData(object: object): void {
    this.queryData$.next(object)
  }
  getData(): any {
    return this.queryData$.getValue()
  }
  subcribeQueryData(): Observable<any> {
    return this.queryData$.asObservable()
  }
}
