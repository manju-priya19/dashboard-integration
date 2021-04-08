import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  avatarImgSrc: string = 'assets/images/manager..jpg';
  userName: string = 'UserName';
  userPost: string = 'Manager';
  
  constructor() { }

  ngOnInit() {
  }

}
