import { Component, OnInit } from '@angular/core';
//import { ChartsService } from '../charts/components/echarts/charts.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: []
})
export class IndexComponent implements OnInit {
  showloading: boolean = false;

  //public AnimationBarOption;

  constructor(private router:Router) { }

  ngOnInit() {
    //this.AnimationBarOption = this._chartsService.getAnimationBarOption();
  }
btnClick(){
  this.router.navigateByUrl('/data-table');
}
}
