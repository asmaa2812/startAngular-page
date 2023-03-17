import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  heading:string="start angular"
text:string="Graphic Artist - Web Designer - Illustrato"
  constructor() { }

  ngOnInit(): void {
  }

}
