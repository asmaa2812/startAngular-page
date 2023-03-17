import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  head:string="portfolio"
  flag:boolean=true;
  picture:string=''
  srcs:string[]= [
    '../../assets/pictures/cabin.png',
    '../../assets/pictures/cake.png',
    '../../assets/pictures/circus.png',
    '../../assets/pictures/game.png',
    '../../assets/pictures/safe.png',
    '../../assets/pictures/submarine.png'
  ]
  
  hidePicture(element:EventTarget | null,img:HTMLImageElement):void{
    if(element == img) return;
    {
      this.flag=true;
    }

  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
