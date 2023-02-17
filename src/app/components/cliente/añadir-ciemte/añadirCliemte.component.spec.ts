/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AñadirCliemteComponent } from './añadirCliemte.component';

describe('AñadirCliemteComponent', () => {
  let component: AñadirCliemteComponent;
  let fixture: ComponentFixture<AñadirCliemteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AñadirCliemteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AñadirCliemteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
