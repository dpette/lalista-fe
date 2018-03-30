import { NavService } from './../nav/nav.service';
import { Point } from './point.model';
import { PointsService } from './points.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {

  points: Point[];

  constructor(private pointsService: PointsService, private navService: NavService) { }

  ngOnInit() {
    this.points = this.pointsService.getPoints();

    this.navService.setTitle('Storico Punti');
    this.navService.setBasicLevel();

    this.pointsService.pointsUpdated.subscribe(
      (points: Point[]) => {
        this.points = points;
      }
    );
  }

  onDelete(i: number) {
    this.pointsService.delete(i);
  }

}
