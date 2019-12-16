import { Component, OnInit } from '@angular/core';
import {RoutingUtil} from '../../../utils/routing.util';
import {MenuItem} from '../../../models/menu-item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  menuItems: MenuItem[] = [];

  constructor() { }

  ngOnInit() {
    this.menuItems = RoutingUtil.getMenu();
    console.log(this.menuItems);
  }

}
