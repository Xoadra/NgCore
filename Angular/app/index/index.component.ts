



import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

/* import { PreService } from '../services/pre.service' */



@Component( {
	selector: 'app-index',
	/* templateUrl: 'Partial/IndexComponent', */
	/* templateUrl: '../../../Views/Partial/IndexComponent.cshtml', */
	templateUrl: './index.component.html',
	styleUrls: [ './index.component.css' ]
} )


export class IndexComponent {
	
	constructor( /* private _pre: PreService,  */private _title: Title ) {  }
	
}


