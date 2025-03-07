import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellSidebarComponent } from './spell-sidebar.component';

describe('SpellSidebarComponent', () => {
  let component: SpellSidebarComponent;
  let fixture: ComponentFixture<SpellSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpellSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpellSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
