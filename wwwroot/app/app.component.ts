



import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'



@Component( {
	selector: 'app-root',
	//templateUrl: './app.component.html',
	templateUrl: './partial/appcomponent',
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


