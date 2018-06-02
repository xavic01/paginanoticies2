//
var archivo=1;



$(document).ready(function() {


	$(window).scroll(function() {
		if ($(document).height() - $(window).height()  == $(window).scrollTop()) {					
			cargarNoticias();
		}
	});
	
	$("#cargar").click(function(){
			cargarNoticias();
	});
	  

});

//
function cargarNoticias(){
    //
    if(archivo<3){
    $.getJSON( "https://rawgit.com/xavic01/Pagina-noticies/master/NoticiesWeb/data/"+archivo+".json", function( jsonObject ) {
        insertarNoticia( jsonObject );
    });
    archivo++;
	}
}

//
function insertarNoticia(json){
   $.each(json, function(i,noticia){
$("#noticias").append("<hr><div id='imgDiv'><img class='img-thumbnail' id='imgNoticia' src="+noticia.img+" alt="+noticia.alt+"></div><div id='news' class='container' id='cuerpo'><a href='#'><h3>"+noticia.title+"</h3></a><p>"+noticia.desc+"</p><footer id='date' class='small'>"+noticia.date+"</footer></div>");
    })
}
