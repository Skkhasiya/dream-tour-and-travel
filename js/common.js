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


jQuery(document).ready(function ($) {
	jQuery(function () {
		jQuery('body').addClass('js');
		var $menu = jQuery('#menu'),
			$menulink = jQuery('.menu-link'),
			$menuTrigger = jQuery('.has-subnav'),
			$NavTrigger = jQuery('.navigation'),
			$submenuTrigger = jQuery('.sub-menu'),
			$submenuBackTrigger = jQuery('.back-submenu');
		$floatingSocialIconBtn = jQuery('.mobile-social-icon-btn');
		$floatingSocialIconLinks = jQuery('.StickyBtns');
		$allRemoveClass = jQuery('.StickyBtns .MainWrapper a');

		$menulink.click(function (e) {
			e.preventDefault();
			$menulink.toggleClass('active');
			$menu.toggleClass('active');
			$NavTrigger.toggleClass('active');
			$submenuTrigger.removeClass('active');
			jQuery('body').toggleClass('openSidemenu');
		});

		$menuTrigger.click(function (e) {
			e.preventDefault();
			var $this = jQuery(this);
			$this.toggleClass('active').next('.sub-menu').toggleClass('active');
		});

		jQuery("#menu ul li a").click(function (e) {
			$menulink.removeClass('active');
			$menu.removeClass('active');
			$NavTrigger.removeClass('active');
			jQuery('body').toggleClass('openSidemenu');
		});

		$submenuBackTrigger.click(function (e) {
			e.preventDefault();
			$submenuTrigger.removeClass('active');
		});

		$menulink.click(function (e) {
			$floatingSocialIconLinks.removeClass('open');
			jQuery('body').removeClass('openSocialLinks');
		});
		$floatingSocialIconBtn.click(function (e) {
			$floatingSocialIconLinks.toggleClass('open');
			jQuery('body').toggleClass('openSocialLinks');
		});

		$allRemoveClass.click(function (e) {
			$floatingSocialIconLinks.removeClass('open');
			jQuery('body').removeClass('openSocialLinks');
		});

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