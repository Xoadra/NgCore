



/* using System; */
using System.IO;
/* using Microsoft.AspNetCore.Http; */
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
/* using Microsoft.AspNetCore.Mvc.Razor; */
/* using Microsoft.AspNetCore.SpaServices.Webpack; */
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Logging;
/* using Microsoft.Net.Http.Headers; */



namespace NgCore {
	public class Startup {
		
		/* public Startup( IConfiguration configuration ) { Configuration = configuration; } */
		
		public Startup( IHostingEnvironment env ) {
			var builder = new ConfigurationBuilder( )
				.SetBasePath( env.ContentRootPath )
				.AddJsonFile( "appsettings.json", optional: true, reloadOnChange: true )
				.AddJsonFile( $"appsettings.{ env.EnvironmentName }.json", optional: true )
				.AddEnvironmentVariables( );
			Configuration = builder.Build( );
		}
		
		public IConfiguration Configuration { get; }
		
		// This method gets called by the runtime. Use this method to add services to the container.
		public void ConfigureServices( IServiceCollection services ) {
			services.AddMvc( );
			services.AddNodeServices( );
			/* services.Configure<RazorViewEngineOptions>( razor => {
				razor.ViewLocationFormats.Clear( );
				razor.ViewLocationFormats.Add( "~/Angular/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Root/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Root/{1}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Root/{1}/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Views/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Views/Home/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Views/Partial/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Views/Shared/{0}" + RazorViewEngine.ViewExtension );
				razor.ViewLocationFormats.Add( "~/Views/{1}/{0}" + RazorViewEngine.ViewExtension );
			} ); */
		}
		
		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure( IApplicationBuilder app, IHostingEnvironment env, ILoggerFactory log ) {
			log.AddConsole( Configuration.GetSection( "Logging" ) );
			log.AddDebug( );
			app.UseStaticFiles( );
			if ( env.IsDevelopment( ) ) {
				app.UseDeveloperExceptionPage( );
				// Webpack middleware settings for testing purposes
				/* app.UseWebpackDevMiddleware( new WebpackDevMiddlewareOptions {
					HotModuleReplacement = true,
					HotModuleReplacementEndpoint = "/build/"
				} ); */
				/* app.UseWebpackDevMiddleware( ); */
			}
			else { app.UseExceptionHandler( "/Home/Error" ); }
			/* app.UseDefaultFiles( ); */
			/* app.UseStaticFiles( ); */
			/* app.UseStaticFiles( new StaticFileOptions {
				FileProvider = new PhysicalFileProvider( Path.Combine( env.ContentRootPath, "node_modules" ) ),
				RequestPath = "/node_modules"
			} ); */
			/* app.UseStaticFiles( new StaticFileOptions( ) {
				OnPrepareResponse = c => {
					// Do not add cache to json files. We need to have new versions when we add new translations.
					if ( !c.Context.Request.Path.Value.Contains( ".json" ) ) {
						c.Context.Response.GetTypedHeaders( ).CacheControl = new CacheControlHeaderValue( ) {
							// Cache everything except json for 30 days
							MaxAge = TimeSpan.FromDays( 30 )
						};
					}
					else {
						c.Context.Response.GetTypedHeaders( ).CacheControl = new CacheControlHeaderValue( ) {
							// Cache json for 15 minutes
							MaxAge = TimeSpan.FromMinutes( 15 )
						};
					}
				}
			} ); */
			app.UseMvc( routes => {
				routes.MapRoute( name: "default", template: "{controller=Home}/{action=Index}/{id?}" );
				/* routes.MapRoute( name: "view", template: "{controller}/{action}.cshtml" ); */
				routes.MapSpaFallbackRoute( "spa-fallback", new { controller = "Home", action = "Index" } );
				/* routes.MapSpaFallbackRoute( "spa", new { controller = "home", action = "index" } );
				routes.MapSpaFallbackRoute( "app", new { controller = "partial", action = "appcomponent" } );
				routes.MapSpaFallbackRoute( "index", new { controller = "partial", action = "indexcomponent" } );
				routes.MapSpaFallbackRoute( "about", new { controller = "partial", action = "aboutcomponent" } );
				routes.MapSpaFallbackRoute( "contact", new { controller = "partial", action = "contactcomponent" } ); */
			} );
		}
		
	}
}


