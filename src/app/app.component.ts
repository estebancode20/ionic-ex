import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'planet' },
    { title: 'Personajes', url: '/customers', icon: 'people' },
    { title: 'Peleas', url: '/cities', icon: 'location' },
    { title: 'Miembros', url: '/miembros', icon: 'star' }
    
  ];
  
  constructor() {}
}
