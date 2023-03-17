import { Component, ViewChild,AfterViewInit } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  height:object = {}
  
  ngAfterViewInit():void{
    this.height = {
      marginTop: `${this.childNav.nav.nativeElement.clientHight}px`,
      minHeight: `calc(100vh - ${this.childNav.nav.nativeElement.clientHight}px)`
    }

  }
  @ViewChild(NavbarComponent) childNav!:NavbarComponent;
  title = 'assignment1';
}
