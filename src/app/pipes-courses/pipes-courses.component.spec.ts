import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesCoursesComponent } from './pipes-courses.component';

describe('PipesCoursesComponent', () => {
  let component: PipesCoursesComponent;
  let fixture: ComponentFixture<PipesCoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesCoursesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesCoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
