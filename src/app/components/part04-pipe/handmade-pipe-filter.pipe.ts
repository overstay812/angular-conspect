import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'handmadePipeFilter',
})
export class HandmadePipeFilterPipe implements PipeTransform {
  transform(array: string[], fitlerVlalue: string = ''): string[] {
    if (fitlerVlalue.trim()) {
      return array.filter((item) =>
        item.toLowerCase().includes(fitlerVlalue.toLowerCase())
      );
    } else {
      return array;
    }
  }
}
