import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeContactformComponent } from './home-contactform.component';

describe('HomeContactformComponent', () => {
  let component: HomeContactformComponent;
  let fixture: ComponentFixture<HomeContactformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeContactformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeContactformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
