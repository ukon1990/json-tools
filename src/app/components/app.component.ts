import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {SubscriptionManager} from '@ukon1990/subscription-manager/dist/subscription-manager';
import {RoutingUtil} from '../utils/routing.util';
import {Title} from '@angular/platform-browser';
import {MenuItem} from '../models/menu-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  appName = 'JSON tools';
  currentPage = '';
  sm = new SubscriptionManager();

  constructor(private router: Router, private title: Title) {
  }

  ngOnInit() {
    RoutingUtil.getMenu();
    this.sm.add(
      this.router.events,
      (event: NavigationEnd) =>
        this.onNavigationChange(event));
  }

  ngOnDestroy(): void {
    this.sm.unsubscribe();
  }

  private onNavigationChange(event: NavigationEnd) {
    const menuItem: MenuItem = RoutingUtil.getCurrentRoute(event.url);
    if (menuItem) {
      this.currentPage = menuItem.title;
      this.title.setTitle(`${this.appName} | ${ menuItem.title }`);
    }
  }
}
