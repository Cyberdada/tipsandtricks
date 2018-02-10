import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpBase} from './http-base';
@Injectable()
export class ProblemService extends HttpBase {

  private uri = 'http://localhost:4200/assets/problems.json';
  constructor(protected http: HttpClient) { super(http); }

  problems() {
    return super.get(this.uri);
  }

}
