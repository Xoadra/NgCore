



import { Component } from '@angular/core'



@Component( {
	selector: 'app-about',
	/* templateUrl: 'Partial/AboutComponent', */
	/* templateUrl: '../../../Views/Partial/AboutComponent.cshtml', */
	templateUrl: './about.component.html',
	styleUrls: [ './about.component.css' ]
} )


export class AboutComponent {
	
	page: string = 'About'
	
}



