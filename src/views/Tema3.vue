<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Material POP
    .row
      .col-lg-2
        img(src='@/assets/curso/temas/t3/img-1.png', alt='img1')
      .col-lg-10
        p.mb-5 El <b>Material POP</b> <i>(Point on Purchase)</i>, es utilizado en el punto de venta para la promoción de productos y/o servicios, es decir, apoya la presencia del mismo en la tienda, exaltando sus condiciones, atributos y materiales. Es muy utilizado en situaciones donde no se puede permitir un número alto de vendedores que apoyen el proceso de venta (Yate Arévalo, 2012).
    h2.mt-4 Objetivos del material P.O.P
    .row.mt-5 
      .col-3
        p Para dar cumplimiento a lo que se desea con los materiales P.O.P. estos deben tener unos objetivos determinados así:
      .col-9
        SlyderF.mb-5(columnas="col-lg-6 col-xl-4")
          .tarjeta.color-adicional-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/img-2.png' alt='img2')
            p.text-center <b>Mantener el punto de venta atractivo.</b> 
          .tarjeta.color-adicional-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/img-3.png' alt='img3')
            p.text-center <b>Distinguir fácilmente la ubicación del producto</b>          
          .tarjeta.color-adicional-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/img-4.png' alt='img4')
            p.text-center <b>Apoyar a los vendedores en la atención al cliente.</b>         
          .tarjeta.color-adicional-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/img-5.png' alt='img5')
            p.text-center <b>Enfatizar la exhibición del producto y distinguirlo de otros.</b>          
          .tarjeta.color-adicional-2.p-4
            .row.justify-content-center.mb-3
              .col-8
                img(src='@/assets/curso/temas/t3/img-6.png' alt='img6')
            p.text-center <b>Informar acerca de descuentos y/o nuevos productos.</b>

    h3 Clasificación del material P.O.P
      .row.mt-3
        .col-lg-10.d-block.mx-auto 
          .cajon.color-acento-contenido.p-4.mb-4.d
            p Se puede clasificar el material en dos tipos, así:
            p <b>Materiales P.O.P temporales:</b> incrementan el impacto de la marca o producto en el punto de venta por un breve espacio de tiempo. Este tipo de material está diseñado para durar alrededor de 2 o 3 meses.
            p <b>Material P.O.P permanente:</b> garantiza su permanencia en el punto de venta hasta por 3 años, permitiendo la exhibición del producto por un largo periodo de tiempo o su uso en diferentes tendencias.
      h3.mt-3 Funciones del material POP
      p.mt-3.mb-5 Es así como se llega a las funciones distintivas en el uso de material POP y estas deben contener:
        .card-info
          div.card_img
            img(src='@/assets/curso/temas/t3/img-12.svg' alt='img-7')
          div.card_text.p-0.m-0
            .row.p-0.m-0
              .col-12.p-0.m-0.col-md-12.col-sm-12
                .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-8.svg')})`, 'background-repeat': 'no-repeat'}")
                  p.mb-3.text-bold Información 
                  p Los carteles y letreros constituyen herramientas informativas del punto de venta. Pueden ser externos e internos, buscando llamar la atención de las personas que transitan el sector y destacando los descuentos o promociones, permitiendo así concretar la venta de forma exitosa. 
            .row.p-0.m-0
              .col-12.p-0.m-0.col-md-12.col-sm-12
                .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-9.svg')})`, 'background-repeat': 'no-repeat'}")
                  p.mb-3.text-bold Recordación 
                  p En los materiales POP, o <i>displays</i>, suelen utilizarse las marcas o nombres de los productos específicos, para generar recordación a la hora de introducir una nueva y poder crecer en el mercado; se puede hacer con pautas comerciales, radiales, volantes o materiales POP, que ayudan en dicho proceso y garanticen compras futuras, aumentando la tasa de recompra.
            .row.p-0.m-0
              .col-12.p-0.m-0.col-md-12.col-sm-12
                .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-10.svg')})`, 'background-repeat': 'no-repeat'}")
                  p.mb-3.text-bold Persuasión 
                  p Al momento de la compra se generan dudas. El material POP cuenta con información detallada del producto, destacando las características diferenciadoras y que benefician al cliente; también es una forma de persuadirlo al recalcar y aumentar los atributos.
            .row.p-0.m-0
              .col-12.p-0.m-0.col-md-12.col-sm-12
                .pl-card-cus(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-11.svg')})`, 'background-repeat': 'no-repeat'}")
                  p.mb-3.text-bold La comercialización 
                  p.mb-5 Su función principal es apoyar el proceso de comercialización, incrementando las ventas, exhibiendo del producto de forma ingeniosa, recalcando los atributos del mismo, para que el consumidor pueda inspeccionar cuidadosamente el artículo y sentirlo necesario, creando una experiencia, y, así, garantizando la venta.

    Separador
    #t_3_1
    .titulo-segundo.color-primario
      h2 3.1	Ventajas del material P.O.P
    p.mb-4 Los beneficios para la empresa al implementar materiales P.O.P son:

    PasosB.color-acento-botones.mt-5
      .row(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-13.png')})`, 'background-repeat': 'no-repeat',  'height': '540px'}")
        .col-4.d-flex.justify-content-end.align-items-center.offset-7
          .dialog(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-16.svg')})`, 'background-repeat': 'no-repeat'}")
                p.px-5.mt-4.text-bold Incrementar ventas: 
                p.px-5.mt-2 El uso de material POP, ha demostrado impactar positivamente en el proceso de compra de los clientes, porque la mayoría de aquellas espontáneas se dan gracias a su influencia.
      .row(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-14.png')})`, 'background-repeat': 'no-repeat',  'height': '540px'}")
        .col-4.d-flex.justify-content-end.align-items-center.offset-7
          .dialog(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-16.svg')})`, 'background-repeat': 'no-repeat'}")
                p.px-5.mt-4.text-bold Incrementar la imagen del producto: 
                p.px-5.mt-2 Se pueden enviar mensajes claros y concisos al consumidor sobre los atributos y ventajas de la marca o producto. Esto establece una gran oportunidad para su recordación..
      .row(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-15.png')})`, 'background-repeat': 'no-repeat',  'height': '540px'}")
        .col-4.d-flex.justify-content-end.align-items-center.offset-7
          .dialog(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-16.svg')})`, 'background-repeat': 'no-repeat'}")
                p.px-5.mt-4.text-bold Reducir gastos de publicidad: 
                p.px-5.mt-2 No todos los comerciantes tienen los recursos y pueden anunciar las mercancías de su tienda a través de periódicos, radio y TV. El material POP en el punto de venta brinda una ocasión ideal para esto.
    p.mb-5 El material POP es mucho más que publicidad en el punto de venta y una estrategia de <i>merchandising</i>, es un ‘medio indispensable de comunicación’ con los clientes, que dinamiza el proceso de venta y compra. Algunas interacciones o medios que se pueden utilizar son:
      .row.mb-5 
        .col-3.d-block.mx-auto 
          img(src='@/assets/curso/temas/t3/img-28.png' alt='img28')
          .titulo-principal.color-acento-contenido
          p.mb-5 <b>Espectáculos y showman:</b> crean un gran impacto con el público y llaman la atención fácilmente, sin embargo, puede ser difícil identificar las propiedades del producto y ligarlo con el artículo que se está impulsando. 
        .col-3.d-block.mx-auto 
          img(src='@/assets/curso/temas/t3/img-29.png' alt='img29')
          .titulo-principal.color-acento-contenido
          p.mb-5 <b>Promotoras:</b> es uno de los métodos más utilizados, pero, también de los más costosos, ya que requiere de personal capacitado y entrenado para acercarse a los clientes o posibles compradores. Al entregar folletos, volantes o mediante degustaciones, logran para un acercamiento con el producto y una garantía de la compra. 
        .col-3.d-block.mx-auto 
          img(src='@/assets/curso/temas/t3/img-30.png' alt='img30')
          .titulo-principal.color-acento-contenido
          p.mb-5 <b>Juegos y concursos inmediatos:</b> este tipo de actividades muestra una gran aceptación entre el público, porque permiten la interacción de manera instantánea y de forma diferente, acercándose al producto y sus ventajas del mismo, con la excusa de obtener premios.
    Separador
    #t_3_2
    .titulo-segundo.color-primario
      h2 3.2	Utilización de material P.O.P
    .row
      .col-lg-2
        img(src='@/assets/curso/temas/t3/img-17.png', alt='img1')
      .col-lg-10
        p.mb-0 Son múltiples las opciones de material POP que tenemos a la disposición dependiendo el tipo de producto, el tipo de mercado que queremos llegar, si es de forma permanente o temporal, así mismo, los recursos o presupuesto que tenemos destinado y debemos ser muy eficaces a la hora de elegir y tomar las decisiones, en cuanto a los materiales a utilizar, ya que podemos llegar a redundar o saturar a los clientes o, por el contrario, no ser suficiente o no generar el impacto deseado.
    p.mt-5 Por ello, es importante verificar la utilización del mismo y tener en cuenta los siguientes aspectos.

    .row.mt-5.mb-5.d-flex.justify-content-center.align-items-center
      .col-lg-6.col-xl-4.h-img-flip.mb-3
        .tarjeta.tarjeta-flip.color-primario-opacity(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-19.png')})`}")
            .tarjeta-flip__contenido.d-flex.justify-content-center.align-items-center.p-4
              p.mb-0 El mensaje debe ser sencillo, breve, es decir, no más de 5 palabras, claro, conciso y debe incentivar la compra.
      .col-lg-6.col-xl-4.h-img-flip.mb-3
        .tarjeta.tarjeta-flip.color-primario-opacity(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-20.png')})`}")
            .tarjeta-flip__contenido.d-flex.justify-content-center.align-items-center.p-4
              p.mb-0 El mensaje debe ser legible y visible, tener cuidado con las combinaciones de colores.
      .col-lg-6.col-xl-4.h-img-flip.mb-3
        .tarjeta.tarjeta-flip.color-primario-opacity(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-21.png')})`}")
            .tarjeta-flip__contenido.d-flex.justify-content-center.align-items-center.p-4
              p.mb-0 El precio debe estar en un lugar apropiado, que sea claro y fácil de apreciar.

      .col-lg-6.col-xl-4.h-img-flip.mb-3
        .tarjeta.tarjeta-flip.color-primario-opacity(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-22.png')})`}")
            .tarjeta-flip__contenido.d-flex.justify-content-center.align-items-center.p-4
              p.mb-0 Al momento de implementarlo se debe procurar no opacar o tapar otros productos que se encuentren los estantes.

      .col-lg-6.col-xl-4.h-img-flip.mb-3
        .tarjeta.tarjeta-flip.color-primario-opacity(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/temas/t3/img-23.png')})`}")
            .tarjeta-flip__contenido.p-4.d-flex.justify-content-center.align-items-center
              p.mb-0 Utilizar frases muy cortas y que llamen la atención como por ejemplo “Nuevo”, “Compre ya”, “Últimos Días”, “Promoción”, “Liquidación”, ”Oportunidad” etc.


    h3.mt-5  Tipos de material POP
    p.mt-3 Los materiales POP se dividen en dos importantes categorías, según su finalidad para generar recordación entre los clientes y lograr que estos recomienden la marca o realicen compras futuras. 

    .tabla-a.color-acento-contenido.my-5
      table
        thead
          tr
            th Material POP de recordación
            th Material POP Promoción
        tbody
          tr
            td.p-0.img-hover-tabla-cus-2
            td.p-0.img-hover-tabla-cus
          tr
            td.p-0.border-tabla-a
              .row.p-0.m-0
                .col-6.p-0.m-0
                  ul.lista-ul--color.px-5.pt-3
                    li
                      i.fas.fa-check
                      | Llaveros
                    li 
                      i.fas.fa-check
                      | Relojes
                    li 
                      i.fas.fa-check
                      | Calendarios
                    li 
                      i.fas.fa-check
                      | Encendedores
                    li 
                      i.fas.fa-check
                      | bolígrafo
                    li 
                      i.fas.fa-check
                      | <i>Mouse pads</i>
                .col-6.p-0.m-0
                  ul.lista-ul--color.px-5.pt-3
                    li
                      i.fas.fa-check
                      | Calcomanías
                    li
                      i.fas.fa-check
                      | Pisapapeles de escritorios
                    li
                      i.fas.fa-check
                      | <i>Blocks&nbsp</i> de notas
                    li
                      i.fas.fa-check
                      | Bolsas de mercado o tiendas
                    li
                      i.fas.fa-check
                      | Agendas personales o de escritorio
                    li
                      i.fas.fa-check
                      | Gorras.
            td.p-0.border-tabla-a
              .row.p-3.p-0.m-0
                .col-6.p-0.m-0
                  ul.lista-ul--color.px-5.pt-3
                    li
                      i.fas.fa-check
                      | Exhibidor 
                    li
                      i.fas.fa-check
                      | Toma uno 
                    li
                      i.fas.fa-check
                      | Rompe tráfico 
                    li
                      i.fas.fa-check
                      | Hablador 
                    li
                      i.fas.fa-check
                      | Punta de góndola 
                    li
                      i.fas.fa-check
                      | <i>Dummy</i> 
                    li
                      i.fas.fa-check
                      | Isla
                    li
                      i.fas.fa-check
                      | Punto de degustación 
                    li
                      i.fas.fa-check
                      | <i>Stand</i>
                .col-6.p-0.m-0
                  ul.lista-ul--color.px-5.pt-3
                    li
                      i.fas.fa-check
                      | Cenefa
                    li
                      i.fas.fa-check
                      | Lateral 
                    li
                      i.fas.fa-check
                      | Móvil 
                    li
                      i.fas.fa-check
                      | Dispensador 
                    li
                      i.fas.fa-check
                      | Cabezote 
                    li
                      i.fas.fa-check
                      | <i>Sticker </i>
                    li
                      i.fas.fa-check
                      | <i>Brochure</i> 
                    li
                      i.fas.fa-check
                      | <i>Flayer</i>
              

    .row.d-flex.justify-content-center.align-items-center
      .col-9.d-flex.justify-content-center.align-items-center
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t3/img-18.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Tipos de Material POP
                  p.mb-0 Para ampliar la información respecto al uso y funciones de los elementos de promoción, puede ver el documento ANEXO 1  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/Tipo_material_POP.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
</template>
<script>
export default {
  name: 'Tema3',
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
