import { ElementRef } from '@angular/core';
import { AFButtonDirective, Theme } from './af-button.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRefSpec } from '../mocks/elemente-ref.spec';

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
  it('should set style', () => {
    const spy = spyOn(elementRef.nativeElement.classList, 'add');
    directive = new AFButtonDirective(elementRef);
    expect(spy).toHaveBeenCalledWith(`af-button`);
    expect(spy).toHaveBeenCalledWith(`af-button--primary`);
  });
});
