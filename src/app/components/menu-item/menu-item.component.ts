import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavItem } from 'src/app/interfaces/nav-item';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

	//https://stackblitz.com/edit/dynamic-nested-topnav-menu
	@Input() items: NavItem[];
  @ViewChild('childMenu', {static: true}) public childMenu;

  constructor(public router: Router) {
  }

  ngOnInit() {
	}
	
	isMaterialICon(value){
		
		if (value) {
			if (value.search("<i") >= 0 ) {
				return false;
			}
			else{
				return true;
			}
		}
		else{
			return false;
		}

	}

}
