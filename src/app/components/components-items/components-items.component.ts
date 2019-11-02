import { Component, OnInit ,Input} from '@angular/core';
import { Item } from 'src/app/interfaces/item';

@Component({
  selector: 'app-components-items',
  templateUrl: './components-items.component.html',
  styleUrls: ['./components-items.component.scss'],
})
export class ComponentsItemsComponent implements OnInit {

  @Input() items: Item[] = [];

  constructor() { }

  ngOnInit() {}

}
