



using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgCore.Pre;



namespace NgCore.Controllers {
	public class HomeController : Controller {
		
		/* public IActionResult Index( ) {
			ViewData[ "Title" ] = "Home";
			return View( );
		} */
		
		[ HttpGet ]
		public async Task<IActionResult> Index( ) {
			// Setup server-side app prerendering
			var pre = await Request.Prerender( );
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Scripts" ] = pre.Globals[ "scripts" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			return View( );
		}
		
		/* [ HttpGet ] */
		public IActionResult Error( ) {
			return View( /* new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier } */ );
		}
		
		/* public async Task<IActionResult> Index( ) {
			// Grab key website data that will be serialized
			var node = Request.HttpContext.RequestServices.GetRequiredService<INodeServices>( );
			var zone = Request.HttpContext.RequestServices.GetRequiredService<IHostingEnvironment>( );
			var root = zone.ContentRootPath;
			var item = Request.HttpContext.Features.Get<IHttpRequestFeature>( );
			var query = item.RawTarget;
			var url = $"{ Request.Scheme }://{ Request.Host }{ query }";
			// Allow for the passing of data as a request
			TransferData trans = new TransferData( );
			trans.info = Data( Request );
			trans.thisCameFromDotNET = "I do it from behind...";
			// Prerender and serialize the frontend web app
			var pre = await Prerenderer.RenderToString(
				"/",
				node,
				new JavaScriptModuleExport( root + "/Root/Angular" ),
				url,
				query,
				trans,
				30000,
				Request.PathBase.ToString( )
			);
			// Website data passed to the layout template
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			// Set up the prerendered view with the new data
			return View( );
		}
		
		private IRequest Data( HttpRequest data ) {
			// Unknown purpose, but info is needed above
			IRequest ugly = new IRequest( );
			ugly.cookies = data.Cookies;
			ugly.headers = data.Headers;
			ugly.host = data.Host;
			return ugly;
		} */
		
	}
}



