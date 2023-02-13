import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //public isOpen=false;
  public isSideOpen= new BehaviorSubject(false);
  public isOpen=this.isSideOpen.asObservable();
  setIsOpen(value:any){
    return this.isSideOpen.next(value);
  }

  getIsOpen(){
    return this.isOpen;
  }
  constructor() { }
}
