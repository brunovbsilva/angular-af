import { AFDropdownDirective, HorizontalOpen, VerticalOpen } from './af-dropdown.directive';
import { AFDropdownItemDirective } from './af-dropdown-item.directive';
import { Component, DebugElement, input } from '@angular/core';
import { ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'app-test-component',
  standalone: true,
  imports: [
    AFDropdownDirective,
    AFDropdownItemDirective
  ],
  template: `
    <div AFDropdown class="dropdown"
      trigger=".dp-trigger" triggerFor=".dp-list"
      [verticalOpen]="verPos()" [horizontalOpen]="horPos()">
      <button class="dp-trigger">trigger</button>
      <div class="dp-list">
        <a AFDropdownItem icon="exemple1">item 1</a>
        <a AFDropdownItem icon="exemple2">item 2</a>
        <a AFDropdownItem icon="exemple3">item 3</a>
      </div>
    </div>
  `,
  styles: ''
})
class TestComponent {
  horPos = input.required<HorizontalOpen>();
  verPos = input.required<VerticalOpen>();
}

describe('Test component for directive', () => {
  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TestComponent ],
    }).compileComponents();
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
  });

  describe('dropdown Directive', () => {

    describe('', () => {
      let dropdown: DebugElement;
      let trigger: DebugElement;
      let list: DebugElement;
      let items: DebugElement[];
      beforeEach(fakeAsync(() => {
        component.horPos = input('left' as HorizontalOpen);
        component.verPos = input('bottom' as VerticalOpen);
        fixture.detectChanges();

        dropdown = fixture.debugElement.query(By.css('.dropdown'));
        trigger = dropdown.query(By.css('.dp-trigger'));
        list = dropdown.query(By.css('.dp-list'));
        items = list.children;
      }));
      it('should have a dropdown with class', () => expect(dropdown.classes['af-dropdown']).toBeTrue());
      it('should have a trigger with class', () => expect(trigger.classes['af-dropdown__trigger']).toBeTrue());
      it('should have a list with class', () => expect(list.classes['af-dropdown__list']).toBeTrue());
      it('should have icon on each item', () => {
        expect(items[0].nativeElement.textContent).toContain('exemple1');
        expect(items[0].nativeElement.textContent).toContain('item 1');
        expect(items[1].nativeElement.textContent).toContain('exemple2');
        expect(items[1].nativeElement.textContent).toContain('item 2');
        expect(items[2].nativeElement.textContent).toContain('exemple3');
        expect(items[2].nativeElement.textContent).toContain('item 3');
      });
      it('should open the list when trigger is clicked', () => {
        triggerClick(fixture, trigger.nativeElement);
        expect(list.classes['af-dropdown__list--open']).toBeTrue()
      });
      describe('on open list', () => {
        beforeEach(() => triggerClick(fixture, trigger.nativeElement));
        it('should close the list when click on a item', () => {
          triggerClick(fixture, list.queryAll(By.css('.af-dropdown__item'))[0].nativeElement);
          expect(list.classes['af-dropdown__list--open']).toBeFalsy();
        });
        it('should close the list when click outside', () => {
          triggerClick(fixture, document.body);
          expect(list.classes['af-dropdown__list--open']).toBeFalsy();
        });
        it('should close the list when click on trigger again', () => {
          triggerClick(fixture, trigger.nativeElement);
          expect(list.classes['af-dropdown__list--open']).toBeFalsy();
        });
      });
    });

    const horizontalOpen: HorizontalOpen[] = ['left', 'right'];
    const verticalOpen: VerticalOpen[] = ['top', 'bottom'];
    horizontalOpen.forEach(horPos => {
      verticalOpen.forEach(verPos => {
        describe(`${verPos}-${horPos} position`, () => {
          beforeEach(() => {
            component.horPos = input(horPos);
            component.verPos = input(verPos);
            fixture.detectChanges();
          });
          it('should have a translate style on list', () => {
            const list = fixture.nativeElement.querySelector('.dp-list');
            const transform = list.style.transform;
            expect(transform).toContain('translate');
          })
        });
      });
    });
  });
})

function triggerClick (fixture: ComponentFixture<any>, trigger: HTMLElement) {
  trigger.click();
  fixture.detectChanges();
}