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
        .cajon.p-4
          p Al momento de ofertar un producto todas las condiciones son esenciales, desde el empaque, los atributos, la promoción que se realice, así como los canales empleados para la oferta del mismo. El mercado es cambiante y se debe adaptar a los requerimientos que implican los deseos del consumidor, permitiendo llegar a diferentes escenarios de este tipo y logrando aumentar las ventas.
    Separador
    .titulo-segundo.color-primario
      h2 1.1  Mobiliario comercial
    .row
      .col-lg-2
        img(src='@/assets/curso/temas/t1/img-2.png', alt='img2')
      .col-lg-10
        p El mobiliario comercial se refiere a todos las herramientas o elementos necesarios para la oferta de productos en el sector retail. Se puede acondicionar desde cero, es decir, generando una nueva ubicación, distribución, compra de diferentes anaqueles y estanterías; o, adaptando instalaciones que ya existen en determinado espacio. En cualquier caso, siempre se debe optar por brindar al cliente la mejor experiencia, y, así, aumentar las ventas. Con este fin, es necesario aprovechar los diferentes tipos de tránsito que realiza éste por las distintas zonas por donde puede circular en la tienda o lugar destinado a la venta.
    Separador
    .titulo-segundo.color-primario  
      h2 1.2  Etapas de un proyecto de mobiliario comercial
    .row.mt-4
      .col-lg-2
        img(src='@/assets/curso/temas/t1/img-3.png', alt='img3')
      .col-lg-10
        p.mb-4 En la disposición de un proyecto mobiliario es necesario establecer unas etapas o fases, con cada una de las actividades que se desarrollan allí y son acordes a cada una, guardando coherencia entre ellas. En el siguiente vídeo se puede observar una descripción de éstas. 
    .video.mt-5
      iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video: Leyenda del video
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
