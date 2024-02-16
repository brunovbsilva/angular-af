import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCardComponent } from './user-card.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('UserCardComponent', () => {
  let component: UserCardComponent;
  let fixture: ComponentFixture<UserCardComponent>;

  let userCard: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    userCard = fixture.debugElement.query(By.css('.user-card'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML', () => {
    it('should render the user card', () => expect(userCard).toBeTruthy());
    it('should have a user image', () => expect(userCard.query(By.css('.user-card__image'))).toBeTruthy());
    it('should have a user name', () => expect(userCard.query(By.css('.user-card__name'))).toBeTruthy());
    it('should have a user location', () => expect(userCard.query(By.css('.user-card__location'))).toBeTruthy());
    describe('icon buttons', () => {
      let iconButtons: DebugElement;
      beforeEach(() => iconButtons = userCard.query(By.css('.user-card__icon-buttons')));
      it('should render the buttons', () => expect(iconButtons).toBeTruthy());
      it('should have one button', () => expect(iconButtons.queryAll(By.css('.user-card__button')).length).toBe(2));
    })
  })
});
