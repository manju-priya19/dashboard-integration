import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  default_data: Array<any>;
  constructor() { }

  ngOnInit() {
    this.default_data = [
      { first_name: '', last_name: '', user_name: '' ,start:'',end:'',pri:'',sta:''},
      { first_name: '', last_name: '', user_name: '' ,start:'',end:'',pri:'',sta:'' },
      { first_name: '', last_name: '', user_name: '' ,start:'',end:'',pri:'',sta:'' },
      { first_name: '', last_name: '', user_name: '' ,start:'',end:'',pri:'',sta:'' },
      { first_name: '', last_name: '', user_name: '' ,start:'',end:'',pri:'',sta:'' },
    ];
  
  }

}
