import { Component, OnInit } from '@angular/core';
import { QueryService } from '../query.service';
import { SharedataService } from '../sharedata.service';

import { Router } from '@angular/router';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { fail } from 'assert';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public arr: Array<object>;
  public listView: boolean;
  public products: Array<any>;
  public cart: boolean;

  constructor(private q: QueryService,
    private rout: Router,
    private data: SharedataService) {
    this.getProducts();
    this.listView = false;
    this.products = [];
    this.cart = false;
  }
  redirectTo(productName: string) {
    
    this.rout.navigate(["/product/"], { queryParams: { name: productName } });
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
  list(): void {
    this.listView = true;
  }
  grid(): void {
    this.listView = false;
  }

  storeData(item: object, event: any) {
    event.stopPropagation()
    this.products.push(item);
    this.data.setArr(this.products);
    event.target.disabled = true;
  }
  ngOnInit() {

  }

}
