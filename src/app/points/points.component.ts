import { Subscription } from 'rxjs/Subscription';
import { Point } from './point.model';
import { PointsService } from './points.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit, OnDestroy {

  points: Point[];

  pointsSubscription: Subscription;

  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.points = this.pointsService.getPoints();

    this.pointsSubscription = this.pointsService.pointsUpdated.subscribe(
      (points: Point[]) => {
        this.points = points;
      }
    );
  }

  onDelete(i: number) {
    this.pointsService.delete(i);
  }

  ngOnDestroy() {
    this.pointsSubscription.unsubscribe();
  }

}
