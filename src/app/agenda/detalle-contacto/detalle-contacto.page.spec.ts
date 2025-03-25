import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetalleContactoPage } from './detalle-contacto.page';

describe('DetalleContactoPage', () => {
  let component: DetalleContactoPage;
  let fixture: ComponentFixture<DetalleContactoPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleContactoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
