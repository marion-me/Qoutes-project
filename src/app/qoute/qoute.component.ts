import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qoute',
  templateUrl: './qoute.component.html',
  styleUrls: ['./qoute.component.css']
})
export class QouteComponent implements OnInit {
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }
  [x: string]: any;
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

        deleteGoal(isComplete: any, index: string | number){
          if (isComplete) {
            let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)
      
            if (toDelete){
              this.qoute.splice(index,1)
            }
          }
        }
      
      }