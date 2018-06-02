// Creamos la variable
var archivo=1;



$(document).ready(function() {

//La función del scroll para que se carguen las noticias sólo bajando el cursor
	$(window).scroll(function() {
		if ($(document).height() - $(window).height()  == $(window).scrollTop()) {					
			cargarNoticias();
		}
	});
	
	$("#cargar").click(function(){
			cargarNoticias();
	});
	  

});

//Creamos la función que sirve para que se carguen más noticias con el botón de cargar más que se encuentran dentro de dos archivos .json
function cargarNoticias(){
    //
    if(archivo<3){
    $.getJSON( "https://rawgit.com/xavic01/paginanoticies2/master/data/"+archivo+".json", function( jsonObject ) {
        insertarNoticia( jsonObject );
    });
    archivo++;
	}
}

//Insertamos la noticia dentro del archivo HTML
function insertarNoticia(json){
   $.each(json, function(i,noticia){
$("#noticias").append("<hr><div id='imgDiv'><img class='img-thumbnail' id='imgNoticia' src="+noticia.img+" alt="+noticia.alt+"></div><div id='news' class='container' id='cuerpo'><a href='#'><h3>"+noticia.title+"</h3></a><p>"+noticia.desc+"</p><footer id='date' class='small'>"+noticia.date+"</footer></div>");
    })
}
