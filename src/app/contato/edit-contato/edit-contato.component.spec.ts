import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditContatoComponent } from './edit-contato.component';

describe('EditContatoComponent', () => {
  let component: EditContatoComponent;
  let fixture: ComponentFixture<EditContatoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditContatoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
