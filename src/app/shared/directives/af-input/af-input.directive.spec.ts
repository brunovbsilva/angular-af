import { ElementRef } from '@angular/core';
import { AFInputDirective } from './af-input.directive';
import { ElementRefSpec } from '../../mocks/elemente-ref.spec';
import { TestBed } from '@angular/core/testing';

describe('AFInputDirective', () => {
  let elementRef: ElementRef;
  let directive: AFInputDirective;
  beforeEach(async () => {
    TestBed.configureTestingModule({
      providers: [
        {provide: ElementRef, useClass: ElementRefSpec}
      ]
    }).compileComponents();
    elementRef = TestBed.inject(ElementRef);
  });
  it('should create an instance', () => {
    directive = new AFInputDirective(elementRef);
    expect(directive).toBeTruthy();
  });

  it('should set style', () => {
    const spy = spyOn(elementRef.nativeElement.classList, 'add');
    directive = new AFInputDirective(elementRef);
    expect(spy).toHaveBeenCalledWith('af-input');
  });
});
