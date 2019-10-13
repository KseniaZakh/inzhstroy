var vhCSS = null;

function loadCSS(source, type) {
	var s = document.getElementsByTagName('head')[0],
		sc = document.createElement('link');
		sc.rel = type;
		sc.href = source;
		s.appendChild(sc);
	}

function resize() {
	if (window.innerWidth < 961) {
		if (!vhCSS) {
			loadCSS('css/vh.css?' + $.now(), 'stylesheet');
			vhCSS = true;
			}
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', `${vh}px`);
	}
}

$(document).ready(function() {
	resize();

	$('div.container > header > ul').on('click', function() {
		if ($('div.container').hasClass('opened')) {
			$('div.container').removeClass('opened');
			}
		else {
			$('div.container').addClass('opened');
			}
		});

		$('.move').on('click', function(e) {
		if ($('div.container').hasClass('opened')) {
			$('div.container').removeClass('opened');
			}
			e.preventDefault();
		});

		return false;
});
