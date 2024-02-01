import { ElementRef } from '@angular/core';
import { AFIconButtonDirective } from './af-icon-button.directive';
import { TestBed } from '@angular/core/testing';
import { ElementRefSpec } from '../../mocks/elemente-ref.spec';

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
});
