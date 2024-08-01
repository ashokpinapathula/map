import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';
import { Chart } from 'angular-highcharts';
import HighchartsMap from 'highcharts/modules/map';
import * as mapDataWorld from '../assets/map/low.json'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'isa';

  Highcharts: typeof Highcharts = Highcharts;
  chart: Chart;

  constructor() { 
    this.chart = new Chart ({
      chart: {
        type: 'line'
      },
      title: {
        text: 'My First Angular charts'
      },
      series: [{
        type: 'line',
        name: 'Sample Data',
        data: [1,2,3,4]
      }]
    });
  }
}
