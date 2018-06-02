# PÁGINA DE NOTICIAS

# Contiene:
- 1 archivo .css que incluye la parte del móvil y la parte de ordenador.
- 1 archivo .js
- 1 archivo .xml
- 2 archivos .json
- 3 archivos .html

En los tres archivos .html que hay, tenemos:
- index.html: Contiene la página principal con las 3 noticias que vienen cargadas por defecto.
- rcdmallorca.html: Contiene el enlace a la noticia que corresponde al RCD Mallorca.
- realmadrid.html: Contiene el enlace a la noticia que corresponde al Real Madrid.

# Descripción de la página:
La página consta de un título en la parte central superior con una imagen de fondo. Justo debajo de este títulos podemos encontrar 3 botones que tienen una función determinada en la Web.
El primer botón sirve para ir a la página principal de las noticias. El segundo botón nos llevará al apartado de la noticia del RCD Mallorca que contiene una imágen extra y un video de Youtube en responsive. Finalmente, el tercer botón nos llevará a la noticia del Real Madrid que también contiene una imágen más y un video de Youtube.

Después de estos botones nos encontramos con tres noticias que ya vienen cargadas por defecto y están colocadas una debajo de la otra. Una vez nos aparecen estas tres noticias nosotros podemos enseñar más dándole al botón que aparecerá en la parte inferior para que nos cargue tres noticias más que se encuentran dentre del archivo 1.json. Si queremos ver tres noticias más pues volveremos a dar otra vez al botón de cargar más noticias para que aparezcan del archivo 2.json.

Para terminar, en la parte derecha de la página le hemos añadido una imagen que hace de publicidad.

# Descripción de la página en el móvil:
En la parte superior tenemos una imágen y el título de la página. Luego un poco más abajo encontramos la barra de navegación con un botón que al pulsarlo depsliega las opciones de que tipo de noticia pueden elegir.
Esta vez la publicidad ha ido colocada de manera horizontal antes de las noticias por defecto. También hemos añadido la misma función de cargar más noticias para que aparezcan las demás.


# Archivo .js:
En el archivo .js hemos añadido una función que hace que cada vez que damos al botón de cargar más nos coja las noticias que están almacenadas en los archivos .json. Además hemos añadido la función scroll para que sea más práctico cargar más noticias sólo bajando el cursor y no dar a "cargar más".

Cada noticia contiene el título principal, la fecha, mínimo una imágen y una breve descripción sobre ella.
