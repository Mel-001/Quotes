// export class Quote {
//     author!: string;
//   quote!: string;
//   person!:string;
//   description!: string;
// }


export class Quote{
  showDescription: boolean;
  constructor(public author:string, public quote:string, public person:string, public description:string){
    this.showDescription=false;
  }
}