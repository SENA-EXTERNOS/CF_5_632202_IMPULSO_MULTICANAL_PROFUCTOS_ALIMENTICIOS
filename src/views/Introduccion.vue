<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/intro.png')})`}")
      .bloque-texto-g__texto.p-4
        p.mb-0 Apreciado aprendiz, bienvenido a este componente formativo, donde se abordará el proceso de las ventas, que garantizan rentabilidad y estabilidad. Esto exige que se unan esfuerzos en el diseño e implementación de las mejores estrategias para alcanzar las metas en este sentido. Para lograrlo, es necesario identificar los diferentes factores que influyen en el proceso de venta, según las características del producto y del cliente al que va dirigido; también seleccionar las técnicas apropiadas para el desarrollo de las mismas. En este componente formativo se describen las estrategias y técnicas más utilizadas para incentivar la compra en los consumidores.
          br
          br
          | En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
          figure
    separador
    .video
      iframe(width="560" height="315" src="https://www.youtube.com/embed/YhiNxTMVc0w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    figcaption Video: El punto de venta          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
