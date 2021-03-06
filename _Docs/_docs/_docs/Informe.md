# Paginas Web  

### Herramientas para el desarrollo.
#### Pagina Actual  fisica:
+ WordPress: Contenido y blog.
+ PHP: lenguaje de programacion.
+ SO: debian.
+ My Sql: base de datos.
+ jQuery: librerias Js.
+ Servidor Web: Apache.

#### Pagina planetario: 
+ Gogle analytics: Analitica. 
+ SO: ubuntu
+ Servidor Web: Apache.
+ jQuery: libreria Js.

#### fisica unam 
+ Gogle analytics: Analitica. 
+ isotope: libreria Js.
+ jQuery: libreria Js.
+ Apache: servidor web.
+ PHP: Lenguaje de perogramacion.
+ UI Framework: ZURB Foundation, Bootstrap Animate.js


#### Instituto bailseriro.

+ Joomla: Contenido y blog.
+ PHP: Lenguaje de perogramacion.
+ Nginx: servidor web.
+ CDN : jsDelivr.
+ jQuery: libreria Js.
+ Nginx: reverse proxi.
+ UI Framework: Bootstrap

#### fisica san simon.
+ PHP: Lenguaje de perogramacion.
+ Apache: servidor web.
+ CentOs : SO.
+ Gogle analytics: Analitica. 

#### fisica uc cl 

+ PHP: Lenguaje de perogramacion.
+ Apache: servidor web.
+ CentOs : Unix.
+ Gogle analytics: Analitica. 
+ UI Framework: Bootstrap
+ jQuery: libreria Js.
+ CDN Google Hosted Libraries.
+ FrameWork JS : Mootools
+ Joomla: gestor de contenido

#### Instituto de fisica Pesquisa

+ Gogle analytics: Analitica. 
+ Drupal: gestor de contenido
+ PHP 
+ debian
+ jQuery
+ Apache

#### Universidad de Chile 

+ Framework web:
+ JavaServer Pages
+ nginx : servidor web, reverse Proxy
+ jquiery modernizr lightbox :js libray.
+ java: lenguaje de progamacion.
+ Gogle analytics: Analitica. 
+ varnish: herramienta de cache

___

## Esquema navegacional(actual )

+ Presentacion.
+ Grado
   - perfil profecional
+ Postgrado
   - pag separada
+ Investigacion
   -  Areas de investigacion
   -  publicaciones servicios 
   -  informacion 
   -  datos 
   -  enlaces
+ Interaccion social
   -  Planetario

+ planetario max schreier

+ Publicaciones 
   -  revista boliviana de fisica
+ Olimpiadas
    - examanes
    - revista de fisica 
    - enlaces 
    - convocatorias 
    - reflamenro 
    - curso 
    - planetario
+ Cursos 
    - cursos realizados y auspiciados
+ Docentes 
+ Auxiliares
+ Estudiantes
    - magia de la fisica
+ Actividades
    - Fapa
+ Autoridades
+ SOBOFI
    - Pagina externa
+ Homenaje 

***
## Lineaminetos para el desarrollo apicaciones web
 Todo proyecto de software debe contar con una estructura documental est??ndar. La informaci??n que est?? publicada debe estar organizada sistem??ticamente y ser entendible.

Existen dos tipos de categor??as para organizar la documentaci??n:
    
    1. Documentaci??n de administraci??n
    2. Documentaci??n de desarrollo
    3. Documentaci??n del c??digo

1. Documentaci??n de administraci??n

Este tipo de documentaci??n contempla aquella informaci??n relacionada espec??ficamente con la administraci??n del proyecto; es decir, contiene las instrucciones del c??mo desplegar el proyecto en los diferentes ambientes com??nmente usados, como el de pruebas, el de desarrollo y el de producci??n. As??, tambi??n se refiere a la documentaci??n que aborda temas de configuraciones y actualizaciones.

2. Documentaci??n de desarrollo

La documentaci??n de desarrollo es aquella que se genera desde el dise??o de la soluci??n hasta la culminaci??n del proyecto. Dentro de esta categor??a se deber?? contemplar la informaci??n relacionada a la ingenier??a de requerimientos, a la arquitectura y al c??digo generado durante el desarrollo. 
 - Documentaci??n de la Ingenier??a de Requerimientos: 
    
    se refiere a toda la informaci??n generada producto de reuniones realizadas con las partes interesadas, que incluye la recopilaci??n de procesos y requisitos del proyecto de software y todas aquellas tareas que hayan determinado las necesidades o las condiciones a satisfacer por el software a desarrollarse.
 - Documentaci??n de la Arquitectura del Software: 
    
    se refiere a todos los criterios t??cnicos utilizados en el desarrollo, as?? como la metodolog??a, el modelo de desarrollo, estructura de directorios, etc.

