import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class Search implements PipeTransform {

  transform(result: string, query: string): string {
    return result.replace(new RegExp(`[^${query}].*`), "<b>$&</b>");
  }

}
