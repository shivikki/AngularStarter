import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ImageServiceService {

  public imgList = {
    users: [
      { id: 1, imgName: 'Dog', imgPath: './assets/dog.jpg', imgSize: '400px', caption: 'A dog is the only thing on earth that loves you more than you love yourself', height: '100px', width: '100px' },
      { id: 2, imgName: 'Cat', imgPath: './assets/cat.jpg', imgSize: '600px', caption: 'All you need is love and a cat.', height: '300px', width: '300px' },
      { id: 3, imgName: 'My fish Nemo', imgPath: './assets/fish.jpg', imgSize: '400px', caption: 'Fish are friends, not food.', height: '300px', width: '500px' },
    ]
  }

  


  private images = new BehaviorSubject(this.imgList);
  public imgData = this.images.asObservable();

  private setIndex = new BehaviorSubject(null);
  public indexVal = this.setIndex.asObservable();

  public list:any=[];

  constructor(private http: HttpClient) { }

  getImgData(): Observable<any> {
    return this.imgData;
  }

  getImgByIndex(index: any) {

    this.imgData.subscribe(
      (data) => {
        let temp = data;
        console.log("temp adat", temp.users)
        temp.users.forEach((v) => {
          if (v.id == index) {
            console.log(v, "index matched");
            return temp;
          }
          else {
            return;
          }
        })
      },
      (error) => {
        error.log(error)
      }
    )



  }

  setImgData(value: any) {
    return this.images.next(value);
  }

  //------
  getIndexvalue(): Observable<any> {
    return this.indexVal;
  }

  setIndexValue(value: any) {
    console.log(value, "called")
    return this.setIndex.next(value);
  }
  //
  tempFun(ind: any) {
    this.list=this.imgList;
    console.log("in passes", ind)
    let returnval:any={ id: '', imgName: '', imgPath: '', imgSize: '', caption: '', height: '', width: '' };

    for(let i=0;i<this.list.users.length;i++){
      if(this.list.users[i].id==ind){
        //console.log(tempdata.users[i], "temp data");
        returnval= this.list.users[i];
      }
    }
    // this.imgData.subscribe((v) => {
    //   let tempdata: any = v;
    //   console.log(tempdata.users, "temp data","id",ind);
    //   for(let i=0;i<tempdata.users.length;i++){
    //     if(tempdata.users[i].id==ind){
    //       console.log(tempdata.users[i], "temp data");
    //       returnval= tempdata.users[i];
    //     }
        
    //   }
      
      
    // })
    console.log("return ", returnval)
      return returnval;
  }
}
