import { EventEmitter } from '@angular/core';
import { Observable, of } from 'rxjs';

export default class TranslateServiceSpec {
  public name = 'translate';
  public onLangChange: EventEmitter<any> = new EventEmitter();
  public onTranslationChange: EventEmitter<any> = new EventEmitter();
  public onDefaultLangChange: EventEmitter<any> = new EventEmitter();

  public get(value: string | string[]): Observable<string | any> { return of(value); }
  public instant(value: string | string[]): string | any { return value; }
  public setDefaultLang(lang: string): void { }
  public use(lang: string): void { }
}
