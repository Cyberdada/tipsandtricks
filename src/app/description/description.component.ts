import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemStateService} from '../problemstate.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit, OnDestroy {
  problemSubscription: Subscription;
  problem: any;
  constructor(private problemStateServive: ProblemStateService) { }

  ngOnInit() {
    this.problemSubscription = this.problemStateServive.currentProblem$.subscribe(event =>  {
      this.problem = event;
    });
  }


  ngOnDestroy() {
    this.problemSubscription.unsubscribe();
  }
}
