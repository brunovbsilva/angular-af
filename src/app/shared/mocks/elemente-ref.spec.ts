import { Injectable } from "@angular/core";

@Injectable()
export class ElementRefSpec {
  nativeElement = {
    classList: {
      add: () => {},
      remove: () => {},
    },
  };
}