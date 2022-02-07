import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [ 
    {author:'Elbert Hubbard', quote:'Positive anything is better than negative nothing', person:'Melonie L'},
    {author:'Bernhard Berenson', quote:'Miracles happen to those who believe in them', person:'Melonie L'},
    {author:'Zig Ziglar', quote:'One small positive thought can change your whole day', person:'Melonie L'}
    ]

  constructor() { }

  ngOnInit(): void {
  }

}
