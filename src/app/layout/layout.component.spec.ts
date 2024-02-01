import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { By } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import TranslateServiceSpec from '../shared/mocks/translate.service.spec';
import { SidebarComponent } from './sidebar/sidebar.component';

describe('LayoutComponent', () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  let header: HeaderComponent;
  let sidebar: SidebarComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        LayoutComponent,
        HeaderComponent,
        TranslateModule
      ],
      providers: [
        { provide: TranslateService, useClass: TranslateServiceSpec }
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    header = fixture.debugElement.query(By.css('#header')).nativeElement;
    sidebar = fixture.debugElement.query(By.css('#sidebar')).nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(header).toBeTruthy();
    expect(sidebar).toBeTruthy();
  });
});
