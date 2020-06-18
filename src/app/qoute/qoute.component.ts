import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  author: Text
  Qoute: Text
  upvotes: number
  numberOfUpvotes: any;
  numberOfdownvotes: any;

  upvoteButtonClick() {
    this.numberOfUpvotes++;
  }

  downvoteButtonClick() {
    this.numberOfdownvotes--;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
