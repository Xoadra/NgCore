



/* import { Injectable, Inject, PLATFORM_ID } from '@angular/core'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser' */

import { Injectable /* PLATFORM_ID, Optional, RendererFactory2, ViewEncapsulation, Inject */ } from '@angular/core'
/* import { DOCUMENT } from '@angular/platform-browser'
import { isPlatformServer } from '@angular/common' */



@Injectable( )


export class PreService {
	
	/* private isServer: boolean = isPlatformServer( this.platform_id ) */
	
	
	constructor(
		/* private rendererFactory: RendererFactory2,
		@Inject( DOCUMENT ) private document,
		@Inject( PLATFORM_ID ) private platform_id */
	) {  }
	
	
/* @Injectable( )


export class PreService {
	
	constructor( @Inject( PLATFORM_ID ) plat: string private _title: Title, private _meta: Meta ) {  }
	
	
	doItAll( name: string, data: MetaDefinition ) {
		this._title.setTitle( name )
		this._meta.updateTag( data )
	} */
	
}



