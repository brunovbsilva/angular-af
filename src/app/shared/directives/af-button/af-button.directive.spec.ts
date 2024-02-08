import { ElementRef, input } from '@angular/core';
import { AFButtonDirective } from './af-button.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRefSpec } from '../../mocks/elemente-ref.spec';
import { Theme } from '../models/theme.type';

describe('AfButtonDirective', () => {
  let elementRef: ElementRef;
  let directive: AFButtonDirective;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useClass: ElementRefSpec}
      ]
    }).compileComponents();
    elementRef = TestBed.inject(ElementRef);
  });

  it('should create an instance', () => {
    directive = new AFButtonDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  describe('set styles', () => {
    let spyAddClass: jasmine.Spy;
    const themes: Theme[] = [ 'primary', 'accent', 'warn', 'error' ];
    themes.forEach(theme => {
      it(`should set style ${theme}`, () => {
        spyAddClass = spyOn(elementRef.nativeElement.classList, 'add');
        directive = new AFButtonDirective(elementRef);
        directive.theme = input(theme);

        directive.ngOnInit();

        expect(spyAddClass).toHaveBeenCalledWith(`af-button`);
        expect(spyAddClass).toHaveBeenCalledWith(`af-button--${theme}`);
      });
    });
  });
});
