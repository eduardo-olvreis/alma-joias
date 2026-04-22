import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiaLista } from './joia-lista';

describe('JoiaLista', () => {
  let component: JoiaLista;
  let fixture: ComponentFixture<JoiaLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiaLista],
    }).compileComponents();

    fixture = TestBed.createComponent(JoiaLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
