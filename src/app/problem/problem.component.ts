import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { ProblemStateService} from '../problemstate.service';

@Component({
  selector: 'app-problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.css']
})
export class ProblemComponent implements OnInit, OnDestroy {

  problemSubscription: Subscription;
  problems: any[];

  constructor(private problemStateServive: ProblemStateService) { }


  ngOnInit() {
    this.problemSubscription = this.problemStateServive.allProblems$.subscribe(event => {
      this.problems = event.problems;
     });
  }

  ngOnDestroy() {
    this.problemSubscription.unsubscribe();
  }

  getProblem(id: number) {
    this.problemStateServive.getProblem(id);
  }

}
