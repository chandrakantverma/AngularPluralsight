import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProgramsComponent } from './home-programs.component';

describe('HomeProgramsComponent', () => {
  let component: HomeProgramsComponent;
  let fixture: ComponentFixture<HomeProgramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProgramsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProgramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
