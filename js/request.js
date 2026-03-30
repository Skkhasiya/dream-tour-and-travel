jQuery.validator.addMethod(
	"checksum",
	function (value, element) {
		return this.optional(element) || jQuery('#TotalNumber').val() == value;
	},
	"Please check your input."
);
function scrollpage($Id) {
	$Top = jQuery('#' + $Id).offset().top;
	jQuery('html, body').animate({ scrollTop: $Top - 200 }, 900);
}

//---------------	FORM 1-----------------------------------------------

jQuery(document).ready(function () {
	jQuery('#RequestQuoteFormSubmitBtn').click(function (e) {
		e.preventDefault();
		jQuery("#RequestQuoteForm").trigger('submit');
	});//jQuery('#SubmitBtnFormContact').click(function(e) 

	var validator = jQuery("#RequestQuoteForm").validate({
		ignore: [],
		rules: {
			FName: { required: true },
			// LName :{ required: true },
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
			// 	   if(grecaptcha.getResponse(clientId1) == '') {
			// 		   return true;
			// 	   } else {
			// 		   return false;
			// 	   }
			// 	},
			// 	remote:"checkCaptcha.php" }
		},
		messages: {
			FName: "This field is required",
			// LName : "This field is required",
			Phone: "This field is required",
			Company: "This field is required",
			Email: "This field is required",
			email: "Please Enter A Proper Email ",
		},
		submitHandler: function (form) {
			grecaptcha.ready(function () {
				grecaptcha.execute($Site_Key, { action: 'submit' }).then(function (token) {
					document.getElementById('hiddenRecaptcha1').value = token;
					// form.submit() ;
					// alert("##");
					submitSendReqMailform();// your existing function
				});
			});
		}//	

	});//var validator
});//jQuery(document).ready2

function submitSendReqMailform() {
	var ajaxobj;
	if (ajaxobj) ajaxobj.abort();
	ajaxobj = jQuery.ajax({
		url: "thanks-contact.php", //"../thanks-request.php - blog file add $siteurl"
		data: jQuery('#LandingHeaderForm1').serialize(),
		context: document.body,
		cache: false,
		type: 'POST',
		beforeSend: function () {
			jQuery('#HideLandingHeaderFormX1').hide();
			jQuery('#LandingHeaderFormLoader1').show();
		},
		complete: function () {
		},
		error: function () {
		},
		success: function (html) {
			// console.log(html);
			jQuery('#HideLandingHeaderFormX1').hide();
			jQuery('#LandingHeaderFormThanksMsg1').show();
			jQuery('#LandingHeaderFormLoader1').hide();
			scrollpage('LandingHeaderFormThanksMsg1');
		}	// success: function
	});		//jQuery.ajax
}//submitRequestForm()


