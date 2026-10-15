// js/mallas.js

const datosUSM = {
  sedes: [
    { id: "cc", nombre: "Campus Casa Central (Valparaíso)" },
    { id: "sj", nombre: "Campus San Joaquín (Santiago)" },
    { id: "vit", nombre: "Campus Vitacura (Santiago)" },
    { id: "vdm", nombre: "Sede Viña del Mar" },
    { id: "ccp", nombre: "Sede Concepción" }
  ],
  
  carreras: {
    cc: [
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "icmet", nombre: "Ingeniería Civil Metalúrgica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "ibio", nombre: "Ingeniería en Biotecnología" },
      { id: "idp", nombre: "Ingeniería en Diseño de Productos" },
      { id: "ast", nombre: "Licenciatura en Astrofísica" },
      { id: "lq", nombre: "Licenciatura en Química" },
      { id: "fis", nombre: "Licenciatura en Física" },
      { id: "qi", nombre: "Química Industrial" }
    ],
    sj: [
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "ibio", nombre: "Ingeniería en Biotecnología" },
      { id: "idp", nombre: "Ingeniería en Diseño de Productos" }
    ],
    vit: [
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "iavc", nombre: "Ingeniería en Aviación Comercial" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" }
    ],
    vdm: [
      { id: "iinf", nombre: "Ingeniería en Informática" },
      { id: "idm", nombre: "Ingeniería en Diseño de Manufactura" },
      { id: "iem", nombre: "Ingeniería de Ejecución en Mantenimiento Industrial" },
      { id: "iprla", nombre: "Ingeniería en Prevención de Riesgos Laborales y Ambientales" },
      { id: "tudarq", nombre: "T.U. en Dibujo Arquitectónico y Estructural" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" },
      { id: "tuia", nombre: "T.U. en Industrias de Alimentos" },
      { id: "tuar", nombre: "T.U. en Automatización y Robótica" },
      { id: "tubio", nombre: "T.U. en Biotecnología" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" },
      { id: "tuco", nombre: "T.U. en Construcción" },
      { id: "tuel", nombre: "T.U. en Electricidad" },
      { id: "tuelt", nombre: "T.U. en Electrónica" },
      { id: "tuer", nombre: "T.U. en Energías Renovables" },
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tuma", nombre: "T.U. en Mantenimiento Aeronáutico" },
      { id: "tumin", nombre: "T.U. en Mantenimiento Industrial" },
      { id: "tumaauto", nombre: "T.U. en Mecánica Automotriz" },
      { id: "tuminas", nombre: "T.U. en Minas y Metalurgia" },
      { id: "tupri", nombre: "T.U. en Proyectos de Ingeniería" },
      { id: "tuqui", nombre: "T.U. en Química / Análisis Químico" },
      { id: "tuquind", nombre: "T.U. en Química Industrial" },
      { id: "turob", nombre: "T.U. en Robótica y Mecatrónica" },
      { id: "tutel", nombre: "T.U. en Telecomunicaciones y Redes" }
    ],
    ccp: [
      { id: "iinf", nombre: "Ingeniería en Informática" },
      { id: "idm", nombre: "Ingeniería en Diseño de Manufactura" },
      { id: "iem", nombre: "Ingeniería de Ejecución en Mantenimiento Industrial" },
      { id: "iprla", nombre: "Ingeniería en Prevención de Riesgos Laborales y Ambientales" },
      { id: "tuae", nombre: "T.U. en Administración de Empresas" },
      { id: "tuar", nombre: "T.U. en Automatización y Robótica" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" },
      { id: "tuco", nombre: "T.U. en Construcción" },
      { id: "tuel", nombre: "T.U. en Electricidad" },
      { id: "tuelt", nombre: "T.U. en Electrónica" },
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tumin", nombre: "T.U. en Mantenimiento Industrial" },
      { id: "tumaauto", nombre: "T.U. en Mecánica Automotriz" },
      { id: "tumecman", nombre: "T.U. en Mecánica Mantenimiento" },
      { id: "tutel", nombre: "T.U. en Telecomunicaciones y Redes" }
    ]
  },

  mallas: {
    iinf: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-100", nombre: "Fundamento de la Matemática", creditos: 5 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 4 },
          { codigo: "INF-101", nombre: "Computación Aplicada", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HUM-101", nombre: "Humanidades I: Competencias Clave para el Desarrollo Personal", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-001", nombre: "Introducción al Cálculo", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "INF-110", nombre: "Ciencias de la Ingeniería I: Estructura de Datos", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-102", nombre: "Humanidades II: Competencias para el Desarrollo Profesional", creditos: 3 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      }
    ]
  }
};
