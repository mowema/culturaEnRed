$(window).load(function() {

  /*LOADING */

  $(".loader").fadeOut("fast");
  $("body").removeClass("preload");


  /* HOME */

  $(".the-logo, .particle").click( function( event ){

    $(".the-sphere").toggleClass("close");
    $(".particles").toggleClass("close");
    $(".particle").toggleClass("close");
    $(".aro").toggleClass("close");
    $(".logo").toggleClass("close");
    $(".the-logo").toggleClass("close");
    $(".bg-edificios").toggleClass("close");
  } )



  /* PUNTOS y DESPLEGABLES */

  $(".tema").click( function( event ){
    if( $(".tema").find(".desplegable").hasClass("open")  ){
      $(".tema").find(".desplegable").toggleClass("open close");
    }
    $(this).find(".desplegable").toggleClass("open close");
  })


  $(".desplegable ul").each(function(){
      var marginLeft = 0;
      var d = 0.1;
      $(this).find("li").each(function(){
        marginLeft = marginLeft + 30;
        $(this).css("margin-left", marginLeft+"px")
        $(this).css("animation-delay", d+"s")
        d = d + 0.1;
    })
  })

      var d = 0.2;
  $(".auto-delay").each(function(){
        $(this).css("animation-delay", d+"s")
        d = d + 0.2;
  })

/* EDITORIAL */

$("#editorial .temas .esfera").on("mouseover", function(e){
  $("#editorial .temas .esfera").parent().css("transform", "scale(0.9)")
  $(this).closest(".tema").find(".titulo").css("font-weight", "bold")
  $(this).parent().css("transform", "scale(1.1)")
})

$("#editorial .temas .esfera").on("mouseleave", function(e){
  $(this).closest(".tema").find(".titulo").css("font-weight", "300")
  $("#editorial .temas .esfera").parent().css("transform", "scale(1)")
})


$("#editorial .temas .tema:nth-child(4) .esfera").on("click", function(e){
  $(".principal").removeClass("active").addClass("inactive")
  $(".interna").removeClass("inactive").addClass("active")
  $(".seccion").addClass("small")
  $(".ayuda").html("ELEGÍ LA CATEGORÍA DE TU INTERÉS");
})


$("#editorial .seccion, .volver-invisible").on("click", function(e){
  $(".principal").removeClass("inactive").addClass("active")
  $(".interna").removeClass("active").addClass("inactive")
  $(".seccion").removeClass("small")
  $(".ayuda").html("ELEGÍ LA TEMÁTICA DE TU INTERÉS");
})


  /*  Replace all SVG images with inline SVG */

  $('img.svg').each(function(){
    	var $img = $(this);
  	var imgID = $img.attr('id');
  	var imgClass = $img.attr('class');
  	var imgURL = $img.attr('src');

  	$.get(imgURL, function(data) {

  		var $svg = $(data).find('svg');

  		if (typeof imgID !== 'undefined') {
  			$svg = $svg.attr('id', imgID);
  		}

  		if (typeof imgClass !== 'undefined') {
  			$svg = $svg.attr('class', imgClass+' replaced-svg');
  		}

  /*		 Remove any invalid XML tags as per http:validator.w3.org*/
  		$svg = $svg.removeAttr('xmlns:a');
  		$img.replaceWith($svg);
  	});
  });


})
