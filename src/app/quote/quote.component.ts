
    import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }      from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  upvotes=0;
  // downvotes=0;

  quotes:Quote[] = [
   new Quote (1, 'Elbert Hubbard', 'Positive anything is better than negative nothing', 'Melonie L', 'Think positively', new Date(2022, 4, 17)),
   new Quote (2, 'Bernhard Berenson', 'Miracles happen to those who believe in them', 'Melonie L', 'Think positively', new Date(2021, 3, 26)),
    new Quote (3, 'Zig Ziglar', 'One small positive thought can change your whole day', 'Melonie L', 'Think positively', new Date(2019, 7, 3))
    ];
  

  completeDate!: number;
  preNum!:number
  lastNum!:number
  counter!: number

  addNewQuote(quote: any) {
    let quotelength = this.quotes.length;
    quote.id = quotelength + 1;
    quote.completeDate = new Date(quote.completeDate) 
    this.quotes.push(quote)
  }


  deleteQuote(isDelete: any, index: any) {
    if (isDelete) {
      let toDelete = confirm(`Do you want to delete ${this.quotes[index].author}?`)

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  toggleDetails(index: any) {
    this.quotes[index].showDetail = !this.quotes[index].showDetail;
  }


  completeQuote(isComplete: any, index: any) {
    if (isComplete) {
      this.quotes.splice(index, 1);
    }
  }

  upvote(i: number) {
    this.quotes[i].upvotes+=1
  }

  // downvote(i: number) {
  //   this.quotes[i].downvotes+=1
  // }

  toDelete(i: number) {
    this.quotes.splice(i, 1)
  }

  highestUpvote(){
    this.preNum = 0
    this.lastNum = 0

    for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
      this.lastNum = this.quotes[this.counter].upvotes;
      if(this.lastNum > this.preNum){this.preNum = this.lastNum}
    }
    return this.preNum
  }

  constructor() { }

  ngOnInit(): void {
  }

}
