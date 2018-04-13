



import { Injectable } from '@angular/core'
import { Title, Meta, MetaDefinition } from '@angular/platform-browser'



@Injectable( )


export class HackService {
	
	constructor( private _title: Title, private _meta: Meta ) {  }
	
	
	doItAll( name: string, data: MetaDefinition ) {
		this._title.setTitle( name )
		this._meta.updateTag( data )
	}
	
}


