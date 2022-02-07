import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Quote:string[];

  constructor(){
    this.Quote = ['Miracles happen to those who believe in them', 'One small positive thought can change your whole day', 'Positive anything is better than negative nothing']
  }
}
