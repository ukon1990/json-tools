import {Component, Input} from '@angular/core';
import {MenuItem} from '../../../../models/menu-item.model';

@Component({
  selector: 'app-menu-dropdown',
  templateUrl: './menu-dropdown.component.html'
})
export class MenuDropdownComponent {
  @Input() items: MenuItem[];
  @Input() parentPath: string;
}
