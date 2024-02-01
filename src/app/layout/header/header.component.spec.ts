import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from '../../shared/mocks/translate.service.spec';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  let header: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeaderComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    header = fixture.debugElement.query(By.css('header'));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(header).toBeTruthy();
  });

  describe('header', () => {
    let projectName: DebugElement;
    it('should have a project name', () => {
      projectName = header.query(By.css('#project-name'));
      expect(projectName).toBeTruthy();
    });
  })
});
