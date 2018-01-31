



using System.IO;
using System.Collections.Generic;
using Microsoft.AspNetCore.Hosting;


namespace NgCore {
	public class Program {
		
		/* public static void Main( string[ ] args ) { BuildWebHost( args ).Run( ); }
		
		 public static IWebHost BuildWebHost( string[ ] args ) =>
			 WebHost.CreateDefaultBuilder( args )
				 .UseStartup<Startup>( )
				 .Build( ); */
		
		public static void Main( string[ ] args ) {
			var host = new WebHostBuilder( )
				.UseKestrel( )
				.UseContentRoot(Directory.GetCurrentDirectory( ) )
				.UseIISIntegration( )
				.UseStartup<Startup>( )
				.Build( );
			host.Run( );
		}
		
	}
}


