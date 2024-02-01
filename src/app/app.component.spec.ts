import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from './shared/mocks/translate.service.spec';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let translate: TranslateService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ],

    }).compileComponents();

    translate = TestBed.inject(TranslateService);
  });

  it('should create the app', () => {
    const defaultLangSpy = spyOn(translate, 'setDefaultLang');
    const useSpy = spyOn(translate, 'use');

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    fixture.detectChanges();
    
    expect(app).toBeTruthy();
    expect(defaultLangSpy).toHaveBeenCalledWith('en-US');
    expect(useSpy).toHaveBeenCalled();
  });
});
