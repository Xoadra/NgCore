



using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc.Razor;
/* using Microsoft.AspNetCore.SpaServices.Webpack; */
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.FileProviders;



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
			services.Configure<RazorViewEngineOptions>( razor => {
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
			} );
			services.AddMvc( );
			services.AddNodeServices( );
		}
		
		// This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
		public void Configure( IApplicationBuilder app, IHostingEnvironment env ) {
			if ( env.IsDevelopment( ) ) {
				app.UseDeveloperExceptionPage( );
				// Webpack middleware settings for testing purposes
				/* app.UseWebpackDevMiddleware( new WebpackDevMiddlewareOptions {
					ConfigFile = "webpack.defconfig.js"
				} ); */
			}
			else { app.UseExceptionHandler( "/Home/Error" ); }
			app.UseDefaultFiles( );
			app.UseStaticFiles( );
			app.UseStaticFiles( new StaticFileOptions {
				FileProvider = new PhysicalFileProvider( Path.Combine( env.ContentRootPath, "node_modules" ) ),
				RequestPath = "/node_modules"
			} );
			app.UseMvc( routes => {
				routes.MapRoute( name: "default", template: "{controller=Home}/{action=Index}/{id?}" );
				routes.MapSpaFallbackRoute( "spa-fallback", new { controller = "home", action = "index" } );
			} );
		}
		
	}
}


