import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { ImageServiceService } from 'src/app/services/image-service.service';

@Component({
  selector: 'app-image-view',
  templateUrl: './image-view.component.html',
  styleUrls: ['./image-view.component.scss']
})
export class ImageViewComponent implements OnInit {

  constructor(private imgServ: ImageServiceService, private commonServ: CommonService) { }

  public imageList: any;
  ngOnInit(): void {
    this.getInfo();
    
  }

  viewDetails(img: any) {
    this.commonServ.setIsOpen(true);
    console.log(img.id,"set id from view")
    this.imgServ.setIndexValue(img.id);
    
  }

  getInfo() {
    this.imgServ.imgData.subscribe((v) => {
      this.imageList = v;
    })

    console.log(this.imageList.users,"user liest")
  }

  // getImgInfo() {
  //   this.imgServ.getImgData().subscribe(
  //     (data) => {
  //       console.log(data);
  //       this.imageList = data;


  //     },
  //     (error) => {

  //     }
  //   )
  // }

}
