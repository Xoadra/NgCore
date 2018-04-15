



/* import { InjectionToken, PLATFORM_ID } from '@angular/core'

import { ORIGIN_URL, REQUEST } from '@nguniversal/aspnetcore-engine/tokens'



export const Platform = PLATFORM_ID


export function Url( ) {
	const url: InjectionToken<string> = ORIGIN_URL
	console.log( url )
	return url
}

export function Origin( ) {
	const origin: string = window.location.origin
	console.log( origin )
	console.log( getDOM( ).getLocation( ).origin )
	return origin
}

export function Request( ) {
	const request: InjectionToken<string> = REQUEST
	console.log( request )
	return request
}

export function Cookie( ) {
	const cookie: object = { cookie: document.cookie }
	console.log( cookie )
	console.log( getDOM( ).getDefaultDocument( ).cookie )
	return cookie
} */



/* export class Prerender {
	
	private origin: InjectionToken<string> = ORIGIN_URL
	private request: InjectionToken<string> = REQUEST
	
	
	getOrigin( ) {
		const url: InjectionToken<string> = this.origin
		const origin: string = window.location.origin
		console.log( url )
		console.log( origin )
		console.log( getDOM( ).getLocation( ).origin )
		return { provide: url, useFactory: ( origin ) }
	}
	
	getRequest( ) {
		const request: InjectionToken<string> = this.request
		const cookie: object = { cookie: document.cookie }
		console.log( request )
		console.log( cookie )
		console.log( getDOM( ).getDefaultDocument( ).cookie )
		return { provide: request, useFactory: ( cookie ) }
	}
	
} */



