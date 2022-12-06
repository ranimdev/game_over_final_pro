import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreGamesComponent } from './more-games.component';

describe('MoreGamesComponent', () => {
  let component: MoreGamesComponent;
  let fixture: ComponentFixture<MoreGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoreGamesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoreGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
