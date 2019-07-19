import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-my-icon',
  templateUrl: './my-icon.component.html',
  styleUrls: ['./my-icon.component.scss']
})
export class MyIconComponent implements OnInit {

	@Input() iconName: string;

  constructor() { }

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

	}//isMaterialICon

}
