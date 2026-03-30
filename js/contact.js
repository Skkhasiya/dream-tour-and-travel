jQuery.validator.addMethod(
	"checksum",
	function (value, element) {
		return this.optional(element) || jQuery('#TotalNumber').val() == value;
	},
	"Please check your input."
);
jQuery.validator.addMethod(
	"checkFName",
	function (value, element) {
		return this.optional(element) || jQuery('#FName').val().toLowerCase() != value.toLowerCase();
	},
	"first Name And Last Name Can Not Be Same ."
);
jQuery(document).ready(function () {
	jQuery('#ContactFormThanksMsg').hide();
	jQuery('#ContactFormSubmitBtn').click(function (e) {
		e.preventDefault();
		jQuery('.tbl tr:last').remove();
		jQuery("#ContactForm").trigger('submit');
	});//jQuery('#ContactFormSubmitBtn').click
	//$("input.Phonevalid").mask("999-999-9999");
	var validator = jQuery("#ContactForm").validate({
		ignore: [],
		rules: {
			FName: { required: true },
			LName: {
				required: true,
				checkFName: true
			},
			Phone: { required: true },
			Email: {
				required: true,
				email: true
			},
			captchaResult: {
				required: true,
				checksum: true,
			},
			// hiddenRecaptcha1: { required:  function() {
			// 	   if(grecaptcha.getResponse(Clientid1) == '') {
			// 		   return true;
			// 	   } else {
			// 		   return false;
			// 	   }
			// 	},
			// 	remote:"checkCaptcha.php" },
		},
		message: {
			FName: "This field is required",
			Email: "This field is required",
			email: "Please Enter A Proper Email ",
		},
		submitHandler: function (form) {
			grecaptcha.ready(function () {
				grecaptcha.execute($Site_Key, { action: 'submit' }).then(function (token) {
					document.getElementById('hiddenRecaptcha1').value = token;
					// form.submit() ;
					// alert("##");
					submitContactform();// your existing function
				});
			});
		}//	
	});//var validator
});//jQuery(document).ready


function submitContactform() {
	var formData = new FormData($('#ContactForm')[0]);
	var ajaxobj;
	if (ajaxobj) ajaxobj.abort();
	ajaxobj = jQuery.ajax({
		url: "thanks-contact.php",
		data: formData,
		contentType: false,
		context: document.body,
		mimeType: "multipart/form-data",
		cache: false,
		processData: false,
		type: 'POST',
		beforeSend: function () {
			jQuery('#HideContactForm').hide();
			jQuery('#ContactFormLoader').show();
			jQuery('#ContactFormLoader').html('<img src="html/images/loader.gif" />');
			jQuery('html, body').animate({ scrollTop: jQuery('#ContactFormLoader').offset().top - 300 }, 1000);
		},
		complete: function () {
		},
		error: function () {
		},
		success: function (html) {
			// $resp = JSON.parse(html);
			console.log(html);
			jQuery('#ContactFormLoader').hide();
			jQuery('#ContactFormThanksMsg').show();
			// jQuery('#ContactFormThanksMsg').html($resp) ;
			jQuery('html, body').animate({ scrollTop: jQuery('#ContactFormThanksMsg').offset().top - 300 }, 1000);
		}
	});
}
