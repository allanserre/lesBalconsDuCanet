import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenDependentComponent } from './screen-dependent.component';

describe('ScreenDependentComponent', () => {
  let component: ScreenDependentComponent;
  let fixture: ComponentFixture<ScreenDependentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScreenDependentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ScreenDependentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
