/**
 * jQuery AutoFancybox Plugin
 * -----------------------------------------
 *
 * This plugin attach FancyBOX features to an HTML node and configure it
 * with node's itself "data-option" attributes.
 */

;(function($) {
	
	// Check for FancyBOX library to exists into jQuery!
	if ( !$.fancybox ) return;
	
	/**
	 * Utility method.
	 * It generates a FancyBOX configuration object from DOM data attributes.
	 * 
	 * $obj -  DOM node where data-options are searched
	 * defaults_opt - object with default values
	 * extends_opt - object with some static values to override DOM configuration
	 */
	$.fancybox.getAutoSettings = function( $obj, defaults_opt, extends_opt ) {
		
		// Read configuration settings from data-tags of the target object.
		var opt = {};
		if ( $obj.attr('data-padding') ) 			opt.padding 			= $obj.attr('data-padding');
		if ( $obj.attr('data-margin') ) 			opt.margin 				= $obj.attr('data-margin');
		if ( $obj.attr('data-opacity') ) 			opt.opacity 			= $obj.attr('data-opacity');
		if ( $obj.attr('data-modal') ) 				opt.modal 				= $obj.attr('data-modal');
		if ( $obj.attr('data-cyclic') ) 			opt.cyclic 				= $obj.attr('data-cyclic');
		if ( $obj.attr('data-scrolling') ) 			opt.scrolling 			= $obj.attr('data-scrolling');
		if ( $obj.attr('data-width') ) 				opt.width 				= $obj.attr('data-width');
		if ( $obj.attr('data-height') ) 			opt.height 				= $obj.attr('data-height');
		if ( $obj.attr('data-autoscale') ) 			opt.autoScale 			= $obj.attr('data-autoscale');
		if ( $obj.attr('data-autodimensions') ) 	opt.autoDimensions 		= $obj.attr('data-autodimensions');
		if ( $obj.attr('data-centeronscroll') ) 	opt.centerOnScroll 		= $obj.attr('data-centeronscroll');
		if ( $obj.attr('data-ajax') ) 				opt.ajax 				= $obj.attr('data-ajax');
		if ( $obj.attr('data-swf') ) 				opt.swf 				= $obj.attr('data-swf');
		if ( $obj.attr('data-hideonoverlayclick') ) opt.hideOnOverlayClick 	= $obj.attr('data-hideonoverlayclick');
		if ( $obj.attr('data-hideoncontentclick') ) opt.hideOnContentClick 	= $obj.attr('data-hideoncontentclick');
		if ( $obj.attr('data-overlayshow') ) 		opt.overlayShow 		= $obj.attr('data-overlayshow');
		if ( $obj.attr('data-overlayopacity') ) 	opt.overlayOpacity 		= $obj.attr('data-overlayopacity');
		if ( $obj.attr('data-overlaycolor') )		opt.overlayColor 		= $obj.attr('data-overlaycolor');
		if ( $obj.attr('data-titleshow') )			opt.titleShow 			= $obj.attr('data-titleshow');
		if ( $obj.attr('data-titleposition') )		opt.titlePosition 		= $obj.attr('data-titleposition');
		if ( $obj.attr('data-titleformat') )		opt.titleFormat 		= $obj.attr('data-titleformat');
		if ( $obj.attr('data-transitionin') ) 		opt.transitionIn 		= $obj.attr('data-transitionin');
		if ( $obj.attr('data-transitionout') ) 		opt.transitionOut 		= $obj.attr('data-transitionout');
		if ( $obj.attr('data-speedin') ) 			opt.speedIn 			= $obj.attr('data-speedin');
		if ( $obj.attr('data-speedout') ) 			opt.speedOut 			= $obj.attr('data-speedout');
		if ( $obj.attr('data-changespeed') ) 		opt.changeSpeed 		= $obj.attr('data-changespeed');
		if ( $obj.attr('data-changefade') ) 		opt.changeFade 			= $obj.attr('data-changefade');
		if ( $obj.attr('data-easingin') ) 			opt.easingIn 			= $obj.attr('data-easingin');
		if ( $obj.attr('data-easingout') ) 			opt.easingOut 			= $obj.attr('data-easingout');
		if ( $obj.attr('data-showclosebutton') ) 	opt.showCloseButton 	= $obj.attr('data-showclosebutton');
		if ( $obj.attr('data-shownavarrows') ) 		opt.showNavArrows 		= $obj.attr('data-shownavarrows');
		if ( $obj.attr('data-enableescapebutton') ) opt.enableEscapeButton 	= $obj.attr('data-enableescapebutton');
		
		if ( $obj.attr('data-type') ) 				opt.type 				= $obj.attr('data-type');
		if ( $obj.attr('data-href') ) 				opt.href 				= $obj.attr('data-href');
		if ( $obj.attr('data-title') ) 				opt.title 				= $obj.attr('data-title');
		if ( $obj.attr('data-content') ) 			opt.content 			= $obj.attr('data-content');
		if ( $obj.attr('data-index') ) 				opt.index 				= $obj.attr('data-index');
		
		
		// Set defaults value to the options.
		opt = $.extend({},defaults_opt,opt);
		
		// Extends options width static values.
		opt = $.extend({},opt,extends_opt);
		
		return opt;
	
	}
	
	/**
	 * jQuery Plugin
	 * It istantiate FancyBOX with local data-option based configuration
	 *
	 * defaults_opt - object with default values
	 * extends_opt - object with some static values to override DOM configuration
	 */
	$.fn.autoFancybox = function( defaults_opt, extends_opt ) {
		
		$(this).each(function(){
			
			$(this).fancybox( $.fancybox.getAutoSettings($(this),defaults_opt,extends_opt) );
			
		});
		
		return this;
		
	}
	
})(jQuery);

