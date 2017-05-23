/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referencing this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
		'icon-like': '&#xe901;',
		'icon-shopping-bag': '&#xe902;',
		'icon-card_travel': '&#xe8f8;',
		'icon-shopping-cart': '&#xe900;',
		'icon-heart-o': '&#xf08a;',
		'icon-truck': '&#xf0d1;',
		'icon-facebook': '&#xea90;',
		'icon-twitter': '&#xea96;',
		'icon-tumblr': '&#xeab9;',
		'icon-pinterest': '&#xead1;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
