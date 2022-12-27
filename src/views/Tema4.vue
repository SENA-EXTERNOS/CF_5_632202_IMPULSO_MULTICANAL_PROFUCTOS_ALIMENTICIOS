<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Seguridad y salud en el trabajo
    .row.mt-5
      .col-md-12
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img-1.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 La seguridad y salud en el trabajo hace referencia a la prevención de las lesiones y enfermedades originadas por las condiciones de trabajo. Se enfoca en la protección y promoción de la salud de los trabajadores, para mejorar las condiciones y el ambiente laboral, así como la salud en el trabajo, garantizando bienestar físico, mental y social de los colaboradores (Gómez Cuevas & Naranjo Suárez, 2018). Actualmente el término se amplió a un sistema, ya que en las compañías se debe realizar la implementación de un sistema de gestión de seguridad y salud en el trabajo.
      separador
      #t_4_1
      .titulo-segundo.color-primario
        h2 4.1	¿Qué es el SG-SST?
    .row.mt-4
      .col-lg-2
        img(src='@/assets/curso/temas/t4/img-2.png', alt='img2')
      .col-lg-10.mb-4
        p.mb-4 El SG-SST (sistema de gestión de seguridad y salud en el trabajo) se encuentra descrito en el Decreto 1072 de 2015, el cual es la compilación de todas las normas, decretos, leyes y resoluciones correspondientes a la seguridad y salud en el trabajo, así como salud ocupacional en Colombia. Anteriormente, estas normas se encontraban de forma individual, lo que generaba confusiones al momento de su implementación. Para la ejecución del SG-SST se hace uso del ciclo PHVA, el cual es un procedimiento lógico y dividido en etapas que permite el mejoramiento continuo de los procesos en la organización (Gómez Cuevas & Naranjo Suárez, 2018) y consta de los siguientes pasos:
    .row.mb-5
      .col-md-6.mb-5.mb-md-0
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Planificar:") proceso inicial a través del cual se identifican las actividades que se realizan de forma incorrecta y necesitan de mejoras para garantizar la seguridad y salud de los trabajadores, con el fin de proyectar estrategias de solución. 
          
          p.text-small(numero="2" titulo="Hacer:") se procede con la implementación de las estrategias y posibles soluciones definidas en la etapa anterior. Para esto se involucra a todas las áreas de la compañía, capacitándolas en las nuevas prácticas, así como todo el desarrollo de infraestructura u otro aspecto que deba realizarse.
          
          p.text-small(numero="3" titulo="Verificar:") es fundamental garantizar la vigilancia y revisión constante de las normas implementadas, para garantizar la seguridad de los colaboradores. Confirmar los resultados que se obtienen con las ideas implementadas, evitando la ejecución de éstas de manera errónea.
          
          p.text-small(numero="4" titulo="Actuar:") se realizan las correcciones o adiciones a las estrategias planteadas, para garantizar la mejora continua y actualización en términos de normativa y seguridad de los colaboradores, buscando obtener los mejores beneficios para los empleados. 
      .col-md-6.mb-5.mb-md-0
        img(src='@/assets/curso/temas/t4/img-3.png', alt='img3')
    .row.d-flex.justify-content-center.align-items-center
      .col-9.d-flex.justify-content-center.align-items-center
        .tarjeta.color-secundario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t4/img-4.png")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Implementación del SG-SST
                  p.text-small.mb-0 Con ánimo de ampliar sus conocimientos respecto a la implementación del SG-SST, se invita a revisar el ANEXO 2 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('downloads/ANEXO 2_Implementacion SG_SST.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download
      separador
      #t_4_2
      .titulo-segundo.color-primario
        h2 4.2	Riesgos de un Impulsador
      p.mb-4 Los impulsores y vendedores, están expuestos a diferentes tipos de riesgos, desde los locativos, hasta los psicosociales, al tener que enfrentarse a clientes que requieren atención a veces inmediata de sus necesidades o lo hacen parecer así, exigiendo al impulsor tener una actitud de servicio y desarrollar un manejo de emociones que le permitan trabajar en un ambiente ameno, sin afectar su salud mental.
    TabsB.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Riesgos locativos" :icono="require('@/assets/curso/temas/t4/img-5.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Riesgos locativos
            p Son los riesgos asociados a las instalaciones e infraestructura, que pueden generar algún tipo de daño al trabajador. Suelen ser los que más accidentes generan, por la exposición constante y en circulación en este tipo de áreas. Entre los más comunes están:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Caídas a nivel en áreas de circulación
              li
              li
                i.fas.fa-check
                | Caída de techos o cubiertas
              li
              li
                i.fas.fa-check
                | Uso de máquinas y equipos
              li
              li
                i.fas.fa-check
                | Caída de arrumes, estanterías
              li
              li
                i.fas.fa-check
                | Zonas de trabajo irregulares (sin adherencia, con desniveles)
              li
              li
                i.fas.fa-check
                | Escaleras, escalas y rampas inadecuadas
              li
              li
                i.fas.fa-check
                | Uso de barandas y puertas,
              li
              li
                i.fas.fa-check
                | Baños, cuartos de cambio y suministros de agua
              li
              li
                i.fas.fa-check
                | Posturas forzadas.
              li
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/img-7.png', alt='img-7')
      
      .py-4.py-md-5(titulo="Riesgo psicosocial" :icono="require('@/assets/curso/temas/t4/img-6.png')")
        .row
          .col-md-6.mb-4.mb-md-0
            h4 Riesgo psicosocial
            p Tiene relación directa con la asignación de labores, los tiempos establecidos, y todo tipo de amenazas que puedan afectar la salud mental de los colaboradores en el desempeño de sus funciones. Entre los más comunes se encuentran:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Estrés
              li
              li
                i.fas.fa-check
                | Fatiga mental
              li
              li
                i.fas.fa-check
                | Robos o atracos
              li
              li
                i.fas.fa-check
                | Conflictos en el lugar de trabajo
              li
              li
                i.fas.fa-check
                | Acoso laboral
              li
              li
                i.fas.fa-check
                | Violencia en el espacio de trabajo
              li
              li
                i.fas.fa-check
                | Discriminación laboral
              li
              li
                i.fas.fa-check
                | Sobrecarga
              li
          .col-md-6
            figure
              img(src='@/assets/curso/temas/t4/img-8.png', alt='img-8')
    .row.mt-5
      .col-md-10.d-block.mx-auto
        .bloque-texto-g.color-acento-botones.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/temas/t4/img-9.png')})`}")
          .bloque-texto-g__texto.p-4
            p.mb-0 Cada uno de estos riesgos, sean locativos o psicosociales, va a desencadenar en algún tipo de accidente que puede traer consecuencias a la empresa. Sumado a esto, el incumplimiento de alguna norma de seguridad y salud en el trabajo puede llevar a una enfermedad laboral, lo cual imposibilitaría la realización de las funciones asignadas al colaborador. Por esto es de suma importancia que cada una de las personas que trabaja en una gran superficie, o en manipulación de alimentos, tenga muy claras sus funciones y los riesgos a los que está expuesto.

    .row.mt-5
        .col-lg-10.d-block.mx-auto 
          .cajon.color-acento-contenido.p-4.mb-4.d
            p Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>
<script>
export default {
  name: 'Tema4',
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
