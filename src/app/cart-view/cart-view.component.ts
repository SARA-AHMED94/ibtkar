import { Component, OnInit } from '@angular/core';
import { SharedataService } from '../sharedata.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit {

  public arr: Array<object>;
  public val: boolean;

  constructor(private data: SharedataService) {
    this.arr =this.arr|| this.data.getArr();
    console.log(this.arr);
    this.val = true;
  }

  onKey(value: number) {
    if (value < 0) {
      this.val = false;
    }
  }
  remove(i: number) {
    this.arr.splice(i, 1);

  }
  ngOnInit() {
  }

}
