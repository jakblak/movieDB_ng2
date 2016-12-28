import { Component } from '@angular/core';
import { NavItem } from './navItems';

@Component({
  moduleId: module.id,
  selector: 'mt-navbar',
  templateUrl: 'navbar.component.html'
})

export class NavbarComponent {
  appName: string = "Movie Tracker";

  navItems: NavItem[] = [
    {href: '#', label: 'Home', active: true},
    {href: '#', label: 'New Releases', active: false},
    {href: '#', label: 'Log In', active: false},
    {href: '#', label: 'Sign Out', active: false}
  ];
}
