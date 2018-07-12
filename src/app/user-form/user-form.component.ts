import { Component, OnInit } from '@angular/core';
import { NgModel, NgForm } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { COMPOSITION_BUFFER_MODE } from '@angular/forms/src/directives/default_value_accessor';
import { fail } from 'assert';
import { collectExternalReferences } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  public submitdata: object;
  closeResult: string;

  constructor(private goHome: Router, private modalService: NgbModal) {
    this.submitdata = {};
  }


  open(content) {
    this.modalService.open(content).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  myFunc(data: NgForm, d: any, event): void {

    if (!data.valid) {
      event.stopPropagation();
      this.open(d);

    }
    else {
      this.redirectToHome();
    }
  }

  redirectToHome(): void {
    this.goHome.navigate(['//']);
  }

  ngOnInit() {
  }

}
