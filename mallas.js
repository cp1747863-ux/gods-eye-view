// js/mallas.js - Portal Académico God's Eye View USM
// Base de datos completa y rigurosamente estructurada para sedes, carreras y mallas curriculares.

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
      { id: "icinf", nombre: "Ingeniería Civil Informática" },
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "icmet", nombre: "Ingeniería Civil Metalúrgica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" },
      { id: "ibio", nombre: "Ingeniería en Biotecnología" },
      { id: "idp", nombre: "Ingeniería en Diseño de Productos" }
    ],
    sj: [
      { id: "icinf", nombre: "Ingeniería Civil Informática" },
      { id: "icmat", nombre: "Ingeniería Civil Matemática" },
      { id: "icm", nombre: "Ingeniería Civil Mecánica" },
      { id: "plancomun", nombre: "Plan Común de Ingeniería" },
      { id: "icq", nombre: "Ingeniería Civil Química" },
      { id: "icte", nombre: "Ingeniería Civil Telemática" },
      { id: "icom", nombre: "Ingeniería Comercial" }
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
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" }
    ],
    ccp: [
      { id: "iinf", nombre: "Ingeniería en Informática" },
      { id: "iem", nombre: "Ingeniería de Ejecución en Mantenimiento Industrial" },
      { id: "tui", nombre: "T.U. en Informática" },
      { id: "tucd", nombre: "T.U. en Ciencia de Datos" }
    ]
  },

  mallas: {
    icinf: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "INF-111", nombre: "Programación", creditos: 5 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HUM-101", nombre: "Humanidades I", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General I", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "INF-120", nombre: "Estructuras de Datos", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-102", nombre: "Humanidades II", creditos: 3 }
        ]
      },
      {
        semestre: 3,
        ramos: [
          { codigo: "MAT-023", nombre: "Matemática III", creditos: 5 },
          { codigo: "FIS-120", nombre: "Física General II", creditos: 5 },
          { codigo: "INF-130", nombre: "Estructuras Discretas", creditos: 4 },
          { codigo: "INF-134", nombre: "Teoría de Sistemas", creditos: 4 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 4,
        ramos: [
          { codigo: "MAT-024", nombre: "Matemática IV", creditos: 5 },
          { codigo: "FIS-130", nombre: "Física General III", creditos: 4 },
          { codigo: "INF-140", nombre: "Lenguajes de Programación", creditos: 4 },
          { codigo: "INF-145", nombre: "Informática Teórica", creditos: 4 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      }
    ],
    iinf: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-100", nombre: "Fundamento de la Matemática", creditos: 5 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 4 },
          { codigo: "INF-101", nombre: "Computación Aplicada", creditos: 4 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HUM-101", nombre: "Humanidades I", creditos: 3 },
          { codigo: "HCW-101", nombre: "Inglés I", creditos: 2 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-001", nombre: "Introducción al Cálculo", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "INF-110", nombre: "Estructura de Datos", creditos: 5 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-102", nombre: "Humanidades II", creditos: 3 },
          { codigo: "HCW-102", nombre: "Inglés II", creditos: 2 }
        ]
      }
    ],
    plancomun: [
      {
        semestre: 1,
        ramos: [
          { codigo: "MAT-021", nombre: "Matemática I", creditos: 5 },
          { codigo: "FIS-100", nombre: "Introducción a la Física", creditos: 4 },
          { codigo: "INF-111", nombre: "Programación", creditos: 5 },
          { codigo: "IWG-101", nombre: "Introducción a la Ingeniería", creditos: 3 },
          { codigo: "EFI-100", nombre: "Educación Física I", creditos: 1 },
          { codigo: "HUM-101", nombre: "Humanidades I", creditos: 3 }
        ]
      },
      {
        semestre: 2,
        ramos: [
          { codigo: "MAT-022", nombre: "Matemática II", creditos: 5 },
          { codigo: "FIS-110", nombre: "Física General I", creditos: 5 },
          { codigo: "QUI-010", nombre: "Química y Sociedad", creditos: 4 },
          { codigo: "IWG-102", nombre: "Ingeniería y Sociedad", creditos: 3 },
          { codigo: "EFI-200", nombre: "Educación Física II", creditos: 1 },
          { codigo: "HUM-102", nombre: "Humanidades II", creditos: 3 }
        ]
      }
    ]
  }
};
