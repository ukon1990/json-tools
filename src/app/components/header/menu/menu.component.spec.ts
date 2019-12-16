import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MenuComponent} from './menu.component';
import {RouterTestingModule} from '@angular/router/testing';
import {CoreModule} from '../../../core.module';

describe('MenuComponent', () => {
  let component: MenuComponent;
  let fixture: ComponentFixture<MenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CoreModule,
        RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});