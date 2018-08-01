import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileSize'
})
export class FileSizePipe implements PipeTransform {

  transform(value: number, args?: any): string {
    let size: string;
    let v: number = value / 1000000;
    if (v > 1 && v < 1000) {
      size = v.toFixed(2) + 'M';
    } else if (v > 1000) {
      size = (v / 1000).toFixed(2) + 'G';
    } else if (v < 1) {
      size = (v * 1000).toFixed(2) + 'K';
    }
    return size;
  }

}
