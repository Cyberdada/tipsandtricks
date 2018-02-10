import { Component, OnInit } from '@angular/core';
import { ProblemService} from './problem.service';
import { ProblemStateService} from './problemstate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ProblemService]
})

export class AppComponent implements OnInit {


  constructor(private problemStateService: ProblemStateService ) {

  }

  ngOnInit() {
    this.problemStateService.init();
  }


}
