import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'startermaterial';
	
	mode : string;
	opened: boolean = false;

	openSideNav(mode: string = 'over'){
		this.mode = mode;

		this.opened = !this.opened;

	}

	closeSideNav(){
		this.opened = false
	}

}
