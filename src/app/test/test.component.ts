import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  public name = 'Pipe';
  public message = 'Hello pipe example !';
  public date = new Date();
  public textt = 'SeNI         SEViyoruM';
  constructor() {}

  ngOnInit(): void {}

  transformedPipe() {
    console.log('Donusum yapildi.');
  }
}
