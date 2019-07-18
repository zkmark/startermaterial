import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from 'src/app/interfaces/nav-item';


@Component({
  selector: 'app-sidenav-item',
  templateUrl: './sidenav-item.component.html',
  styleUrls: ['./sidenav-item.component.scss']
})
export class SidenavItemComponent implements OnInit {

  @Input() items: NavItem[];
  @ViewChild('childMenuNav', {static: true}) public childMenuNav;

  constructor(public router: Router) {
  }

  ngOnInit() {
  }

}
