import {Component, Input} from '@angular/core';
import {MenuItem} from '../../../../models/menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html'
})
export class MenuItemComponent {
  @Input() item: MenuItem;
  @Input() parentPath: string;
}
