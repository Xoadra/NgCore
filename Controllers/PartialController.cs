



using Microsoft.AspNetCore.Mvc;


namespace NgCore.Controllers {
	public class PartialController : Controller {
		
		public IActionResult AppComponent( ) => PartialView( );
		
		public IActionResult IndexComponent( ) => PartialView( );
		
		public IActionResult AboutComponent( ) => PartialView( );
		
		public IActionResult ContactComponent( ) => PartialView( );
		
	}
}



