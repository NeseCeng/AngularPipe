import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe',
})
export class TestPipePipe implements PipeTransform {
  transform(value: string, transformed: string): string {
    transformed = value.replace(/\s/g, '');
    return transformed;
  }
}
