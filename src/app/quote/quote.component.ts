import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quote:Quote[] = [ 
   new Quote ('Elbert Hubbard', 'Positive anything is better than negative nothing', 'Melonie L', 'Think positively'),
   new Quote ('Bernhard Berenson', 'Miracles happen to those who believe in them', 'Melonie L', 'Think positively'),
    new Quote ('Zig Ziglar', 'One small positive thought can change your whole day', 'Melonie L', 'Think positively')
    ];
    completeQuote(isComplete:any, index:any){
      if (isComplete){
        this.quote.splice(index,1);
      }
    }
    toggleDetails(index:any){
      this.quote[index].showDescription = !this.quote[index].showDescription;
    }

  constructor() { }

  ngOnInit(): void {
  }

}