La documentaci??n m??nima sugerida para esta categor??a es:
- Modelo de datos: documentaci??n que contiene el esquema de base de datos
que utiliza el proyecto.

3. Documentaci??n del c??digo

Todo el c??digo desarrollado deber?? ser comentado durante su proceso para que las personas que se involucren en el proyecto puedan entenderlo.
Se deben seguir los siguientes lineamientos para la documentaci??n del c??digo:

- Generar la documentaci??n del c??digo de manera autom??tica a trav??s de una
herramienta.
- Aplicar la generaci??n de documentaci??n a los siguientes ??mbitos: los segmentos de c??digo cr??tico del proyecto, las funcionalidades y la API de servicios web (si aplica).
- Guardar la documentaci??n generada en un directorio denominado ???docs???,
ubicado en el directorio ra??z del proyecto.
- Generar la documentaci??n en un formato que pueda ser desplegado en la web.

Los manuales de usuario, que incluyen informaci??n de los procesos de difusi??n,
capacitaci??n y comunicaci??n, no est??n contemplados en esta fase debido a que
la misma ser?? desarrollada en otra etapa del proyecto por las ??reas responsables
(??rea de comunicaci??n, ??rea de recursos humanos, etc.).



### Configuracion incial

En el directorio ra??z de cada proyecto deben existir los siguientes archivos:
- README.md Que contiene la descripci??n general del proyecto.
- INSTALL.md Describe los pasos para la instalaci??n.
- UPDATE.md Describe los pasos para la actualizaci??n.
- LICENSE.md Licencia GPL Bolivia.
- CHANGELOG.md Para registrar los cambios entre versiones (opcional)
- .gitignore para no versionar archivos de configuraci??n, compilados de la
aplicaci??n y binarios grandes.


No est?? permitido versionar claves, contrase??as, tokens u otra informaci??n sensible.
En su lugar se puede poner datos de ejemplo.

No est?? permitido versionar las dependencias de c??digo externos al software,
debi??ndose usar el gestor de paquetes. Tampoco se debe versionar el software
compilado o empaquetado.

Es obligatorio que la estructura de base de datos (tablas, funciones y procedimientos
almacenados) sea versionada mediante scripts de migrations*. 


+ LINEAMIENTOS ESPEC??FICOS PARA EL DESARROLLO SEG??N EL ??MBITO DE USO.
    - Calidad en desarrollo web

    Las aplicaciones web tienen una serie de ventajas que han permitido ser el tipo de software que m??s se usa. Una de las ventajas m??s importantes es que no dependen de la computadora ni del sistema operativo en el que se ejecuta, y que puede ser utilizadas en cualquier parte del planeta a cualquier hora y desde diferentes dispositivos. Entre los aspectos negativos se encuentra que no es posible usar todas las funciones que pueden usarse en aplicaciones nativas. En tal sentido, listamos las mejores pr??cticas.
    - HTML

    Es obligado el uso de los tags de html5, dejando de lado los tags de est??ndares antiguos como ser el xhtml, as?? mismo, definir el encoding* como utf8 en las cabeceras. Es obligatorio el uso de ???tags sem??nticos???* y metadatos, de tal forma que mejore la indexaci??n y ordene la estructura de la p??gina. 
    Es recomendable que no exista c??digo javascript y css en el html, y que los archivos css sean llamados antes que los de javascript. Es obligatorio que los recursos (im??genes, archivos css y archivos javascript) sean optimizados para la web mediante procesos de minificaci??n* o uglificaci??n*.
    - CSS
    
    Es recomendable usar una convenci??n de nombres para elementos css o usar una ya existente como BEM*, OOCSS* y SMACSS*. 
    
    Es recomendable usar preprocesadores de css que extienden sus funcionalidades, por ejemplo: sass*, less* y stylus*. 
    Es recomendable que exista un ??nico archivo css donde se puedan configurar los
