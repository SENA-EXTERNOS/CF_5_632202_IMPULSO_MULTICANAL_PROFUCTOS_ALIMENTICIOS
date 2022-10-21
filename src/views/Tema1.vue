<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Condiciones físicas de mobiliario para oferta de productos
    .row
      .col-lg-4
        img(src='@/assets/curso/temas/t1/img-1.png', alt='img1')
      .col-lg-8
        .cajon.color-secundario.p-4.mb-4
          p La adecuación y la disposición de los diferentes elementos que se utilizan para la oferta de productos es indispensable, porque permite garantizar la calidad del producto alimenticio y el aumento en las ventas. Es desde ese momento que inicia el proceso de compra, incentivando los diferentes elementos necesarios que la inciten
        .cajon.p-4.mb-4
          p Al momento de ofertar un producto todas las condiciones son esenciales, desde el empaque, los atributos, la promoción que se realice, así como los canales empleados para la oferta del mismo. El mercado es cambiante y se debe adaptar a los requerimientos que implican los deseos del consumidor, permitiendo llegar a diferentes escenarios de este tipo y logrando aumentar las ventas.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
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
