import { UserInfo } from './../helpers/user';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../helpers/user';
import { FirebaseService } from '../services/firebase.service';
import { ActivatedRoute } from '@angular/router';
declare var $: any;
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  public userInfo: UserInfo;
  // public hostName = ;
  constructor(public active: ActivatedRoute, public user: UserService, public firebaseService: FirebaseService) {
    this.user.initUser(res => {
      // console.log(res)
      this.userInfo = res;
    });
  }
  ngOnInit() {
    console.log(this.active.snapshot.queryParams, 'query params');
  }
  get hostName() {
    return window.location.hostname;
  }
  copyNow() {
    const el = document.createElement('textarea');
    el.value = $('#url-copy').val();
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert('Url Has Been Copied SuccessFully');
    // $('#url-copy').val();
  }

}
