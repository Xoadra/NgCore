



import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'



@Component( {
	selector: 'app-root',
	/* templateUrl: 'Partial/AppComponent', */
	/* templateUrl: '../../Views/Partial/AppComponent.cshtml', */
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )


export class AppComponent {
	
	angularClientSideData: string = 'Angular'
	title: string = 'app'
	
	
	constructor( private _title: Title ) {  }
	
	
	setTitle( title: string ) {
		this._title.setTitle( title )
	}
	
}



