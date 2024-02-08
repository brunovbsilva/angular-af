import { ComponentFixture, DeferBlockBehavior, DeferBlockFixture, DeferBlockState, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { GameListComponent } from './game-list.component';
import { DebugElement, input, ɵDeferBlockState } from '@angular/core';
import { gameCardMock } from '../../../shared/mocks/objects/game-card.spec';
import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from '../../../shared/mocks/translate.service.spec';

describe('GameListComponent', () => {
  let component: GameListComponent;
  let fixture: ComponentFixture<GameListComponent>;
  let deferFixture: DeferBlockFixture[];

  let header: DebugElement;
  let games: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        GameListComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ],
      deferBlockBehavior: DeferBlockBehavior.Manual
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameListComponent);
    component = fixture.componentInstance;
    component.title = input('Game List');
    component.games = input([
      gameCardMock,
      gameCardMock,
      gameCardMock
    ]);

    fixture.detectChanges();
    deferFixture = await fixture.getDeferBlocks();
    header = fixture.debugElement.query(By.css('.list-header'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('HTML', () => {
    describe('Header', () => {
      let title: DebugElement;
      let seeAll: DebugElement;
      beforeEach(() => {
        title = header.query(By.css('.list-header__title'));
        seeAll = header.query(By.css('.list-header__see-all'));
      });
      it('should exist', () => expect(header).toBeTruthy());
      it('should have a title', () => expect(title).toBeTruthy());
      it('should have a title with the input value', () => expect(title.nativeElement.textContent).toContain('Game List'));
      it('should have a see all link', () => expect(seeAll).toBeTruthy());
      it('should emit onSeeAll when see all is clicked', () => {
        const spyEmit = spyOn(component.onSeeAll, 'emit');
        seeAll.nativeElement.click();
        expect(spyEmit).toHaveBeenCalled();
      });
    });
    describe('Game list', () => {
      let gameCards: DebugElement[];
      let gameCardsLoading: DebugElement[];
      describe('Before games are loaded', () => {
        beforeEach(fakeAsync(() => {
          deferFixture.map(x => x.render(ɵDeferBlockState.Loading));
          tick(0);
          games = fixture.debugElement.query(By.css('.game-list'));
          gameCardsLoading = fixture.debugElement.queryAll(By.css('.game-card-loading'))
        }));
        it('should exist', () => expect(games).toBeTruthy());
        it('should have a game card for each game', () => expect(gameCardsLoading.length).toBe(3));
      });
      describe('After games are loaded', () => {
        beforeEach(fakeAsync(() => {
          deferFixture.map(x => x.render(ɵDeferBlockState.Complete));
          tick(0);
          games = fixture.debugElement.query(By.css('.game-list'));
          gameCards = fixture.debugElement.queryAll(By.css('app-game-card'));
        }));
        it('should exist', () => expect(games).toBeTruthy());
        it('should have a game card for each game', () => expect(gameCards.length).toBe(3));
      });
    });
  })

});
