import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarrousselComponent } from './image-carroussel.component';
import { DebugElement, input } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('ImageCarrousselComponent', () => {
  let component: ImageCarrousselComponent;
  let fixture: ComponentFixture<ImageCarrousselComponent>;

  let carroussel: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ImageCarrousselComponent
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageCarrousselComponent);
    component = fixture.componentInstance;
    component.imageUrls = input([
      'https://airfinder.com/image-1.jpg',
      'https://airfinder.com/image-2.jpg',
      'https://airfinder.com/image-3.jpg',
      'https://airfinder.com/image-4.jpg',
      'https://airfinder.com/image-5.jpg',
      'https://airfinder.com/image-6.jpg',
      'https://airfinder.com/image-7.jpg',
    ]);
    fixture.detectChanges();

    carroussel = fixture.debugElement.query(By.css('.image-carroussel'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('on HTML', () => {
    it('should render the carroussel', () => expect(carroussel).toBeTruthy());
    describe('should render only one image at time', () => {
      const indexes = [0, 1, 3];
      indexes.forEach(index => {
        describe(`index ${index}`, () => {
          let image: DebugElement;
          let counter: DebugElement;
          let dots: DebugElement;
          beforeEach(() => {
            component.setIndex(index);
            fixture.detectChanges();
            image = carroussel.query(By.css('.image-carroussel__image'));
            counter = carroussel.query(By.css('.image-carroussel__counter'));
            dots = carroussel.query(By.css('.image-carroussel__dots'));
          });
          it('should render a image', () => expect(image).toBeTruthy());
          it('should render the correct image', () => expect(image.nativeElement.src).toBe(component.imageUrls()[index]));
          it('should render a counter', () => expect(counter).toBeTruthy());
          it('should have the correct counter', () => expect(counter.nativeElement.textContent).toBe(`${index + 1}/7`));
          it('should render dots', () => expect(dots).toBeTruthy());
          it('should have a dot for each image', () => expect(dots.children.length).toBe(5));
          it('should have the correct dot active', () => expect(dots.query(By.css('.image-carroussel__dot--active'))).toBeTruthy());
        });
      });
    });

    describe('when swipe', () => {
      let nextSpy: jasmine.Spy;
      let previousSpy: jasmine.Spy;
      beforeEach(() => {
        nextSpy = spyOn(component, 'next').and.callThrough();
        previousSpy = spyOn(component, 'previous').and.callThrough();
      });
      describe('on first image', () => {
        beforeEach(() => component.setIndex(0));
        describe('swipe left', () => {
          beforeEach(() => swipeEvent(carroussel, -100, 0));
          it('should call next', () => expect(nextSpy).toHaveBeenCalled());
          it('should set counter to 2', () => expect(component.counter()).toBe('2/7'));
        });
        describe('swipe right', () => {
          beforeEach(() => swipeEvent(carroussel, 100, 0));
          it('should call previous', () => expect(previousSpy).toHaveBeenCalled());
          it('should keep counter on 1', () => expect(component.counter()).toBe('1/7'));
        });
      });
      describe('on middle image', () => {
        beforeEach(() => component.setIndex(1));
        describe('swipe left', () => {
          beforeEach(() => swipeEvent(carroussel, -100, 0));
          it('should call next', () => expect(nextSpy).toHaveBeenCalled());
          it('should set counter to 3', () => expect(component.counter()).toBe('3/7'));
        });
        describe('swipe right', () => {
          beforeEach(() => swipeEvent(carroussel, 100, 0));
          it('should call previous', () => expect(previousSpy).toHaveBeenCalled());
          it('should set counter to 1', () => expect(component.counter()).toBe('1/7'));
        });
      });
      describe('on last image', () => {
        beforeEach(() => component.setIndex(6));
        describe('swipe left', () => {
          beforeEach(() => swipeEvent(carroussel, -100, 0));
          it('should call next', () => expect(nextSpy).toHaveBeenCalled());
          it('should keep counter on 7', () => expect(component.counter()).toBe('7/7'));
        });
        describe('swipe right', () => {
          beforeEach(() => swipeEvent(carroussel, 100, 0));
          it('should call previous', () => expect(previousSpy).toHaveBeenCalled());
          it('should set counter to 6', () => expect(component.counter()).toBe('6/7'));
        });
      });
    });
  });
});

function swipeEvent(element: DebugElement, x: number, y: number) {
  element.nativeElement.dispatchEvent(new TouchEvent('touchstart', { touches: [getTouch(100, 100)], targetTouches: [], changedTouches: [] }));
  element.nativeElement.dispatchEvent(new TouchEvent('touchmove', { touches: [getTouch(100 + x, 100 + y)], targetTouches: [], changedTouches: [] }));
  element.nativeElement.dispatchEvent(new TouchEvent('touchend', { changedTouches: [getTouch(100 + x, 100 + y)], targetTouches: [], touches: [] }));
};

function getTouch(clientX: number, clientY: number): Touch {
  return new Touch({ 
    altitudeAngle: 0,
    azimuthAngle: 0,
    clientX: clientX, 
    clientY: clientY,
    force: 0,
    identifier: 0,
    pageX: 0,
    pageY: 0,
    radiusX: 0,
    radiusY: 0,
    rotationAngle: 0,
    screenX: 0,
    screenY: 0,
    target: new EventTarget(),
    touchType: 'direct' as TouchType
  } as TouchInit);
}
