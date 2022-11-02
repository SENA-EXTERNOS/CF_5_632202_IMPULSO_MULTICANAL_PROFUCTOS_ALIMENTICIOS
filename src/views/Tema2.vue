<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 <i>Merchandising</i>
    .row
      .col-md-9.d-block.mx-auto 
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img-1.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Son todas las actividades que impulsan la compra. El término hace referencia etimológicamente a la acción de mercancía, por tanto, involucra todas las estrategias o acciones dedicadas a la promoción de productos, así como aquellas destinadas a estimular las compras por impulso, es decir, las que no estaban pensadas al momento de ingresar a un determinado establecimiento comercial.
    Separador
    .titulo-segundo.color-primario
      h2 2.1  <i>Objetivos del Merchandising</i>
    p.mb-4 En el <i>merchandising</i> se deben establecer objetivos, y, a partir de éstos, generar las estrategias. Los mismos se pueden identificar a continuación:
    .row
      .col-md-5
        img(src='@/assets/curso/temas/t2/img-2.png', alt='img2')
      .col-md-7     
        AcordionA.mb-5(tipo="a" clase-tarjeta="faa")
          .row(titulo="Llamar la atención:")
            .col-md-12.mb-4.mb-md-0
              p Destacar un determinado producto respecto a otros o hacer más notorias sus características, promoviendo la compra del mismo.
          .row(titulo="Dirigir al cliente hacia el producto:")
            .col-md-12.mb-4.mb-md-0
              p Desarrollar estrategias que permitan impulsar el cliente hacia un producto o zona específica en la tienda. Por ejemplo, ubicar zonas de juegos infantiles posteriores a zonas de comidas, ya que en muchas ocasiones al transitar por éstas con el único fin de llegar allí, se estimula la compra de productos alimenticios.
          .row(titulo="Facilitar la acción de compra:")
            .col-md-12.mb-4.mb-md-0
              p Para esto se realizan observaciones en el comportamiento de los consumidores, por ejemplo, la circulación que realizan al ingresar al establecimiento comercial. Posteriormente, se ubican de forma estratégica los productos. También, el colocar a la altura de los ojos aquellos que se desea sean comprados por impulso, y a una superior o a nivel del piso, elementos de primera necesidad.
          .row(titulo="Aumentar la rotación y rentabilidad de los productos:")
            .col-md-12.mb-4.mb-md-0
              p Con esto se busca asegurar un surtido adaptado permanentemente a las necesidades de los clientes, facilitando la compra al interior del establecimiento y exhibiendo de manera apropiada las mercancías.
    .row.mt-5
      .col-md-12
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img-3.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Las estrategias para aumentar las ventas están presentes en cada uno de los eslabones de la cadena de suministro, entre las que está el ‘<i>merchandising</i> del fabricante’, que son acciones del fabricante en el punto de venta destinado, orientadas al comprador, al establecimiento y al personal, también se encuentra el ‘<i>merchandising</i> del distribuidor’ que son todas las acciones del minorista en su propio establecimiento, este busca no solo vender, sino optimizar la rentabilidad de la superficie en la que se encuentran los productos y la cual está destinada exclusivamente a la venta.(Martínez Cruz, 2018). 
    .row.mt-5
      h4 Beneficios del <i>Merchandising</i>
        p.mt-4.mb-4 En el <i>merchandising</i> se deben establecer objetivos, y, a partir de éstos, generar las estrategias. Los mismos se pueden identificar a continuación:
      .col-11.d-block.mx-auto 
          ul.lista-ul--color
            li 
              i.fas.fa-check
              | Paso de zonas frías a lugares frecuentados.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Mayores ventas.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Reducción en el tiempo de compra.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Aumento en la cantidad de compras por impulso.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Mayor rotación de productos.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Un mejor ambiente en el punto de ventas y comodidad en el mismo.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Potenciación de productos “’imán’.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Venta de <i>stocks</i> o productos rezagados.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Un punto de venta más atractivo.
            li
    h4 Etapas en una estrategia de <i>merchandising</i>
      p.mt-4.mb-4 Para desarrollar una estrategia de <i>merchandising</i> es indispensable identificar las siguientes etapas:
    .tarjeta.color-primario.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-0.mb-md-0
            h4 Planificación
            p Se determinan los objetivos, el público al cual se quiere llegar, la ubicación del punto de venta, el mensaje que se quiere enviar al cliente y el tipo de publicidad que se va a emplear.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/img-5.png', alt='img5')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Ejecución
            p Se ejecutan las estrategias e ideas previamente establecidas en la etapa de planificación. Se establece el surtido, la ubicación de estanterías, la ambientación, las luces, la música a emplear, y demás elementos que se incluirán en el punto de venta.
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/img-6.png', alt='img6')
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Seguimiento:
            p Desarrollo del proceso de evaluación y mejora continua a las estrategias implementadas, para determinar los ajustes pertinentes con ánimo de incrementar las ventas y realizar los estudios de mercado que sean necesarios para conocer otros gustos y tendencias del cliente. 
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t2/img-7.png', alt='img7')
    .titulo-segundo.color-primario
      h2 2.2 <i>Merchandising</i> y ciclo de vida del producto
    p Las estrategias de mercadeo y publicidad que se desarrollan para posicionar un producto determinan en qué etapa se encuentra, siendo necesario seguir el ciclo de vida del producto así:
    ImagenInfografica.color-nuevo.mb-5.col-10.d-block.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/img.8.png', alt='img8' )   
      .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="" )
        .h5.mb-2 Frenar la reducción en las ventas
        p Dinamizar las ventas: 
        p A través de promociones agresivas.
      .tarjeta.color-acento-botones.p-3(x="70%" y="20%" numero="  ")
        .h5.mb-2 Nace una nueva referencia de producto
          p Responde a:
          p ¿Dónde será instalado?
          p ¿En qué línea?
          P ¿Cerca a qué productos?
      .tarjeta.color-acento-botones.p-3(x="13%" y="70%" numero="  ")
        .h5.mb-2 Mantener estrategias que han funcionado
          p A través de:
          p Dedicación personal al producto.Excelentes relaciones con los colaboradores
          P Promociones del producto.
        
      .tarjeta.color-acento-botones.p-3(x="83%" y="70%" numero=" ")
        .h5.mb-2 Generación de estrategias
        p Para
        p Evitar el estancamiento
        p Aumentar ventas
        P Expansión del producto.
    .titulo-segundo.color-primario
      h2 2.3 Tipos de <i>merchandising</i>
    .row.mt-4
      .col-lg-2
        img(src='@/assets/curso/temas/t2/img-13.png', alt='img13')
      .col-lg-10.mb-4
        p.mb-4 El <i>merchandising</i> se puede clasificar de diferentes maneras dependiendo el enfoque o la finalidad de las estrategias a implementar, así:
    .row.mt-5
      .col-lg-2
      h2 <i>Merchandising</i> de almacén
      p Se encarga del punto de venta y se analiza el espacio desde las siguientes perspectivas:
      TabsA.color-acento-contenido.mb-5
        .tarjeta.color-secundario--borde.p-4(titulo="La ubicación")
          .row
            .col-6
              h4 La ubicación
              p Incide en la decisión de compra de los consumidores, por ejemplo, situar el almacén en avenidas que tengan fácil acceso, lugares donde no se dificulte llegar a través de medios de transporte, etc.
            .col-6
              img(src='@/assets/curso/temas/t2/img-14.png', alt='img14')
        .tarjeta.color-secundario--borde.p-4(titulo="El <i>lay out</i> Interior")
          .row
            .col-6
              h4 El <i>lay out</i> Interior
              p Se refiere a la distribución de los elementos al interior del punto de venta.
              p Por ejemplo, cuando se visita un lugar existe una tendencia natural de las personas a realizar el recorrido desde la derecha y circular en dirección opuesta a las manecillas del reloj, por lo tanto, ésta se realiza con los productos destino y cajas registradoras a la izquierda, garantizando así el recorrido total del almacén.
              p Además, se deben considerar otros detalles, por pequeños que parezca, como la ubicación de los impulsadores, las estanterías, la música, la iluminación, etc. (Martínez Cruz, H., 2018) .
            .col-6
              img(src='@/assets/curso/temas/t2/img-15.png', alt='img15')
        .tarjeta.color-secundario--borde.p-4(titulo="La Fachada")
          .row
            .col-6
              h4 La Fachada
              p Es la encargada de comunicar un concepto de marca, impactar y crear un distintivo respecto a la competencia. 
            .col-6
              img(src='@/assets/curso/temas/t2/img-16.png', alt='img16')
        .tarjeta.color-secundario--borde.p-4(titulo="Estanterías")
          .row
            .col-6
              h4 Estanterías
              p Son utilizadas para ubicar los productos y tener acceso a éstos de forma organizada y estratégica, por parte de los clientes. Para ello se deben tener presentes los siguientes elementos:
              p La altura de los ojos: es la altura natural, donde siempre se dirige la mirada. En estas estanterías colocan los productos que menos se venden y los que se pretende se adquieran por impulso.
              p La altura de los pies: es la que más cuesta y donde se ubican los productos más necesarios.
              p La altura de las manos: es la altura que requiere menos esfuerzo para tomar los productos.
            .col-6
              img(src='@/assets/curso/temas/t2/img-17.png', alt='img17')
        .tarjeta.color-secundario--borde.p-4(titulo="Vitrinismo")
          .row
            .col-6
              h4 Vitrinismo
              p Son todas las técnicas y estrategias que se aplican a estanterías o escaparates comerciales, con el fin de atrapar a los consumidores que circulan cerca al punto de venta. Su objetivo principal es incitar la compra de los productos en exhibición.
              h4.mb-4 Tipos de Vitrina
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | Interior: aquí el producto está al interior de la tienda, expuesto en la zona más transitada.
                li
                li
                  i.fas.fa-check
                  | Cerrada:  este tipo de vitrina se encuentra cerrada, protegiendo el producto expuesto.
                li
                li
                  i.fas.fa-check
                  | Abierta: es aquella en donde se exhibe el producto en un contenedor abierto, permitiendo la interacción con el cliente.
                li
                li
                  i.fas.fa-check
                  | Exterior: su función es impactar al transeúnte o potencial comprador al brindarle una breve información respecto al producto, despertando su atención, su interés y avivando su curiosidad por conocer más.
                li
            .col-6
              img(src='@/assets/curso/temas/t2/img.17.png', alt='img17')
      .row
        .col-lg-4
          img(src='@/assets/curso/temas/t2/img-18.png', alt='img18')
          .row
            .col.mt-4
              p Para mayor comprensión del proceso de montaje de una vitrina, se listan los siguientes aspectos que permiten realizar su montaje, utilizando <i>merchandising</i>.
        .col-lg-8.mb-5
          .cajon.color-secundario1.p-4.mb-4
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Instalar elementos que llamen la atención de los clientes.
              li
              li
                i.fas.fa-check
                | Incluir una buena iluminación y una combinación adecuada de luces.
              li
              li
                i.fas.fa-check
                | Ser muy creativa, para generar impacto con tan solo mirarla.
              li
              li
                i.fas.fa-check
                | No saturar, debe ser simple, destacando un elemento central.
              li
              li
                i.fas.fa-check
                | Transmitir una historia que enganche e incite al cliente a comprar.
              li
              li
                i.fas.fa-check
                | Es importante renovarla regularmente; las tendencias cambian.
              li
    h2.mt-4 <i>Merchandising</i>de presentación y seducción
    .row
      .col-lg-6
        img(src='@/assets/curso/temas/t2/img-19.png', alt='img19')
      .col-lg-6
          p Es el que favorece las compras al interior de la tienda, es decir, convierte los impulsos en una compra, lo que aumenta la rotación de los productos, a través del uso de elementos denominados caprichos, como dulces, golosinas, accesorios, entre otros. Para lograrlo se debe realizar una distribución atractiva del espacio y el punto de venta.
          p La creatividad es un factor fundamental, ya que permite generar un ambiente idóneo para la compra. Se enfoca en aspectos que permitan llegar a través de los sentidos (ojos, oído, olfato, tacto y gusto), los cuales son el medio a través del que el consumidor conoce los productos. De ahí que se encargue de prestar atención a elementos como la iluminación, la música, el mobiliario, los colores y la decoración implementadas, con el objetivo de crear un ambiente agradable, ya ayudará a incrementar las opciones de venta. (Martínez Cruz, 2018). 
    h2.mt-4 <i>Merchandising</i> de gestión
    .row
      .col-lg-12
        p.mt-5 Se encarga de la optimización del espacio según la variedad, la cantidad y rotación de los productos. Permite recopilar información sobre los compradores: la frecuencia de visitas, los patrones de conducta y desplazamientos que tienen en el punto de venta, con el fin de guiar e influir en su comportamiento. Algunos elementos que se deben tener en cuenta son:
    .row
      .col-lg-4.d-block.mx-auto
        img(src='@/assets/curso/temas/t2/img-20.png', alt='img20')
      .col-lg-7
        ul.lista-ul--color
          li
            i.fas.fa-check
            | La distribución y disposición, tanto del espacio, como del punto de venta
          li
          li
            i.fas.fa-check
            | Un ambiente de compra agradable.
          li
          li
            i.fas.fa-check
            | Un surtido acorde a la cantidad, calidad y variedad.
          li
          li
            i.fas.fa-check
            | La cantidad, el producto, el lugar y una acomodación adecuada del mismo.
          li
    separador
    .titulo-segundo.color-primario
      h2 2.4 Implementación de <i>merchandising</i>
    p Para ampliar los saberes asociados a las ventajas, etapas y tipos de <i>merchandising</i>, se puede hacer uso de algunas de las estrategias y técnicas para su implementación efectiva en el punto de venta.
    
    ImagenInfografica.color-secundario.mb-5.col-8.d-block.mx-auto
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/temas/t2/img-21.png', alt='img21' )       
      .tarjeta.color-acento-botones.p-3(x="64%" y="21%" numero="" )
        .h5.mb-2 Identificación de zonas:
        p Detectar las zonas frías (menos transitadas) y calientes (más transitadas) en el punto de venta, para realizar la ubicación estratégica de los productos. 
      .tarjeta.color-acento-botones.p-3(x="78%" y="47%" numero="")
        .h5.mb-2 Animación y ambientación en el punto de venta: 
        p Se puede desarrollar a través de cuatro medios:
        p a. Físico: Utilizando publicidad como exhibidores, catálogos y folletos.
        p b. Psicológicos: promociones y ubicación de manera reiterada el producto.
        P c. De estímulos: luces y sonido que captan la atención del cliente.
        p d. Personales: personajes caracterizados, encargados de animar en el punto de venta. 
      .tarjeta.color-acento-botones.p-3(x="66%" y="73%" numero="")
        .h5.mb-2 Exhibición: 
        p Exposición del producto mediante <i>souvenirs</i> (Material POP) y degustaciones.
      .tarjeta.color-acento-botones.p-3(x="33%" y="74%" numero="")
        .h5.mb-2 Ubicación:
        p Ubicar los productos de manera estratégica y accesible. No se debe generar algún tipo de obstáculo, por ejemplo, desplazarse hasta la bodega
      .tarjeta.color-acento-botones.p-3(x="22%" y="48%" numero="")
        .h5.mb-2 Mobiliario:
        p Aprovechar el mobiliario utilizado, así como la ubicación de los productos, teniendo en cuenta, por ejemplo, la altura a la que son ubicados.
      .tarjeta.color-acento-botones.p-3(x="37%" y="21%" numero="")
        .h5.mb-2 Capacitación del personal
        p Realizar capacitación constante al personal, para garantizar una excelente atención al cliente.
    .titulo-segundo.color-primario
      h2 2.5 Técnicas de <i>merchandising</i>
    p.mt-5 Es hora de ver las técnicas que se pueden implementar para desarrollar el <i>merchandising</i>.

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-22.png' alt='img-22')
            .tarjeta.color-primario.borde_tarjeta
              .text-black.p-4
                h2.text-center Degustaciones: 
                p Generan muy buena aceptación en los establecimientos y provocan incrementos de venta.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-23.png' alt='img-23')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h2.text-center Demostraciones: 
                p Se realizan para productos como electrodomésticos, transmitiendo seguridad al cliente.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-24.png' alt='img-24')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h2.text-center Pilas y exposiciones masivas de producto: 
                p Generan sensación de abundancia y provocan un efecto positivo en los compradores.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-25.png' alt='img-25')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h2.text-center Cubetas: 
                p Son contenedores. Exhiben el producto de forma directa, generando la impresión de descuento.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-26.png' alt='img-26')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h3.text-center Extensiones de lineal: 
                p Permiten resaltar un producto sobre los demás en una estantería.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-27.png' alt='img-27')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h3.text-center Mástiles: 
                p Carteles que anuncian algún tipo de descuento, ya sea sobre el mobiliario o colgando del techo.
      .row.mb-5
        .col-md-6.col-lg.mb-5.mb-lg-0
          .tarjeta-avatar
            img(src='@/assets/curso/temas/t2/img-28.png' alt='img-28')
            .tarjeta.color-primario.borde_tarjeta
              .p-4
                h2.text-center Señalizadores:
                p Son indicadores, por ejemplo, flechas en el suelo, que permiten guiar a los clientes.
</template>
<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
