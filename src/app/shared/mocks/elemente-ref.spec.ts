import { Injectable } from "@angular/core";

@Injectable()
export class ElementRefSpec {
  nativeElement = {
    classList: {
      add: () => {},
      remove: () => {},
    },
    appendChild: () => {},
    querySelector: (value: string) => {return document.createElement('div')},
  };
}