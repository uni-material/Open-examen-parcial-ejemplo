import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalStateExamsComponentComponent } from './medical-state-exams.component.component';

describe('MedicalStateExamsComponentComponent', () => {
  let component: MedicalStateExamsComponentComponent;
  let fixture: ComponentFixture<MedicalStateExamsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MedicalStateExamsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicalStateExamsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
