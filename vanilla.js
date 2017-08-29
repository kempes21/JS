// vanilla
new adsenseLoader( '.adsense',
{
  onLoad: function( ad )
	{
		if( ad.classList )
			ad.classList.add( 'adsense--loaded' ); // IE 10+
		else
			el.className += ' ' + 'adsense--loaded'; // IE 8-9
	}	
});

// jQuery
/* $( '.adsense' ).adsenseLoader(
{
	onLoad: function( $ad )
	{
		$ad.addClass( 'adsense--loaded' );
	}
}); */