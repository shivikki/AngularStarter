import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public isOpen = false;

  public imgView: any;

  public imgSelected: any;
  public imgList: any;
  public imgSubmit: any;
  constructor(public commonServ: CommonService, private imgServ: ImageServiceService) {
    this.commonServ.isOpen.subscribe((v) => {
      this.isOpen = v;
    })

    this.imgServ.indexVal.subscribe((ind) => {
      this.imgView = ind;
      console.log("idex in side var", this.imgView);
      this.imgSubmit= this.imgServ.tempFun(this.imgView);
      this.imgSelected=this.imgSubmit;
      console.log(this.imgSelected, "imga selected")
    }
    )

  }


  ngOnInit(): void {
  }


  public closeSideBar() {
    this.commonServ.setIsOpen(false);
  }

  getInfo(id:any) {
    this.imgServ.imgData.subscribe((v) => {
      this.imgList = v;
      for(let i=0;i<this.imgList.users.length;i++){
        if(id==this.imgList.users[i].id){
          this.imgList.users[i]=this.imgSelected;
          console.log(this.imgList.users[i], "match")
        }
      }
    })
    this.imgServ.setImgData(this.imgList);
    console.log(this.imgList.users, "display img");
    this.closeSideBar();

  }

  saveSideBar(){
    this.getInfo(this.imgView);
  }


}
