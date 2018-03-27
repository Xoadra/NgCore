



using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.NodeServices;
using Microsoft.AspNetCore.SpaServices.Prerendering;
using Microsoft.Extensions.DependencyInjection;
using NgCore.Models;



namespace NgCore.Pre {
    public static class HttpPrerender {
		
		public static IRequest Data( this HttpRequest data ) {
			// Unknown purpose as of yet, but the info here is required further below
			IRequest ugly = new IRequest( );
			ugly.cookies = data.Cookies;
			ugly.headers = data.Headers;
			ugly.host = data.Host;
			return ugly;
		}
		
		public static async Task<RenderToStringResult> Prerender( this HttpRequest data ) {
			// Grab key website data that will be serialized for use in universal rendering
			var node = data.HttpContext.RequestServices.GetRequiredService<INodeServices>( );
			var zone = data.HttpContext.RequestServices.GetRequiredService<IHostingEnvironment>( );
			var root = zone.ContentRootPath;
			var item = data.HttpContext.Features.Get<IHttpRequestFeature>( );
			var query = item.RawTarget;
			var url = $"{ data.Scheme }://{ data.Host }{ query }";
			// Allow for the passing of custom data as a request for the frontend app
			TransferData trans = new TransferData( );
			// Feel free to add more custom data here through TransferData class fields
			trans.info = data.Data( );
			trans.thisCameFromDotNET = "I do it from behind... with C#!!!";
			// Requires a cancellation token for performing universal app prerendering
			System.Threading.CancellationTokenSource ban = new System.Threading.CancellationTokenSource( );
			System.Threading.CancellationToken kill = ban.Token;
			// Serialize and prerender the frontend app as a universal/isomoprphic one
			return await Prerenderer.RenderToString(
				"/",
				node,
				kill,
				// This will be the eventual location of the server-side distribution folder
				// Doesn't currently work with currently implemented file bundling setup
				new JavaScriptModuleExport( root + "/Root/server.bundle.js" ),
				/* new JavaScriptModuleExport( root + "/Root/Angular" ), */
				url,
				query,
				// Customized data sent to the frontend is sent through here as a param
				trans,
				30000,
				data.PathBase.ToString( )
			);
		}
		
	}
}


