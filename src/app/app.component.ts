import { Component, ViewEncapsulation } from '@angular/core';
import { NavItem } from "./interfaces/nav-item";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
	//encapsulation: ViewEncapsulation.None
})
export class AppComponent {
	appTitle = 'Starter Material Angular';
	sidenavTitle = 'Menu App'
	
	mode : string;
	opened: boolean = false;

	navItems: NavItem[] = [
    {
      displayName: 'Home',
			iconName: '<i class="fas fa-home"></i>',
			//disabled: true,
			route: '/',
		},
		{
      displayName: 'Pages User',
      iconName: '<i class="fas fa-user"></i>',
      children: [
        {
          displayName: 'Login',
          iconName: '<i class="fas fa-sign-in-alt"></i>',
					route: '/',					
				},
				{
          displayName: 'Register',
          iconName: '<i class="fas fa-key"></i>',
					route: '/',					
				},
				{
          displayName: 'Forgot Password',
          iconName: '<i class="fas fa-lock"></i>',
					route: '/',					
				},
				{
          displayName: 'Reset Password',
          iconName: '<i class="fas fa-unlock-alt"></i>',
					route: '/',					
        },
      ]
    },
    {
      displayName: 'Components',
      iconName: '<i class="fas fa-cubes"></i>',
      children: [
        {
          displayName: 'Css',
          iconName: 'star_rate',
          children: [
            {
              displayName: 'Component 1',
              iconName: 'star_rate',
              route: '/'
            },
          ]
				},
				{
          displayName: 'Js',
          iconName: 'star_rate',
          children: [
            {
              displayName: 'Component 1',
              iconName: 'star_rate',
              route: '/'
            },
          ]
				},
        {
          displayName: 'Feedback',
          iconName: 'feedback',
          route: 'feedback'
        }
      ]
		},
		{
      displayName: 'Disabled',
			iconName: '<i class="fas fa-user-lock"></i>',
			disabled: true,
			route: '/',
		},
	];
	
	openSideNav(mode: string = 'over'){
		this.mode = mode;
		this.opened = !this.opened;
	}

	closeSideNav(){
		this.opened = false
	}

}
