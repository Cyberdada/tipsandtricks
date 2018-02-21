import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProblemComponent } from './problem/problem.component';
import { DescriptionComponent } from './description/description.component';
import { SolutionComponent } from './solution/solution.component';
import {ProblemStateService} from './problemstate.service';
import {ProblemService} from './problem.service';
import {HttpClientModule} from '@angular/common/http';
import { InitaldataComponent } from './initaldata/initaldata.component';


@NgModule({
  declarations: [
    AppComponent,
    ProblemComponent,
    DescriptionComponent,

    SolutionComponent,

    InitaldataComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProblemStateService, ProblemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
