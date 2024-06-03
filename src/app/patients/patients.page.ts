import { Component, OnInit } from '@angular/core';
import { RefresherCustomEvent } from '@ionic/angular';
@Component({
  selector: 'app-patients',
  templateUrl: './patients.page.html',
  styleUrls: ['./patients.page.scss'],
})
export class PatientsPage implements OnInit {
  // public folder: [] = [{
  // }];
  constructor() { }
  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }
  ngOnInit() {
  }

}
