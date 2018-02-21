import { Injectable } from '@angular/core';
import { ProblemService} from './problem.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProblemStateService {

  constructor(private problemService: ProblemService) { }
  private problems: any[];

  private allProblemsSource = new Subject<any>();
  private currentProblemSource = new Subject<any>();
  private intialDataSource = new Subject<any>();
  private solutionSource = new Subject<any>();

  currentProblem$ = this.currentProblemSource.asObservable();
  allProblems$ = this.allProblemsSource.asObservable();
  initalData$ = this.intialDataSource.asObservable();

  init() {
    this.problemService.problems().subscribe(retval => {
      this.problems = retval.problems;
      this.allProblemsSource.next(retval);
      this.intialDataSource.next(retval.initialData);
    });
  }

  getProblem(id: number)  {
    this.currentProblemSource.next(this.problems.find(itm => itm.id === id));
  }
}

