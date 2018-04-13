



using System;
using System.Threading;
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
		
		public static IHttp Decode( this HttpRequest http ) {
			// Unknown purpose as of yet, but the info here is required further below
			IHttp code = new IHttp( );
			code.cookies = http.Cookies;
			code.headers = http.Headers;
			code.host = http.Host;
			return code;
		}
		
		public static async Task<RenderToStringResult> Prerender( this HttpRequest trans ) {
			// Grab key website data that will be serialized for use in universal rendering
			INodeServices node = trans.HttpContext.RequestServices.GetRequiredService<INodeServices>( );
			IHostingEnvironment zone = trans.HttpContext.RequestServices.GetRequiredService<IHostingEnvironment>( );
			IHttpRequestFeature element = trans.HttpContext.Features.Get<IHttpRequestFeature>( );
			// Identify web app's host and subroute to target for prerending server-side
			String root = zone.ContentRootPath;
			String path = element.RawTarget;
			// Build out the url from the previous parameters for prerendering it's content
			String url = $"{ trans.Scheme }://{ trans.Host }{ path }";
			// Allow for the passing of custom data as a request for the frontend app
			TransferData data = new TransferData( );
			// Customized data sent to the frontend is sent through here as a parameter
			// Feel free to add more custom data here through TransferData class fields
			data.elements = trans.Decode( );
			data.thisCameFromDotNET = "I do it from behind... with C#!!!";
			// Requires a cancellation token for performing universal app prerendering
			CancellationTokenSource origin = new CancellationTokenSource( );
			CancellationToken killer = origin.Token;
			// Locate the generated server-side bundle used for the initial prerendering
			JavaScriptModuleExport js = new JavaScriptModuleExport( root + "/Angular/build/server.bundle" );
			// Serialize and prerender the frontend app as a universal/isomorphic one
			return await Prerenderer.RenderToString( "/", node, killer, js, url, path, data, 30000, trans.PathBase.ToString( ) );
		}
		
	}
}



