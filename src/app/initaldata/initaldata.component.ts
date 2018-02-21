import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProblemStateService} from '../problemstate.service';
import { Subscription } from 'rxjs/Subscription';
import {js_beautify} from 'js-beautify';


@Component({
  selector: 'app-initaldata',
  templateUrl: './initaldata.component.html',
  styleUrls: ['./initaldata.component.css']
})
export class InitaldataComponent implements OnInit, OnDestroy {
  initaDataSubscription: Subscription;
  intialData = '';

  constructor(private problemStateServive: ProblemStateService) { }

  ngOnInit() {
    this.initaDataSubscription = this.problemStateServive.initalData$.subscribe(event =>  {
      this.intialData = event;
    });
  }

  ngOnDestroy() {
    this.initaDataSubscription.unsubscribe();
  }

  beautify() {

    return  this.intialData &&  js_beautify(this.intialData);
  }

}
