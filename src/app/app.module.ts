import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import { DescriptionComponent } from './description/description.component';
import { SolutionComponent } from './solution/solution.component';
import {ProblemStateService} from './problemstate.service';
import {ProblemService} from './problem.service';
import {HttpClientModule, HttpClient} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    DescriptionComponent,

    SolutionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ProblemStateService, ProblemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
