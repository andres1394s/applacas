import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultplacaComponent } from './consultplaca.component';

describe('ConsultplacaComponent', () => {
  let component: ConsultplacaComponent;
  let fixture: ComponentFixture<ConsultplacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultplacaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultplacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
