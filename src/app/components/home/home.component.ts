import { Component, DestroyRef, OnDestroy, OnInit, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, interval, Observable, takeUntil, take, first, Subscription} from 'rxjs';
import { IntervalService } from 'src/app/services/interval.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: []
})
export class HomeComponent implements OnInit, OnDestroy {

  public detroyRef = inject(DestroyRef);

  private intervalService = inject(IntervalService)

  public ngOnInit(): void {
    this.intervalService.startListeningInterval(this.detroyRef);
  }

  ngOnDestroy(): void {
    console.log('Destroy Home');
  }

}
