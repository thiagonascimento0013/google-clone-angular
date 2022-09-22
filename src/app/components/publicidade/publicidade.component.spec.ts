import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadeComponent } from './publicidade.component';

describe('PublicidadeComponent', () => {
  let component: PublicidadeComponent;
  let fixture: ComponentFixture<PublicidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
