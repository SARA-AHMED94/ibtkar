import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs/internal/observable/from';
import { QueryService } from '../query.service';
import { NgModel, NgForm } from '@angular/forms';
import { validateConfig } from '@angular/router/src/config';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public product: string;
  public arr: Array<object>;
  public val: boolean;

  constructor(private r: ActivatedRoute, private q: QueryService) {
    this.r.queryParams.subscribe(param => {
      this.product = param.name;
      this.val = true;
    }
    )
    this.getProducts();
  }
  onKey(value: number) {
    if (value < 0) {
      this.val = false;
    }
  }
  getProducts(): void {
    let path: string = './assets/products_data.json';
    this.q.getData(path).subscribe(
      res => {
        this.arr = res;
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit() {
  }

}
