import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { PatentService } from '../patent.service';
import {Patents} from '../models/patents';
import {Company} from '../models/company';
import {Search} from '../models/search';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-patents',
  templateUrl: './patents.component.html',
  styleUrls: ['./patents.component.css']
})

export class PatentsComponent implements OnInit {
  
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels; 
  public barChartData:any[]; 
  public barChartType = 'bar';
  public barChartLegend = true;
  
  public doughnutChartLabels;
  public doughnutChartData:number[];
  public doughnutChartType = 'doughnut';
  
  chartdata;
  chartdata1;
  showchart=false;
  showchart1=false;
  company_name;
  search_text;

  year: number[] = [undefined, 2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018];

  tableColumns: string[] = ['applicationType', 'documentId', 'applicationNumber', 'documentType','title','year','assignee','publicationDate'];
 
  apidata; 
  dataSource;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private patentService: PatentService) { }
  
  ngOnInit() {

  	this.patentService.getAll().subscribe(data => 
  	{
  		//console.log(data);
  		this.apidata = data.response.docs;
		  //this.apidata.publicationDate = this.apidata.publicationDate | date; 
		  this.dataSource = new MatTableDataSource<Patents>(this.apidata);
  		this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
  	});

  	this.patentService.getAllC().subscribe(data => 
  	{
  		//console.log(data);
  		this.chartdata = data;

  		this.barChartLabels = this.chartdata.companies;
  		this.barChartData = [{data: this.chartdata.numOfPatents, label: 'No. of Patents by Companies'}];
  		this.showchart=true;
  	});

	  this.patentService.getAllC1().subscribe(data => 
  	{
  		//console.log(data);
  		this.chartdata1 = data;

  		this.doughnutChartLabels = this.chartdata1.searchStr;
  		this.doughnutChartData = this.chartdata1.numOfPatents;
  		this.showchart1=true;
  	});

  }

  public chartClicked(e:any):void{
    this.company_name=e.active[0]._model.label;
    console.log(this.company_name);
    this.dataSource.filter = this.company_name.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }

  public chartClicked1(e:any):void{
    //this.search_text=e.active[0]._model.label;
    //console.log(this.search_text);
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
       // const value = chart.data.datasets[0].data[clickedElementIndex];
        this.search_text=label;
        console.log(this.search_text);
      }
    }
    this.dataSource.filter = this.search_text.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }



  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  onChange(e:any):void{
    this.dataSource.filter = e;
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}