import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'USB';
  age = 27;
  ButtonClicked() {
    console.log("test");
    
  }
}
