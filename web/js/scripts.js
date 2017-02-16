$(window).load(function() {

  /*LOADING */

  $(".loader").fadeOut("fast");
  $("body").removeClass("preload");


  /* HOME */

  
  var openMainSphere = function(){
    $(".the-sphere").toggleClass("close");
    $(".particles").toggleClass("close");
    $(".particle").toggleClass("close");
    $(".aro").toggleClass("close");
    $(".logo").toggleClass("close");
    $(".the-logo").toggleClass("close");
    $(".bg-edificios").toggleClass("close");
  }
  
  if( window.location.hash == "#inicio"){
	setTimeout(openMainSphere, 100);
  }

  $(".the-logo, .particle").click( function( event ){
	openMainSphere();
  } )



  /* PUNTOS y DESPLEGABLES */

  	/* DESPLEGABLE CON MENU INCLINADO */
	
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
  
    /* DESPLEGABLE CON MENU RECTO */
	
  $(".tema").click( function( event ){
    if( $(".tema").find(".desplegable-recto").hasClass("open")  ){
      $(".tema").find(".desplegable-recto").toggleClass("open close");
    }
    $(this).find(".desplegable-recto").toggleClass("open close");
  })
	
    $(".desplegable-recto ul").each(function(){
      var d = 0.1;
      $(this).find("li").each(function(){
        $(this).css("animation-delay", d+"s")
        d = d + 0.1;
    })
  })

  
  /* DELAY EN ANIMACIONES */
  
      var d = 0.2;
  $(".auto-delay").each(function(){
        $(this).css("animation-delay", d+"s")
        d = d + 0.2;
  })

/* EDITORIAL */


	$("#editorial .temas .tema:nth-child(4) .esfera, #editorial .sub-seccion").on("click", function(e){
	  $(".principal").removeClass("active").addClass("inactive")
	  $(".interna").removeClass("inactive").addClass("active")
	  $(".temas").removeClass("inactive")
	  $(".sub-interna").removeClass("active").addClass("inactive")
	  $(".seccion").addClass("small")
	  $(".ayuda").html("ELEGÍ LA CATEGORÍA DE TU INTERÉS")
	})


	$("#editorial .seccion").on("click", function(e){
	  $(".principal").removeClass("inactive").addClass("active")
	  $(".interna").removeClass("active").addClass("inactive")
	  $(".temas").removeClass("inactive")
	  $(".sub-interna").removeClass("active").addClass("inactive")
	  $(".seccion").removeClass("small")
	  $(".ayuda").html("ELEGÍ LA TEMÁTICA DE TU INTERÉS")
	})

	$("#editorial .open-tema").on("click", function(e){
	  e.preventDefault()
	  var subsection = "#" + $(this).data("open")
	  $(subsection).removeClass("inactive").addClass("active")
	  
	  $(".temas").addClass("inactive")
	  $(".sub-interna .temas").removeClass("inactive").addClass("active")
	  $(".ayuda").html("ELEGÍ EL CAPÍTULO DE TU INTERÉS")
	})
	

})
