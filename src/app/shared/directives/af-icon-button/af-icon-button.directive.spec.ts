import { ElementRef, input } from '@angular/core';
import { AFIconButtonDirective } from './af-icon-button.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRefSpec } from '../../mocks/elemente-ref.spec';
import { Theme } from '../models/theme.type';

describe('AfIconButtonDirective', () => {
  let elementRef: ElementRef;
  let directive: AFIconButtonDirective;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useClass: ElementRefSpec}
      ]
    }).compileComponents();
    elementRef = TestBed.inject(ElementRef);
  });

  it('should create an instance', () => {
    directive = new AFIconButtonDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  describe('On Init', () => {
    let spyAddClass: jasmine.Spy;
    let appendChildSpy: jasmine.Spy;
    const themes: (Theme | undefined)[] = [ 'primary', 'accent', 'warn', 'error' ];
    beforeEach(() => {
      spyAddClass = spyOn(elementRef.nativeElement.classList, 'add');
      appendChildSpy = spyOn(elementRef.nativeElement, 'appendChild');
    });
    themes.forEach(theme => {
      beforeEach(() => {
        directive = new AFIconButtonDirective(elementRef);
        directive.theme = input(theme);
        directive.icon = input('home');
        directive.ngOnInit();
      });
      it(`should set style ${theme}`, () => {
        expect(spyAddClass).toHaveBeenCalledWith(`af-icon-button`);
        expect(spyAddClass).toHaveBeenCalledWith(`af-icon-button--${theme}`);
        expect(appendChildSpy).toHaveBeenCalled();
      });
    });
  });
});
