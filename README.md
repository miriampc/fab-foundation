# FAB-FOUNDATION
 - Este repositorio fue trabajado de manera grupal.
 - La Meta establecida es replicar el Website de Fab.com, una empresa dedicada a ayudar 
    a sus clientes a descubrir productos divertidos y únicos, donde pueden elegir
    un artículo y añadirlo al carrito de compras por internet.
 
 - El requerimento fue:
    - Realizar primero el Mobile First, para luego adaptarlo a Desktop First.
    - Usar FrameWork Foundation, reutilizando sus clases para llegar a nuestro objetivo
    - Para ello, previamente se llevó un auto-aprendizaje sobre Foundation y poder aplicarlo adecuadamente

- La división del trabajo se realizó por ramas de acuerdo a la sección a trabajar:
    - Nav-bar
    - Shop-now
    - Details
    - Footer
    - Merging-Branchs
    
  
  ## NAV-BAR:
    - Sección que comprende el Header del website.
    - Aquí podemos realizar busqueda de productos, y acceder a un menú con las categorias de los productos
    - En la versión Mobile first, se aplicó la clase acordeón (menú lateral 
      que se activa con el botón menu-icon.
    - En la versión Desktop first, se transforma en un menú simple.
    
  ## SHOP-NOW:
    - En esta Sección están las 6 clases de productos que se ofrecen:
        - Art, Home, Women, Men, Tech, Fun.
    - Cada clase se identifica con una imagen que redirecciona a otro index.
    - Se utilizó :
        - El pluggin equalizer para redimensionar las imagenes a un mismo ancho.
        - Gutter-small para la separación entre rows, ademas de margin.
        - Se creó una clase para movil, donde quita el padding a las imágenes específicas.
 
   ## DETAILS:
     - Esta sección nos muestra los productos de manera interactiva mediante un slider de fotos.
     - Para implementar esto, se utilizó Owl Carousel, un pluggin para realizar slider.
     - Al clickear la foto, nos direcciona a otro index, donde nos dan detalles del producto.
     
   ## FOOTER:
    - Aquí podemos encontrar un menú con opciones mas acorde a la empresa.
    - Tiene 3 subdiviones:
        - Menú legal: contacto, terminos y condiciones, etc.
        - Categorias de Producto y los mas populares.
        - Contactar directamente: Registro, redes sociales, etc.
    - En este caso se utilizó:
        - La clase visivility (show-for-[size]-only, hidden-for-[size]-only) para ocultar y/o mostrar algunos elementos de acuerdo 
           al tamaño de la pantalla (Mobile first y Desktop first).
        - Nesting, para dimensionar adecuadamente los ul. de los links.
        - Clase menu vertical para que se vea adecuadamente los links (estructura).
     - Se creó estilo para el color de los links, y los íconos de icomoon.
     
  ## MERGING-BRANCHS:
    - En esta rama se unificarán todas las anteriores.
    
  
