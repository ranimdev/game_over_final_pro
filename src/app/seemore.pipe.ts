import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seemore'
})
export class SeemorePipe implements PipeTransform {

  transform(description:string , count:number): string {
    return description.split(" ").splice(0,count).join(" ");
  }

}
