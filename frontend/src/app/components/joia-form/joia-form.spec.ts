import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiaFormComponent } from './joia-form';

describe('JoiaFormComponent', () => {
  let component: JoiaFormComponent;
  let fixture: ComponentFixture<JoiaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiaFormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoiaFormComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
