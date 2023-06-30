import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListContatoComponent } from './list-contato.component';

describe('ListContatoComponent', () => {
  let component: ListContatoComponent;
  let fixture: ComponentFixture<ListContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
