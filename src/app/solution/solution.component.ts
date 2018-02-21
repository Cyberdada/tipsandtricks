import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemStateService} from '../problemstate.service';
import { Subscription } from 'rxjs/Subscription';
import {js_beautify} from 'js-beautify';

import {Mode} from './mode.enum';


@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css']
})
export class SolutionComponent implements OnInit, OnDestroy {
  problemSubscription: Subscription;
  problem: any;

  Mode = Mode;
  mode: Mode;

  constructor(private problemStateServive: ProblemStateService) { }

  ngOnInit() {
    this.problemSubscription = this.problemStateServive.currentProblem$.subscribe(event =>  {
      this.problem = event;
      this.problem.solutions.forEach(itm => itm.mode = Mode.Code);
    });
  }


  ngOnDestroy() {
    this.problemSubscription.unsubscribe();
  }


  beautify(code: string) {
    return  js_beautify(code);
  }


}
