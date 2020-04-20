import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeproductComponent } from './list-typeproduct.component';

describe('ListTypeproductComponent', () => {
  let component: ListTypeproductComponent;
  let fixture: ComponentFixture<ListTypeproductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTypeproductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
