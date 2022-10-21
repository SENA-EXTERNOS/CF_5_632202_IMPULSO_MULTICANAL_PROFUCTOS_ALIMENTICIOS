<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Merchandising
    .row
    .col-md-9.d-block.mx-auto 
      .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/t2/img-1.png')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 Son todas las actividades que impulsan la compra. El término hace referencia etimológicamente a la acción de mercancía, por tanto, involucra todas las estrategias o acciones dedicadas a la promoción de productos, así como aquellas destinadas a estimular las compras por impulso, es decir, las que no estaban pensadas al momento de ingresar a un determinado establecimiento comercial.
    Separador
    .titulo-segundo.color-primario
      h2 2.1  Objetivos del Merchandising
    p.mb-4 En el merchandising se deben establecer objetivos, y, a partir de éstos, generar las estrategias. Los mismos se pueden identificar a continuación:
    .row
      .col-md-5
        img(src='@/assets/curso/temas/t2/img-2.png', alt='img2')
      .col-md-7     
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
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
            p.mb-0 Las estrategias para aumentar las ventas están presentes en cada uno de los eslabones de la cadena de suministro, entre las que está el ‘merchandising del fabricante’, que son acciones del fabricante en el punto de venta destinado, orientadas al comprador, al establecimiento y al personal, también se encuentra el ‘merchandising del distribuidor’ que son todas las acciones del minorista en su propio establecimiento, este busca no solo vender, sino optimizar la rentabilidad de la superficie en la que se encuentran los productos y la cual está destinada exclusivamente a la venta.(Martínez Cruz, 2018). 
    .row.mt-5
      h4 Beneficios del Merchandising
        p.mt-4.mb-4 En el merchandising se deben establecer objetivos, y, a partir de éstos, generar las estrategias. Los mismos se pueden identificar a continuación:
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
              | Reducción en el tiempo de compra
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Aumento en la cantidad de compras por impulso
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
              | Venta de stocks o productos rezagados.
            li
              img(src='@/assets/curso/temas/t2/img-4.png', alt='img4')
            li 
              i.fas.fa-check
              | Un punto de venta más atractivo
            li
    h4 Etapas en una estrategia de merchandising
      p.mt-4.mb-4 Para desarrollar una estrategia de merchandising es indispensable identificar las siguientes etapas:
    .tarjeta.color-primario.p-4.mb-5
      SlyderA(tipo="b")
        .row
          .col-md-6.mb-0.mb-md-0
            h4 Planificación
            p Se determinan los objetivos, el público al cual se quiere llegar, la ubicación del punto de venta, el mensaje que se quiere enviar al cliente y el tipo de publicidad que se va a emplear.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        .row
          .col-md-6.mb-4.mb-md-0
            p This is another paragraph. I think it needs to be added that the set of elements tested is not exhaustive in any sense. I have selected those elements for which it can make sense to write user style sheet rules, in my opionion.
          .col-md-6
            figure
              img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
              figcaption Leyenda de la imagen
        div
          figure
            img(src='@/assets/template/img-placeholder.svg', alt='Texto que describa la imagen')
            figcaption Leyenda de la imagen     


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
