import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiaListaComponent } from './joia-lista';

describe('JoiaListaComponent', () => {
  let component: JoiaListaComponent;
  let fixture: ComponentFixture<JoiaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiaListaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JoiaListaComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
