import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: any, ...args ): any {
    for (const arg of args) {
      console.log(arg);
    }
    return '\"' + value + '\"';
  }

}
