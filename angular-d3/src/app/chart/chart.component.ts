// import { Component, OnInit } from '@angular/core';
// import * as d3 from 'd3';
// import * as c3 from 'c3';

// @Component({
//   selector: 'app-chart',
//   templateUrl: './chart.component.html',
//   styleUrls: ['./chart.component.css']
// })
// export class ChartComponent implements OnInit {
//   chart: any;

//   // Bar chart data
//   public barChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   public barChartData: any[] = [
//     { name: 'Series A', value: [65, 59, 80, 81, 56, 55, 40] },
//     { name: 'Series B', value: [28, 48, 40, 19, 86, 27, 90] }
//   ];
//   public barChartType = 'bar';
//   public barChartOptions: any = {
//     showVerticalLines: false,
//     responsive: true
//   };

//   // Line chart data
//   public lineChartLabels: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
//   public lineChartData: any[] = [
//     { name: 'Series A', series: [
//       { name: 'January', value: 65 },
//       { name: 'February', value: 59 },
//       { name: 'March', value: 80 },
//       { name: 'April', value: 81 },
//       { name: 'May', value: 56 },
//       { name: 'June', value: 55 },
//       { name: 'July', value: 40 }
//     ] },
//     { name: 'Series B', series: [
//       { name: 'January', value: 28 },
//       { name: 'February', value: 48 },
//       { name: 'March', value: 40 },
//       { name: 'April', value: 19 },
//       { name: 'May', value: 86 },
//       { name: 'June', value: 27 },
//       { name: 'July', value: 90 }
//     ] }
//   ];
//   public lineChartType = 'line';
//   public lineChartOptions: any = {
//     responsive: true
//   };

//   // Pie chart data
//   public pieChartLabels: string[] = ['Red', 'Blue', 'Yellow'];
//   public pieChartData: any[] = [
//     { name: 'Red', value: 300 },
//     { name: 'Blue', value: 500 },
//     { name: 'Yellow', value: 100 }
//   ];
//   public pieChartType = 'pie';
//   public pieChartOptions: any = {
//     responsive: true
//   };

//   ngOnInit(): void {
//     this.loadChartData();
//   }

//   loadChartData(): void {
//     d3.csv('assets/Book1.csv')
//       .then((data: any[]) => {
//         // Format your data as needed (e.g., convert string numbers to numeric values)
//         data.forEach((d) => {
//           d['Column 1'] = +d['Column 1'];
//           d['Column 2'] = +d['Column 2'];
//         });

//         // Create the chart using C3
//         this.chart = c3.generate({
//           bindto: '#chart',  // The DOM element where the chart will be rendered (e.g., <div id="chart"></div>)
//           data: {
//             columns: [
//               // Specify your columns using the data you loaded
//               ['Column 1', ...data.map((d) => d['Column 1'])],
//               ['Column 2', ...data.map((d) => d['Column 2'])],
//             ],
//           },
//           // Configure additional chart settings (e.g., chart type, axis labels, etc.)
//         });
//       })
//       .catch((error) => {
//         console.error('Error loading CSV data:', error);
//       });
//   }
// }

import { Component, OnInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import * as am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
let root = am5.Root.new("chartdiv1");


let myTheme = am5.Theme.new(root);

myTheme.rule("Grid", ["base"]).setAll({
  strokeOpacity: 0.1
});


let chart = root.container.children.push(am5xy.XYChart.new(root, {
  panX: false,
  panY: false,
  wheelX: "panY",
  wheelY: "zoomY",
  layout: root.verticalLayout
}));


let data = [{
  "year": "Dev Ensar Accounts",
  "europe": 8,
}]

let yRenderer = am5xy.AxisRendererY.new(root, {});
let yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
  categoryField: "year",
  renderer: yRenderer,
  tooltip: am5.Tooltip.new(root, {})
}));

yRenderer.grid.template.setAll({
  location: 1
})

yAxis.data.setAll(data);

let xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
  min: 0,
  renderer: am5xy.AxisRendererX.new(root, {
    strokeOpacity: 0.1
  })
}));

let legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.p50,
  x: am5.p50,
}));

function makeSeries(name: string, fieldName: string) {
  let series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: name,
    stacked: true,
    xAxis: xAxis,
    yAxis: yAxis,
    baseAxis: yAxis,
    valueXField: fieldName,
    categoryYField: "year"
  }));

  series.columns.template.setAll({
    tooltipText: "{name}, {categoryY}: {valueX}",
    tooltipY: am5.percent(90)
  });
  series.data.setAll(data);

  series.appear();

  series.bullets.push(function() {
    return am5.Bullet.new(root, {
      sprite: am5.Label.new(root, {
        text: "{valueX}",
        fill: root.interfaceColors.get("alternativeText"),
        centerY: am5.p0,
        centerX: am5.p100,
        populateText: true
      })
    });
  });

}

makeSeries("", "europe");

chart.appear(1000, 100);

  }
}
