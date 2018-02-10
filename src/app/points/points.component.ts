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

  constructor(private pointsService: PointsService) { }

  ngOnInit() {
    this.points = this.pointsService.getPoints();
  }

  onDelete(i: number) {
    this.pointsService.delete(i);
  }

}
