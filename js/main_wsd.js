$(document).ready(function() {
	
	$("a.transicion").transicion();

    new WOW().init();

	// ---Funciones Cambio Scroll ---	
	$(window).scroll(function(){

		var cambio=($(window).scrollTop()>0)?true:false;

		if (cambio){	
			$("header").addClass('header_hover');	
			$(".header_a, .data, .data a").addClass('header_a_hvr');		
			$(".menu_logo").css('display','block');
		}else{
			$("header").removeClass('header_hover');
			$(".header_a, .data, .data a").removeClass('header_a_hvr');		
			$(".menu_logo").css('display','none');
		}
	});

	$("#owl-demo").owlCarousel({
		autoPlay: 7500, 
    	navigation : false, // Show next and prev buttons
		paginationSpeed : 1500,
		singleItem:true
	});

	$(".btn_menu_movil").click(function() {
		$("body,html").css('overflow', 'hidden');
		$(".menu_nav_movil").fadeIn();
	});

	$(".btn_cerrrar").click(function() {
		$("body,html").css('overflow', 'auto');
		$(".menu_nav_movil").fadeOut();
	});

	$(".menu_opciones").click(function() {
		$("body,html").css('overflow', 'auto');
		$(".menu_nav_movil").fadeOut();
	});

	$(".btn_masinfo").click(function(event) {
		event.preventDefault();
		$(".info_pagweb").toggle();
	});

	$(".btn_detalles").click(function() {

		var id_plan = $(this).attr("id");

		$(".plan_"+id_plan).toggle();
	});

	// ---- Fancybox
	$("[data-fancybox]").fancybox({
		image : {
			protect : true
		}
	});


	
	// ---- PORTAFOLIO -----
	$(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    $(".filter-button").click(function(event) {
    	$(".filter-button").removeClass("activex");
    	$(this).addClass("activex");
    });

    /*funcion plugin Typer.js*/
	$('.wsd_type').typer({
        strings:  ["#Emprendedores","#Creativos","#TeamWebsidi"],
        typeSpeed: 170,
        backspaceSpeed: 100,
	    backspaceDelay: 2000,
	    repeatDelay: 0,
	    repeat: true,
	    autoStart: true,
	    startDelay: 0
    });

    $('.home_type').typer({
        strings:  ["Profesional","Único","Económico"],
        typeSpeed: 115,
        backspaceSpeed: 90,
	    backspaceDelay: 2000,
	    repeatDelay: 0,
	    repeat: true,
	    autoStart: true,
	    startDelay: 0
    });

});
