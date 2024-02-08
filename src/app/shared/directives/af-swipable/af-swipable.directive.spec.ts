import { AFSwipableDirective } from './af-swipable.directive';

describe('AFSwipableDirective', () => {

  let directive: AFSwipableDirective;
  beforeEach(() => {
    directive = new AFSwipableDirective();
  });

  it('should create', () => {
    expect(directive).toBeTruthy();
  });

  describe('swipe events', () => {
    let swipeSpy: {
      left: jasmine.Spy,
      right: jasmine.Spy,
      up: jasmine.Spy,
      down: jasmine.Spy,
      rightDistance: jasmine.Spy,
      topDistance: jasmine.Spy
    };

    beforeEach(() => {
      swipeSpy = {
        left: spyOn(directive.leftSwipe, 'emit'),
        right: spyOn(directive.rightSwipe, 'emit'),
        up: spyOn(directive.upSwipe, 'emit'),
        down: spyOn(directive.downSwipe, 'emit'),
        rightDistance: spyOn(directive.rightSwipeDistance, 'emit'),
        topDistance: spyOn(directive.topSwipeDistance, 'emit')
      };
    });
    it('swipe up', () => {
      directive.onTouchstart({ touches: [getTouch(100, 100)] } as any);
      directive.onTouchmove({ touches: [getTouch(100, 40)] } as any);
      directive.onTouchend({ changedTouches: [getTouch(100, 40)] } as any);

      expect(swipeSpy.rightDistance).toHaveBeenCalledWith(0);
      expect(swipeSpy.topDistance).toHaveBeenCalledWith(60);
      expect(swipeSpy.up).toHaveBeenCalled();
    });

    it('swipe down', () => {
      directive.onTouchstart({ touches: [getTouch(100, 100)] } as any);
      directive.onTouchmove({ touches: [getTouch(100, 160)] } as any);
      directive.onTouchend({ changedTouches: [getTouch(100, 160)] } as any);

      expect(swipeSpy.rightDistance).toHaveBeenCalledWith(0);
      expect(swipeSpy.topDistance).toHaveBeenCalledWith(-60);
      expect(swipeSpy.down).toHaveBeenCalled();
    });

    it('swipe left', () => {
      directive.onTouchstart({ touches: [getTouch(100, 100)] } as any);
      directive.onTouchmove({ touches: [getTouch(40, 100)] } as any);
      directive.onTouchend({ changedTouches: [getTouch(40, 100)] } as any);

      expect(swipeSpy.rightDistance).toHaveBeenCalledWith(60);
      expect(swipeSpy.topDistance).toHaveBeenCalledWith(0);
      expect(swipeSpy.left).toHaveBeenCalled();
    });

    it('swipe right', () => {
      directive.onTouchstart({ touches: [getTouch(100, 100)] } as any);
      directive.onTouchmove({ touches: [getTouch(160, 100)] } as any);
      directive.onTouchend({ changedTouches: [getTouch(160, 100)] } as any);

      expect(swipeSpy.rightDistance).toHaveBeenCalledWith(-60);
      expect(swipeSpy.topDistance).toHaveBeenCalledWith(0);
      expect(swipeSpy.right).toHaveBeenCalled();
    });

    it('should prevent swipe if not enough distance', () => {
      directive.onTouchstart({ touches: [getTouch(100, 100)] } as any);
      directive.onTouchmove({ touches: [getTouch(120, 110)] } as any);
      directive.onTouchend({ changedTouches: [getTouch(120, 110)] } as any);

      expect(swipeSpy.rightDistance).toHaveBeenCalledWith(-20);
      expect(swipeSpy.topDistance).toHaveBeenCalledWith(-10);
      expect(swipeSpy.down).not.toHaveBeenCalled();
      expect(swipeSpy.right).not.toHaveBeenCalled();
      expect(swipeSpy.left).not.toHaveBeenCalled();
      expect(swipeSpy.up).not.toHaveBeenCalled();
    });
  });

});

function getTouch(clientX: number, clientY: number): Touch {
  return { 
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
    target: {} as any
  };
}