colores primarios, fuentes e iconos de la aplicaci??n.
    - JAVASCRIPT
    
    Es recomendado que como m??nimo se use javascript basado en el est??ndar ecma6 durante el desarrollo y en producci??n. Se requiere convertirlo a ecma5 para la compatibilidad con navegadores antiguos.
    - Seguridad

    Es obligatorio tomar en cuenta las recomendaciones de la OWASP*, reflejadas en el documento OWASP TOP 10. 
    - Accesibilidad
    
    Es recomendable que las aplicaciones web sigan las recomendaciones WCAG v2.1 nivel A .
    - Mecanismos de control
    
    Para poder validar la calidad de software web se pueden utilizar las siguientes herramientas:
    
        - Analizadores de c??digo est??tico
        - Herramientas de an??lisis Web (Rendimiento, seguridad y validaci??n de html)
        - Herramientas que verifiquen la compatibilidad de navegadores
        - Actividades de ???code review???*
        - Revisiones QA y Seguridad

---
# Documeto del proyecto
- Nombre del proyecto : Pagina web Carrera de Fisica
- Breve descripci??n general : Pagina web de informacion y difucion de actividades de la carrera de fisica.
- Objetivo y alcance del proyecto : (Actualizar) la pagina de fisica para la difucion de mejor y actual informacion, Mejorando la experiencia de navegacion y uso de la pagina web.
- Titularidad del proyecto (Comit?? de direcci??n) ... 
- Lista de colaboradores del proyecto: Centro de estudiantes de la carrera


## Definir 

- [*] Reglas para el desarrollo
- [-] Reglas para la contribuci??n
- [-] Listado de funcionalidades(especificas)
- [/] Herramientas de comunicaci??n (listas de correo)
- [/] Canales de reporte de errores
- [-] Documentacion de dise??o
- [-] Documentacion de administracion
- [-] Documentacion de desarrollo
- [-] Documentacion de codigo





# Documentacion de dise??o
## Propuesta de navegacion Pagina Web

FIUMSA.EDU.BO/

- Inicio
    - Publicaciones y cursos.
    - Informaci??n Destacada (Convocatorias y anuncios).
- Acerca de la Carrera
    - Descripci??n: Ampliar, mapa.
    - Historia: Ampliar.
    - Administraci??n.
    ??? Autoridades. 
    ??? Reglamento.
    ??? Administrativos( Foto, lugar de trabajo, contacto).
- Docentes
    - Foto, nombre, cargo, y breve descripci??n.
    - Foto, nombre, cargo, breve descripci??n, curr??culum, ??rea
de investigaci??n, publicaciones, contacto(como en el
MIT).
- Programa Acad??mico
    - Estudiantes de pregrado.
    - Perfil Profesional.
    - Admisiones.
    - Carga Acad??mica semestral: Syllabus.
    - Pensum.
    - Calendario de actividades.
- Estudiantes de postgrado.
    - Maestr??a y Doctorado.
    - Admisiones
    - Carga Acad??mica semestral: Syllabus.
    - Pensum.
    - Calendario de actividades.
- Cursos.
    - Cursos de sistemas complejos.
    - Cursos de f??sica nuclear.
    - Escuela de Astronom??a.
    - Talleres.
- Interacci??n Social
    - Planetario: ??Qu?? hacen?, infraestructura, proyectos de
interacci??n social, personal.
    - Olimpiadas: Breve descripci??n(historia, premios).
    - Revista Boliviana de F??sica: Cat??logo, informaci??n de
contactos ( Editores), tribunales, reglamentos de
publicaci??n.
- Comunidad
    - F.A.P.A
    - Convocatorias: becas comedor, auxiliatura y centro de
estudiantes.
    - Magia de la f??sica: Historia, encargados, contacto.
    - Centro de Estudiantes: Integrantes, proyectos,
calendario.
    - Clubes: Descripci??n, encargados, contacto.
    - Nuevos Postulantes: En proceso.

Contacto: redes sociales, correo, n??meros de tel??fono, direcci??n
(mapa).

IIF.FIUMSA.EDU.BO/

- Inicio
    - Publicaciones y cursos.
    - Informaci??n Destacada (Convocatorias y anuncios).
- Acerca del Instituto
    - Descripci??n: Ampliar, mapa.
    - Historia: Ampliar.
    - Administraci??n:
    ??? Autoridades.
    ??? Reglamento.
    ??? Administrativos( Foto, lugar de trabajo, contacto).
- Investigaci??n
    - ??reas de investigaci??n: Atm??sfera, Rayos C??smicos,
    F??sica Aplicada, F??sica Te??rica y Geof??sica.
    - Foto: ??Qu?? hacen?, infraestructura, proyectos de
