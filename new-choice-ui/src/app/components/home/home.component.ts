import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loaded:Boolean = false;
  ngOnInit(): void {
    // setTimeout(() => {
    //   this.loaded=true;
    // }, 500);
  }
}
