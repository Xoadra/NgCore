



import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
/* import { ServerPrebootModule } from 'preboot/server' */

import { AppModuleShared } from './app.advmodule'
import { AppComponent } from './app.component'



@NgModule( {
	imports: [
		// Our Common AppModule
		AppModuleShared,
		ServerModule,
		/* ServerPrebootModule.recordEvents( { appRoot: 'app-root' } ), */
		NoopAnimationsModule,
		// HttpTransferCacheModule still needs fixes for 5.0
		//   Leave this commented out for now, as it breaks Server-renders
		//   Looking into fixes for this! - @MarkPieszak
		// ServerTransferStateModule // <-- broken for the time-being with ASP.NET
	],
	bootstrap: [ AppComponent ]
} )


export class AppModule {  }



