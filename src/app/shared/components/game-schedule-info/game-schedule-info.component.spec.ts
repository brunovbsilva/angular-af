import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameScheduleInfoComponent } from './game-schedule-info.component';
import { DebugElement, input } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from '../../mocks/translate.service.spec';
import { By } from '@angular/platform-browser';

describe('GameScheduleInfoComponent', () => {
  let component: GameScheduleInfoComponent;
  let fixture: ComponentFixture<GameScheduleInfoComponent>;
  let translate: TranslateService;

  let gameInfo: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameScheduleInfoComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameScheduleInfoComponent);
    component = fixture.componentInstance;
    translate = TestBed.inject(TranslateService);

    const date = new Date().getDate();
    component.dateFrom = input(date);
    component.dateTo = input(date);
    component.location = input('testing location');

    fixture.detectChanges();

    gameInfo = fixture.debugElement.query(By.css('.game-info'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML', () => {
    let gameInfoLeft: DebugElement;
    let gameInfoRight: DebugElement;
    it('should exist', () => expect(gameInfo).toBeTruthy());
    describe('left', () => {
      beforeEach(() => gameInfoLeft = gameInfo.query(By.css('.game-info__left')));
      it('should exist', () => expect(gameInfoLeft).toBeTruthy());
      it('should have 2 children', () => expect(gameInfoLeft.children.length).toBe(2));
      it('should have a date on first children', () => expect(gameInfoLeft.children[0].nativeElement.textContent).toContain(component.dayName()));
      it('should have a location on second children', () => expect(gameInfoLeft.children[1].nativeElement.textContent).toContain(component.location()));
    });
    describe('right', () => {
      beforeEach(() => gameInfoRight = gameInfo.query(By.css('.game-info__right')));
      it('should exist', () => expect(gameInfoRight).toBeTruthy());
      it('should contain the month', () => expect(gameInfoRight.nativeElement.textContent).toContain(component.month()));
      it('should contain the day', () => expect(gameInfoRight.nativeElement.textContent).toContain(component.day()));
    });
  });
});
