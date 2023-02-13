import { Component } from '@angular/core';
import { CommonService } from './services/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularProject';

  public isOpen=false;
  constructor(public commonServ:CommonService) { 
    this.commonServ.isOpen.subscribe((v)=>{
      this.isOpen=v;
    })
  }
}
