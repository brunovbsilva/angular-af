import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameCardComponent } from './game-card.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from '../../../shared/mocks/translate.service.spec';
import { gameCardMock } from '../../../shared/mocks/objects/game-card.spec';
import { DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GameCardComponent', () => {
  let component: GameCardComponent;
  let fixture: ComponentFixture<GameCardComponent>;

  let gameCard: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameCardComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameCardComponent);
    component = fixture.componentInstance;
    component.card = input(gameCardMock);
    fixture.detectChanges();

    gameCard = fixture.debugElement.query(By.css('.game-card'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Game card HTML', () => {
    it('should have a card', () => expect(gameCard).toBeTruthy());
    describe('On card', () => {
      let gameImage: DebugElement;
      let gameName: DebugElement;
      let gameInfo: DebugElement;
      let gameButtons: DebugElement;
      describe('Image', () => {
        beforeEach(() => gameImage = gameCard.query(By.css('.game-card__image')));
        it('should exist', () => expect(gameImage).toBeTruthy());
        it('should have a src', () => expect(gameImage.nativeElement.src).toBe(gameCardMock.imageUrl));
        it('should have an alt', () => expect(gameImage.nativeElement.alt).toBe('Game card image'));
      });
      describe('Name', () => {
        beforeEach(() => gameName = gameCard.query(By.css('.game-card__name')));
        it('should exist', () => expect(gameName).toBeTruthy());
        it('should have the name', () => expect(gameName.nativeElement.textContent).toBe(gameCardMock.name));
      });
      describe('Info', () => {
        beforeEach(() => gameInfo = gameCard.query(By.css('.game-card__info')));
        it('should exist', () => expect(gameInfo).toBeTruthy());
      });
      describe('Buttons', () => {
        beforeEach(() => gameButtons = gameCard.query(By.css('.game-card__buttons')));
        it('should exist', () => expect(gameButtons).toBeTruthy());
        it('should have 3 buttons', () => expect(gameButtons.children.length).toBe(3));
        it('should have an accept button', () => expect(gameButtons.children[0].nativeElement.textContent).toContain(gameCardMock.buttons[0].name));
        it('should have a reject button', () => expect(gameButtons.children[1].nativeElement.textContent).toContain(gameCardMock.buttons[1].name));
        it('should have a join button', () => expect(gameButtons.children[2].nativeElement.textContent).toContain(gameCardMock.buttons[2].name));
        it('should have correct themes', () => {
          expect(gameButtons.children[0].nativeElement.classList.contains('af-button--primary')).toBeTrue();
          expect(gameButtons.children[1].nativeElement.classList.contains('af-button--error')).toBeTrue();
          expect(gameButtons.children[2].nativeElement.classList.contains('af-button--accent')).toBeTrue();
        });
      });
    });
  });
});
