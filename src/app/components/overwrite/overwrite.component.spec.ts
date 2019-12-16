import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverwriteComponent } from './overwrite.component';

describe('OverwriteComponent', () => {
  let component: OverwriteComponent;
  let fixture: ComponentFixture<OverwriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverwriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverwriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
