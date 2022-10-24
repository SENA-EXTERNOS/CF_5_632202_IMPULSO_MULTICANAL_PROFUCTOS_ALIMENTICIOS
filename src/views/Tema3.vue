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
        p.mb-5 El Material POP (Point on Purchase), es utilizado en el punto de venta para la promoción de productos y/o servicios, es decir, apoya la presencia del mismo en la tienda, exaltando sus condiciones, atributos y materiales. Es muy utilizado en situaciones donde no se puede permitir un número alto de vendedores que apoyen el proceso de venta (Yate Arévalo, 2012).
    h2.mt-4 Objetivos del material P.O.P.
    .row.mt-5 
      .col-4 
        p Los materiales P.O.P. tienen unos objetivos determinados así:
      .col-8
        SlyderF.mb-5(columnas="col-lg-8 col-xl-4")
          .col-md-7.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/img-2.png' alt='img-2')
              .tarjeta.color-adicional-2.borde_tarjeta
                .text-black.p-4                  
              p.text-center <b>Mantener el punto de venta atractivo</b>
          .col-md-8.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/img-3.png' alt='img-3')
              .tarjeta.color-adicional-2.borde_tarjeta
                .text-black.p-4                  
              p.text-center <b>Distinguir fácilmente la ubicación del producto</b>
          .col-md-8.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/img-4.png' alt='img-4')
              .tarjeta.color-adicional-2.borde_tarjeta
                .text-black.p-4                   
              p.text-center <b>Apoyar a los vendedores en la atención al cliente.</b>
          .col-md-8.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/img-5.png' alt='img-5')
              .tarjeta.color-adicional-2.borde_tarjeta
                .text-black.p-4                   
              p.text-center <b>Enfatizar la exhibición del producto y distinguirlo de otros.</b>
          .col-md-8.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar
              img(src='@/assets/curso/temas/t3/img-6.png' alt='img-6')
              .tarjeta.color-adicional-2.borde_tarjeta
                .text-black.p-4                  
              p.text-center <b>Informar acerca de descuentos y/o nuevos productos.</b>
    h2 Clasificación del material P.O.P
    .row
      .col-lg-10.d-block.mx-auto 
        .cajon.color-acento-contenido.p-4.mb-4.d
          p Se puede clasificar el material en dos tipos, así:
          p <b>Materiales P.O.P. temporales:</b> incrementan el impacto de la marca o producto en el punto de venta por un breve espacio de tiempo. Este tipo de material está diseñado para durar alrededor de 2 o 3 meses.
          p <b>Material P.O.P permanente:</b> garantiza su permanencia en el punto de venta hasta por 3 años, permitiendo la exhibición del producto por un largo periodo de tiempo o su uso en diferentes tendencias.
    h2 Funciones del material POP
      .row
        p Como funciones distintivas en el uso de material POP se tienen:
      img(src='@/assets/curso/temas/t3/img-7.png' alt='img-7')


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
