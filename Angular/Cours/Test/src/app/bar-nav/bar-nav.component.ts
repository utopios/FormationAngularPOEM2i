import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-nav',
  templateUrl: './bar-nav.component.html',
  styleUrls: ['./bar-nav.component.css']
})
export class BarNavComponent implements OnInit {

  message:string="Salut à tous!";

  constructor() { }

  ngOnInit(): void {
    this.message = "Je modifie son contenu";
  }



}
