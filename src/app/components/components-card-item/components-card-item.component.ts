import { Component, OnInit, Input, TemplateRef } from "@angular/core";
import { Item } from "src/app/interfaces/item";

import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";

@Component({
  selector: "app-components-card-item",
  templateUrl: "./components-card-item.component.html",
  styleUrls: ["./components-card-item.component.scss"]
})
export class ComponentsCardItemComponent implements OnInit {
  modalRef: BsModalRef;
  @Input() item: Item;
  constructor(private modalService: BsModalService) {}
  numbers: [];
  quantity;
  items = [];
  choice:Item;
  ngOnInit() {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  holi() {
    console.log("holi");
  }

  add(price,name) {
    let choice = {name,price,quantity:this.quantity}
    this.items.push(choice)
    console.log(this.items)

  }
}
