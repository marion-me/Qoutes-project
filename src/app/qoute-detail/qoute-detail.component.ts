import { OnInit } from '@angular/core';

export class qoutDetailComponent implements OnInit {
    ngOnInit(): void {
      throw new Error("Method not implemented.");
    }
    isComplete: any;
  
    goalDelete(complete:boolean){
      this.isComplete.emit(complete);
    }
  }