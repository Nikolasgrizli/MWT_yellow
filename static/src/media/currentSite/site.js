$(function(){
	$('.flex').flexMenu({linkText:'', linkTitle:'',showOnHover:false});
	/*Переключение картинок на странице товара в слайдере*/
	// $('.thumbs .thumb').on('click',function() {
	// 	$('.thumbs .slick-slide').removeClass('active');
	// 	src = $(this).data('src');
	// 	alt = $(this).attr('alt');
	// 	title = $(this).attr('title');
	// 	// console.log(alt);
	// 	imageid = $(this).data('imageid');
	// 	$(this).parent('.slick-slide').addClass('active');
	// 	$('.main-image img').attr('src',src);
	// 	$('.main-image img').attr('alt',alt);
	// 	$('.main-image img').attr('title',title);
	// 	$('.main-image img').attr('imageid',imageid);
	// });

	$('.opinions-show-all').on('click', function(){
		$('.product-opinions-hidden').show();
		$(this).hide();
	});

	/*Подбор товаров*/
	$('.show-hide .link').on('click', function() {
		link = $(this);
		parent = link.parents('.show-hide');
		if (link.hasClass('link-show')) {
			link.parents('.option').find('.hidden-filter').show();
		} else if(link.hasClass('link-hide')) {
			link.parents('.option').find('.hidden-filter').hide();
		}
		parent.find('.link').toggle();
		// $(this).parents('.option-body').find('.hide').show();
	});
	$('.range-type select').on('change', function() {
		select = $(this);
		parent = select.parents('.range');
		val = select.val();
		if (val == 'equals') {
			//равно
			parent.find('.from-to').hide();
			parent.find('.equals').show();
		} else if (val == 'range') {
			//от до
			parent.find('.equals').hide();
			parent.find('.from-to').show();
		}

	});
	productButton();
	function productButton(){
		/*Добавить в сравнение*/
		$('.compare-add-link').on('click', function() {
			var button = $(this);
			if (button.attr('href') =='/compare') {
				return true;
			}
			$.getJSON( button.attr('href'), function(response) {
				button.html('<span class="glyphicon glyphicon-ok text-success"></span> В сравнении');
				button.attr('href', '/compare');
			})
			.fail(function() {
				alert('Ошибка сравнения товара');
			});
			return false;
		});
		$('.basket-add-order').on('click', function(){
			productId = $(this).data('productid');
			$.colorbox({
				href: '/basket/under-order?productId='+productId,
				width : 600,
				// height : 600,
				maxWidth : '95%',
				// closeButton: false
				close: "",
				className : 'under-order',
				onComplete:function(){
					$.colorbox.resize();
					$('#cboxLoadedContent input, #cboxLoadedContent button').on('blur', function(){
						setTimeout(function(){$.colorbox.resize();},350);
					});
				}
			});
		});
		$('.basket-add').on('click', function() {
			var button = $(this);
			$.getJSON( button.attr('href'), function(response) {
				button.parents('.basket-buttons').addClass('inbasket');
				$('.basket-icon .quantity').removeClass('quantity-hide');
				$('.basket-icon .quantity').text(response.quantity);

				if (button.data('type') && button.data('type') == 'credit') {
					yaCounter13674487.reachGoal('credit');
				} else {
					yaCounter13674487.reachGoal('order');
				}
				try {rrApi.addToBasket(button.data('productid')) } catch(e) {};

				if (response.item) {
					dataLayer.push({
						"ecommerce": {
							"add": {
								"products": [
									{
										"id": response.item.id,
										"name" : response.item.name,
										"price" : response.item.price
									}
								]
							}
						}
					});
				}
			})
			.fail(function() {
				alert('Ошибка добавления товара');
			});
			return false;
		});
	}
	function sliderReload(){
		$('.colorbox-stores').each(function( index ) {
			var storeName = 'images-'+$( this ).data('store');
			// $( this ).css('overflow','auto');
			$('.'+storeName)[0].slick.refresh();
			// console.log(storeName);
		});
	}
	// sliderReload();
	$('.colorbox-stores').each(function( index ) {

		var storeName = 'store-'+$( this ).data('store');
		$('.'+storeName).colorbox({
			rel:storeName,
			transition:"fade",
			maxHeight: '95%',
			maxWidth: '95%',
			closeButton: true,
			close: "",
		});
	});

	$('.colorbox').on('click', function(){
		el = $(this);
		var height = parseInt($(this).data('height'))>0 ? parseInt($(this).data('height')) : false;
		var width = parseInt($(this).data('width'))>0 ? parseInt($(this).data('width')) : false;
		var href = $(this).data('href') ? $(this).data('href') :$(this).attr('href');
		var isPhoto = $(this).data('content') ? false : true;
		$.colorbox({
			href : href,
			photo: isPhoto,
			scalePhotos: true,
			fixed: true,
			transition: 'none',
			opacity: 0.5,
			width: width,
			height: height,
			maxHeight: '95%',
			maxWidth: '95%',
			close: "",
		});
		return false;
	});

	$('.retail-map-toggle').on('click', function(){
		$(this).closest('div').find('.retail-map').toggle();
	});
	// $('#mainImage').on('click', function(){
	// 	el = $(this);
	// 	$('#image'+el.attr('imageid')).trigger( "click" );
	// });

	$(".productGallery").colorbox({
		rel:'productGallery',
		transition:"fade",
		maxHeight: '95%',
		maxWidth: '95%',
		closeButton: true,
		close: "",
		previous : '←',
		next : '→'
	});

	$('.filter').find('input[type=checkbox],input[type=radio]').on('click', function () {
		filterSearch();
	});
	$('.filter').find('input[type=text]').on('blur',function(){
		filterSearch();
	});

	$('.filter-toggle').on('click', function(){
		$('.filter-body').toggle();
	});

	function filterSearch () {
		$('#preloader').fadeIn();
		var sc = $('.search-count');
		form = $("#filter");
		$.post(
			form.attr('action'),
				form.serializeArray()
			,
			function (result) {

				if (sc.length) {
					sc.text(result)
				} else {
					$('#catalog-listing').html(result).promise().done(function(){
						productButton();
					});

				}
				$('#preloader').fadeOut();
		});
	}
	// if (!$.cookie("subscription")) {
	// 	setTimeout(function (){
			// $.colorbox({
			// 	href: '/site/subscription-form',
			// 	width : 600,
			// 	height : 370,
			// 	maxWidth : '95%',
			// 	// closeButton: false
			// 	close: "",
			// 	className : 'subscription',
			// 	onComplete:function(){
			// 		$('#subscriptionPopup').on('submit',function(){
			// 			var name = $('.subscriptionName').val();
			// 			var email = $('.subscriptionEmail').val();
			// 			$.post( "/site/subscription", { email: email, name:name, source: 'POPUP', page: window.location.pathname }, function( result ) {
			// 				var obj = jQuery.parseJSON( result );
			// 				$('.subscription-before').hide();
			// 				$('.subscription-after').text(obj.message);
			// 				$('.subscription-after').show();
			// 				if (obj.message == 'Благодарим за подписку :)') {
			// 					// send email to RR
			// 					(window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() { rrApi.setEmail(email); });
			// 				}
			// 			});
			// 			return false;
			// 		});
			// 	}
			// });
	// 		$.cookie("subscription",1, { expires: 50 });
	// 	},30000);

	// }
	$('#form-subscription').on('submit',function(){
		var email = $('.form-subscription-email').val();
		$.post( "/site/subscription", { email: email, source: 'FOOTER', page: window.location.pathname}, function( result ) {
			var obj = jQuery.parseJSON( result );
			$('.form-subscription-before').hide();
			$('.form-subscription-after').text(obj.message);
			$('.form-subscription-after').show();
			if (obj.message == 'Благодарим за подписку :)') {
				// send email to RR
				(window["rrApiOnReady"] = window["rrApiOnReady"] || []).push(function() { rrApi.setEmail(email); });
			}
		});
		return false;
	});

	$('[data-toggle="tooltip"]').tooltip();

	$(function() {
		var $grid = $('.grid').imagesLoaded( function() {
			$grid.masonry({
				percentPosition: true,
				gutter: 20
			});
		});

	});
	$('.show-stores').click(function() {
		$(this).hide();
		$('.js-address').removeClass('address--hidden');
		sliderReload();
	});
	$('.navbar-collapse').on('show.bs.collapse', function (e) {
		$('.js-blackout').show();
	});
	$('.navbar-collapse').on('hide.bs.collapse', function (e) {
		$('.js-blackout').hide();
	});

	$('.buy-one-click').on('click', function(){
		productId = $(this).data('productid');
		$.colorbox({
			href: '/basket/one-click?productId='+productId,
			width : 600,
			height : 500,
			maxWidth : '95%',
			// closeButton: false
			close: "",
			className : 'one-click',
			onComplete:function(){
			}
		});
	});

	$('.email-boss-button').on('click', function(){
		$.colorbox({
			href: '/site/email-boss',
			width : 600,
			height : 500,
			maxWidth : '95%',
			// closeButton: false
			close: "",
			className : 'email-boss',
			onComplete:function(){
			}
		});
		return false;
	});
	  $.getScript("//vk.com/js/api/openapi.js?121")
	    .then(function () {
	      VK.Widgets.Group("vk_groups", {
	        mode: 2,
	        width: "auto",
	        height: "260"},
	      76684069);
	    });
	$('.change-region').on('click', function(){
		var href = $(this).data('regionid');
		$('#preloader').fadeIn();
		$.get('/site/set-region?setRegionId=' + href,function(){
			location.reload();
		})
	});
});