import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit {
  private data = [
    {"Framework": "Vue", "Stars": "1.03", "Released": "2014"},
    {"Framework": "React", "Stars": "0.74", "Released": "2013"},
    {"Framework": "Angular", "Stars": "0.55", "Released": "2016"},
    {"Framework": "Backbone", "Stars": "0.4", "Released": "2010"},
    {"Framework": "Ember", "Stars": "0.16", "Released": "2011"},
    {"Framework": "HTML", "Stars": "0.16", "Released": "2018"},
    {"Framework": "css", "Stars": "0.02", "Released": "2018"},
    {"Framework": "java", "Stars": "0", "Released": "2018"},
  ];
  private svg: any;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  ngOnInit(): void {
    this.createSvg();
    this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("figure#bar")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", `translate(${this.margin},${this.margin})`);
  }

  private drawBars(data: any[]): void {
    const x: d3.ScaleBand<string> = d3.scaleBand()
      .range([0, this.width])
      .domain(data.map(d => d.Framework))
      .padding(0);

    const barWidthFactor = 0.4;
    const barSpacingFactor = 0.1;
    const adjustedBarWidth = x.bandwidth() * barWidthFactor;
    const adjustedBarSpacing = x.bandwidth() * (1 - barWidthFactor) * barSpacingFactor;

    const y: d3.ScaleLinear<number, number> = d3.scaleLinear()
      .domain([0, 1.1])
      .range([this.height, 0]);

    this.svg.append("g")
      .attr("transform", `translate(0,${this.height})`)
      .call(d3.axisBottom(x).tickValues([]));

    this.svg.append("g")
      .call(
        d3.axisLeft(y)
          .tickValues([0, 0.55, 1.1])
          .tickFormat(d3.format(".2f"))
      );

    this.svg.selectAll("bars")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d: any) => (x(d.Framework) || 0) + adjustedBarSpacing / 2)
      .attr("y", (d: any) => y(Number(d.Stars)))
      .attr("width", adjustedBarWidth)
      .attr("height", (d: any) => this.height - y(Number(d.Stars)))
      .attr("fill", "#d2d2d2");

    this.svg.selectAll(".bar-label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "bar-label")
      .attr("x", (d: any) => (x(d.Framework) || 0) + adjustedBarSpacing / 2 + adjustedBarWidth / 2)
      .attr("y", (d: any) => y(Number(d.Stars)) - 5)
      .attr("text-anchor", "middle")
      .text((d: any) => d.Stars)
      .style("fill", "black");
  }
}
