import { DestroyRef, Injectable, inject } from '@angular/core';
import { interval } from 'rxjs';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root'
})
export class IntervalService {
  public myInterval$ = interval(1000);

  //public detroyRef = inject(DestroyRef);

  public startListeningInterval(detroyRef: any): void {
    this.myInterval$
      .pipe(takeUntilDestroyed(detroyRef))
      .subscribe((value) => {
        console.log(value);
      });
  }

  public buildName(firstName: string, lastName: string): string {
    console.log('building name');

    return `${firstName} ${lastName}`;
  }
}
