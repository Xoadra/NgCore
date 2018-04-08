



using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using NgCore.Pre;



namespace NgCore.Controllers {
	public class PartialController : Controller {
		
		public IActionResult AppComponent( ) => PartialView( );
		
		public IActionResult IndexComponent( ) => PartialView( );
		
		public IActionResult AboutComponent( ) => PartialView( );
		
		public IActionResult ContactComponent( ) => PartialView( );
		
		/* public async Task<IActionResult> AppComponent( ) {
			// Setup server-side app prerendering
			var pre = await Request.Prerender( );
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Scripts" ] = pre.Globals[ "scripts" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			return PartialView( );
		}
		
		public async Task<IActionResult> IndexComponent( ) {
			// Setup server-side app prerendering
			var pre = await Request.Prerender( );
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Scripts" ] = pre.Globals[ "scripts" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			return PartialView( );
		}
		
		public async Task<IActionResult> AboutComponent( ) {
			// Setup server-side app prerendering
			var pre = await Request.Prerender( );
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Scripts" ] = pre.Globals[ "scripts" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			return PartialView( );
		}
		
		public async Task<IActionResult> ContactComponent( ) {
			// Setup server-side app prerendering
			var pre = await Request.Prerender( );
			ViewData[ "SpaHtml" ] = pre.Html;
			ViewData[ "Title" ] = pre.Globals[ "title" ];
			ViewData[ "Styles" ] = pre.Globals[ "styles" ];
			ViewData[ "Scripts" ] = pre.Globals[ "scripts" ];
			ViewData[ "Meta" ] = pre.Globals[ "meta" ];
			ViewData[ "Links" ] = pre.Globals[ "links" ];
			ViewData[ "TransferData" ] = pre.Globals[ "transferData" ];
			return PartialView( );
		} */
		
	}
}


