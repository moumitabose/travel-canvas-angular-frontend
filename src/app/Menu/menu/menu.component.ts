import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  @ViewChild(MatMenuTrigger) matMenuTrigger!: MatMenuTrigger;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu()
  {

  }





  onHomeClick(): void {
    console.log('Home clicked');
    // Add your logic here
  }

}
