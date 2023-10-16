export default {
  global: {
    componenteFormativo: 'Acondicionamiento y condiciones de punto de venta',
    descripcionCurso:
      'En la compra son varios los factores determinantes que permiten su realización, que requieren pasar de exhibir un producto a generar una experiencia en el punto de venta, para lograrlo es necesario la implementación de estrategias que permitan al cliente vivir un momento especial, que sea repetitivo, aumentando las ventas de la marca.',

    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal1.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Condiciones físicas de mobiliario para oferta de productos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Mobiliario comercial',
            hash: 't_1_1',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '<i>Merchandising</i>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: '<i>Merchandising</i> y ciclo de vida del producto',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Tipos de <i>merchandising</i>',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Material POP',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Ventajas del material P.O.P',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Utilización de material P.O.P',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Seguridad y salud en el trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: '¿Qué es el SG-SST?',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Riesgos de un Impulsador',
            hash: 't_4_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: '<i>Merchandising</i>',
      referencia:
        'Avella J, Rojas M., 2017, <em>evaluación de la respuesta sensorial en canastas elaboradas a partir de papel periódico en la tienda unilibrista</em>, Universidad Libre',
      tipo: 'Tesis',
      link:
        'https://repository.unilibre.edu.co/bitstream/handle/10901/17938/TESIS%20FINAL%20PARA%20OBTENER%20EL%20GRADO%20DE%20ADMINISTRACION%20DE%20EMPRESAS%20PDF.pdf?sequence=1',
    },
    {
      tema: 'Mobiliario Comercial',
      referencia:
        'Benthan E., Guzmán A.,2018, <em>Mobiliario para la exhibición y almacenamiento de productos comercializados en las viviendas productivas de interés prioritario del barrio La Aurora</em>, Universidad de San Buenaventura Colombia',
      tipo: 'Tesis',
      link: 'https://core.ac.uk/download/199658417.pdf',
    },
    {
      tema: 'Seguridad y salud en el trabajo',
      referencia:
        'Decreto 1072 de 2015 [Ministerio del Trabajo]. Por medio del cual se expide el Decreto Único Reglamentario del Sector Trabajo. 26 de mayo de 2015.',
      tipo: 'Decreto',
      link:
        'https://www.mintrabajo.gov.co/documents/20147/0/DUR+1072+Sector+Trabajo+Actualizado+a+Diciembre+20+de+2021.pdf/f1f86400-2b37-0582-5557-87a5d3ea8227?t=1640204850717 ',
    },
  ],
  glosario: [
    {
      termino: 'Cenefa',
      significado:
        'tipo de material de promoción que se coloca a lo largo de paredes, techos y pisos.',
    },
    {
      termino: '<i>Display</i>',
      significado:
        'formato de interfaz en el cual se ubica información gráfica en pro de la percepción del usuario y sus implicaciones de uso.',
    },
    {
      termino: 'Experiencia',
      significado:
        'es una circunstancia o un acontecimiento que, por sus características, resulta trascendental o digno de destacar en la vida de una persona',
    },
    {
      termino: 'Góndola',
      significado:
        'exhibidor de gran tamaño utilizado en las mini y supermercados para posicionar los productos en el punto de venta',
    },
    {
      termino: 'Impulso',
      significado:
        'deseo o emoción que lleva a realizar algo de manera intempestiva y sin reflexión',
    },
    {
      termino: '<i>Merchandising</i>',
      significado:
        'estrategias o acciones dedicadas al impulso de productos, así como estimular las compras por impulso, aquellas que no estaban pensadas',
    },
    {
      termino: 'Mobiliario',
      significado:
        'conjunto de bienes muebles con los que cuenta una organización y que facilitan el desarrollo físico de su actividad económica. Se localiza predominantemente en oficinas, despachos o instalaciones',
    },
    {
      termino: 'Omnicananalidad',
      significado:
        'estrategia de comunicación integral orientada a la atención del cliente con el objetivo de garantizar una experiencia satisfactoria al consumidor',
    },
    {
      termino: 'Soporte',
      significado:
        'estructura donde se soportan los materiales P.O.P., para su ubicación y posicionamiento',
    },
    {
      termino: 'Tarjeta',
      significado:
        'pieza rectangular, de cartulina o de otro material, que lleva algo impreso o escrito',
    },
    {
      termino: 'Vitrinismo',
      significado:
        'técnicas y estrategias que se aplican a una vitrina o escaparate con el fin de atrapar a los consumidores que circulan cerca al punto de venta',
    },
  ],
  referencias: [
    {
      referencia:
        'Gómez Cuevas, P. A., y Naranjo Suárez, K. (2018). <em>Implementación del sistema de seguridad y salud en el trabajo de acuerdo a los lineamientos establecidos por el Decreto 1072 de 2015</em> en la empresa Occidental de Ventas Ltda. [Trabajo de grado. Fundación Universidad de América] Repositorio Institucional Universidad de América.',
      link: 'https://repository.uamerica.edu.co/handle/20.500.11839/6865',
    },
    {
      referencia:
        'Martínez Cruz, H. (2018). <i>El arte de seducir: Merchandising</i>.  Ecoe Ediciones.',
      link: '',
    },
    {
      referencia:
        'Yate Arévalo, A. (2012).<em> Material P.O.P. Publicidad en punto de venta</em>.  Ecoe Ediciones.',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
