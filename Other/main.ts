



import { enableProdMode } from '@angular/core'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { AppModule } from './app/app.module'
import { environment } from './environments/environment'



if ( environment.production ) { enableProdMode( ) }

platformBrowserDynamic( ).bootstrapModule( AppModule )
	.then( ( success: any ) => console.log( 'It\'s aliiiive!!!' ) )
	.catch( ( err: any ) => console.error( err ) )

	
