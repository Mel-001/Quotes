import { Component, Input } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[] = [
    new Quote (1, 'Elbert Hubbard', 'Positive anything is better than negative nothing', 'Melonie L', 'Think positively',  new Date(2022, 4, 17)),
   new Quote (2, 'Bernhard Berenson', 'Miracles happen to those who believe in them', 'Melonie L', 'Think positively', new Date(2021, 3, 26)),
    new Quote (3, 'Zig Ziglar', 'One small positive thought can change your whole day', 'Melonie L', 'Think positively', new Date(2019, 7, 3))
  ];

}
