import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Presentacion', url: '/presentacion', icon: 'people' },
    { title: 'Api', url: '/userslist', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes'];
  constructor() {}
}
