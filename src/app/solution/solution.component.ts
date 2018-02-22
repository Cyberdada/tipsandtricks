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

  initaDataSubscription: Subscription;
  intialData = '';

  Mode = Mode;
  mode: Mode;

  constructor(private problemStateServive: ProblemStateService) { }

  ngOnInit() {
    this.problemSubscription = this.problemStateServive.currentProblem$.subscribe(event =>  {
      this.problem = event;
      this.problem.solutions.forEach(itm =>  {
        itm.mode = Mode.Code;
        itm.result = this.beautify(itm.code);
      });
    });

    this.initaDataSubscription = this.problemStateServive.initalData$.subscribe(event =>  {
      this.intialData = event;
    });
  }


  ngOnDestroy() {
    this.problemSubscription.unsubscribe();
    this.initaDataSubscription.unsubscribe();
  }





  changeResult(solution: any, mode: Mode) {

    solution.code = mode === Mode.Result 
    ? solution.result
    : solution.code;

    solution.result = mode === Mode.Code
      ? this.beautify(solution.code)
      : this.result(solution.code);
    }

  private beautify(code: string) {
    return  js_beautify(code);
  }

  private result(code: string) {
    let retval = '';

    try {
       // tslint:disable-next-line:no-eval
    retval = eval(this.intialData + ' ' + code);
    retval = JSON.stringify(retval);

    } catch (ex) {
      retval = ex.message + '\n' + ex.stack;
  }
  return retval;
  }


}
