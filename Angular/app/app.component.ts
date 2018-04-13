



import { Component, OnInit, Inject, Injector, PLATFORM_ID } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser'

/* import { HackService } from './hack.service' */



@Component( {
	selector: 'app-root',
	/* templateUrl: 'Partial/AppComponent', */
	/* templateUrl: '../../Views/Partial/AppComponent.cshtml', */
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
} )


export class AppComponent implements OnInit {
	
	private name: string = 'NgCore'
	private meta: MetaDefinition = {
		name: 'description',
		content: 'NgCore, a web app combining Angular, ASP.NET Core, and server-side rendering!'
	}
	title: string = 'app'
	angularClientSideData: string = 'Angular'
	
	
	constructor(
		@Inject( PLATFORM_ID ) private _plat: string,
		/* private _hack: HackService */
		private _route: Router,
		private _url: ActivatedRoute,
		private _title: Title,
		private _meta: Meta,
		private _inject: Injector
	) {  }
	
	
	ngOnInit( ) {
		/* this._title.setTitle( this.name )
		this._meta.updateTag( this.meta ) */
	}
	
}


