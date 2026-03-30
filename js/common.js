jQuery(document).ready(function () {
	jQuery(window).scroll(function () {
		var sd = jQuery(window).scrollTop();
		if (sd > 95) {
			jQuery(".header-wrapper").addClass("sticky");
		} else {
			jQuery(".header-wrapper").removeClass("sticky");
		}
	});

	var sd = jQuery(window).scrollTop();
	if (sd > 95) {
		jQuery(".header-wrapper").addClass("sticky");
	} else {
		jQuery(".header-wrapper").removeClass("sticky");
	}
});  // Desktop Sticky Header Script


jQuery(document).ready(function () {
	jQuery(window).scroll(function () {
		var sd = jQuery(window).scrollTop();
		if (sd > 150)
			jQuery(".StickyBtns").addClass("activeStickyBtn");
		else
			jQuery(".StickyBtns").removeClass("activeStickyBtn");
	});
});  // Floating Sticky Script


jQuery(function ($) {

	let scrollPosition = 0;

	const $body = jQuery('body'),
		  $menu = jQuery('#menu'),
		  $menuLink = jQuery('.menu-link'),
		  $nav = jQuery('.navigation'),
		  $submenu = jQuery('.sub-menu'),
		  $hasSubnav = jQuery('.has-subnav'),
		  $backBtn = jQuery('.back-submenu'),
		  $socialBtn = jQuery('.mobile-social-icon-btn'),
		  $socialLinks = jQuery('.StickyBtns'),
		  $socialClose = jQuery('.StickyBtns .MainWrapper a');

	// 🔹 Toggle Sidebar
	function toggleMenu(open) {
		if (open) {
			scrollPosition = window.pageYOffset;
			$body.css('top', -scrollPosition).addClass('openSidemenu');
		} else {
			$body.removeClass('openSidemenu').css('top', '');
			window.scrollTo(0, scrollPosition);
		}

		$menuLink.toggleClass('active', open);
		$menu.toggleClass('active', open);
		$nav.toggleClass('active', open);
		$submenu.removeClass('active');
		$socialLinks.removeClass('open');
		$body.removeClass('openSocialLinks');
	}

	// 🔹 Menu click
	$menuLink.on('click', function (e) {
		e.preventDefault();
		toggleMenu(!$body.hasClass('openSidemenu'));
	});

	// 🔹 Submenu toggle
	$hasSubnav.on('click', function (e) {
		e.preventDefault();
		jQuery(this).toggleClass('active').next('.sub-menu').toggleClass('active');
	});

	// 🔹 Close menu on link click
	jQuery('#menu ul li a').on('click', function () {
		toggleMenu(false);
	});

	// 🔹 Back button
	$backBtn.on('click', function (e) {
		e.preventDefault();
		$submenu.removeClass('active');
	});

	// 🔹 Social toggle
	$socialBtn.on('click', function () {
		$socialLinks.toggleClass('open');
		$body.toggleClass('openSocialLinks');
	});

	// 🔹 Close social links
	$socialClose.on('click', function () {
		$socialLinks.removeClass('open');
		$body.removeClass('openSocialLinks');
	});

}); //  Multi-Toggle Navigation Menu 

jQuery(document).ready(function () {
	jQuery('.ButtonOnlcick').click(function () {
		$url = jQuery(this).data('href');
		$target = jQuery(this).data('target');
		window.open($url, $target);
	});


	jQuery(".top-scroll").click(function () {
		jQuery("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	}); // Scroll to Up on mobile}
});