investigaci??n, integrantes (resaltar al l??der),
publicaciones recientes, laboratorios afiliados(estilo
MIT).
- Servicios
    - Servicios que proporcionan los laboratorios.
- Seminarios y cursos.
- Biblioteca
    - Revistas Electr??nicas: revista Boliviana, suscripci??n a
revista internacional.
    - Motores de b??squeda: P??gina de la Biblioteca.
- Estudia con Nosotros: p??gina de la carrera.

Contacto: redes sociales, correo, n??meros de tel??fono, direcci??n
(mapa).


---

### Wireframes & Mockups
>Es un boceto donde se representa visualmente, de una forma muy sencilla y esquem??tica la estructura de una p??gina web. 
 
Test- revison

### Maquetaci??n web 
>El dise??o de una web en un conjunto de archivos (html, css y js) para que los navegadores web puedan interpretarlos y reproducirlos correctamente en diferentes dispositivos.

### Colores
+ bg-primario		Color primario
+ bg-primary-focus		Color primario - enfocado
+ bg-contenido primario		Color de contenido de primer plano para usar en el color primario
+ bg-secundario		Color secundario
+ bg-secundario-foco		Color secundario - enfocado
+ bg-contenido-secundario		Color de contenido de primer plano para usar en el color secundario
+ bg-acento		Acentuar el color
+ bg-accent-focus		Color de ??nfasis - enfocado
+ bg-accent-content		Color de contenido de primer plano para usar en el color de ??nfasis
+ bg-neutro		color neutro
+ bg-neutral-focus		Color neutro - enfocado
+ bg-neutral-contenido		Color de contenido de primer plano para usar en color neutro
+ bg-base-100		Color base de la p??gina, utilizado para fondos en blanco
+ bg-base-200		Color base, un poco m??s oscuro.
+ bg-base-300		Color base, a??n m??s oscuro
+ bg-base-contenido		Color de contenido de primer plano para usar en el color base
+ bg-info		Color de informaci??n
+ bg-??xito		color de exito
+ bg-advertencia		Color de advertencia
+ bg-error		color de error
# Dodumentacion de Desarrollo
## Administracion de Dominios
- Dominio fiumsa
- Subdominio iif/fiumsa


## Listado de Funcionalidades 
- Listado de funcionalidades: 
    - Administrar informacion de la carrera.
    - Publicar noticias.
    - Realizar convocatorias.
    - Distribuir Contenido Generado por la carrera.
## Arquitectura

![Diagrama Navgacion](./img/aqr1.png )
***
## Tecnologias

### frontend
+ Estilos 
https://tailwindcss.com/

![tailwind](./img/tailwindcss.png )
+ Framework
https://es.reactjs.org/

![react](./img/react.png )
### backend
+ Headless CMS
https://strapi.io/

![react](./img/strapiLogo.jpg )


***
# Reglas para la contribuci??n
## Esquema de desarrollo por ramas

![Desarrollo ](./img/controlV.png )
- Rama Principal: Es la rama central del proyecto y contiene las versiones
candidatas para la puesta en producci??n de un proyecto de software.
- Rama de desarrollo: Es la rama de la versi??n estable en desarrollo; contiene la ??ltima versi??n del proyecto de software.
- Ramas de Funcionalidades: Son ramas creadas con la finalidad de desarrollar una caracter??stica o funcionalidad del proyecto, pueden estar asociadas a requisitos del proyecto o historias de usuarios para diferenciarlas de las ramas principal y de desarrollo.
- Correcciones en producci??n: Esta rama es de uso excepcional; su finalidad es corregir posibles errores en producci??n, los cuales requieren soluciones inmediatas. Esta rama debe ser obtenida de la rama principal y una vez solucionado el error debe unirse a la misma y a la rama de desarrollo.
- Etiqueta de lanzamiento: Para la generaci??n de estas etiquetas, se ejecutan pruebas sobre la versi??n de archivos de la rama principal; esta versi??n de archivos es sometida a pruebas unitarias, de integraci??n, de funcionalidades, adem??s de revisi??n de calidad del c??digo.


***

### Seleccion de Contenido
- Datos estaticos.
- Dependencias de datos.
- Datos dinamicos.
### Test de usabilidad
- Contrastes
- Tama??os
- Complejidad
### Compatibilidad
- Telefonos Celulares
- Tablets
- Escritorio
- Sistemas operativos - Navegadores
### Traduccion
Tablas de traduccion
- Ingles 

## Mantenimiento y actualizaciones 
- Software libre (contibuciones con el reglamento y test) 

