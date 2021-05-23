import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }
  transform(value: any): number {
    const today: Date = new Date();
    const todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    // tslint:disable-next-line: prefer-const
    let dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInDay = 86400;
    const dateDifferenceSeconds = dateDifference * 0.001;
    // tslint:disable-next-line: prefer-const
    let dateCounter = dateDifferenceSeconds / secondsInDay;

    if (dateCounter >= 1 && value < todayWithNoTime){
      return dateCounter;
    }else{
      return 0;
    }
  }
}
