import { Component, OnInit } from '@angular/core';
import { qoute } from '../qoute';

@Component({
  selector: 'app-qoute-form',
  templateUrl: './qoute-form.component.html',
  styleUrls: ['./qoute-form.component.css']
})
export class qouteFormComponent implements OnInit {

  newQoute = new qoute(0,"","",new Date());
  constructor() { }

  ngOnInit() {
  }

}