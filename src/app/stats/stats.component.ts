import { Component, OnInit } from '@angular/core';
import { PointsService } from '../points/points.service';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  chartData: any;

  constructor(public pointsService: PointsService) { }

  ngOnInit() {
    this.chartData = this.pointsService.getChartData();
    console.log(this.chartData);
  }

}
