import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoiaDetalhe } from './joia-detalhe';

describe('JoiaDetalhe', () => {
  let component: JoiaDetalhe;
  let fixture: ComponentFixture<JoiaDetalhe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoiaDetalhe],
    }).compileComponents();

    fixture = TestBed.createComponent(JoiaDetalhe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
