import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedataService {
  private arr = [];

  constructor() { }

  setArr(value){
    this.arr=value;
  }
  getArr(){
    return this.arr;
  }
}
