import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitaldataComponent } from './initaldata.component';

describe('InitaldataComponent', () => {
  let component: InitaldataComponent;
  let fixture: ComponentFixture<InitaldataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitaldataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitaldataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
