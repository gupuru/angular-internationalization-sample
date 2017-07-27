import {Component, Inject, LOCALE_ID, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  languages = [
    { code: 'en', label: 'English'},
    { code: 'ja', label: '日本語'}
  ];

  constructor(@Inject(LOCALE_ID) protected localeId: string) {}

  ngOnInit() {
  }

}
