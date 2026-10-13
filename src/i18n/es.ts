export type Link = { label: string; href: string };

export type SkillLevel = 'uso' | 'aprendiendo' | 'explorando';

export type AreaGroup = {
	index: string;
	title: string;
	items: { name: string; level: SkillLevel }[];
};

export type Project = {
	slug: string;
	name: string;
	status: string;
	categories: string[];
	summary: string;
	context: string;
	role: string;
	tech: string[];
	challenges: { title: string; text: string }[];
	repo?: string;
	demo?: string;
	image?: { src: string; alt: string };
};

export const es = {
	locale: 'es',
	htmlLang: 'es',

	meta: {
		title: 'Álvaro García · Ingeniería Informática, IA y agentes autónomos',
		description:
			'Álvaro García, estudiante de Ingeniería Informática en la ESI-UCLM. Construyo sistemas, exploro inteligencia artificial y agentes autónomos, y documento cada proyecto.',
		ogImage: '/og.svg',
	},

	brand: {
		text: 'alvaro.garcia',
		home: '/#inicio',
	},

	nav: [
		{ label: 'Inicio', href: '/#inicio' },
		{ label: 'Sobre mí', href: '/#sobre-mi' },
		{ label: 'Áreas técnicas', href: '/#areas' },
		{ label: 'Proyectos', href: '/#proyectos' },
		{ label: 'Contacto', href: '/#contacto' },
	],

	hero: {
		eyebrow: 'Ingeniería Informática · ESI-UCLM',
		title: ['Construyendo sistemas.', 'Explorando la inteligencia.'],
		subtitle:
			'Estudiante de Ingeniería Informática en la ESI-UCLM. Me interesa cómo diseñar, desarrollar y conectar sistemas inteligentes capaces de resolver problemas reales.',
		facts: [
			'3.º de Ingeniería Informática.',
			'Especial interés en inteligencia artificial y agentes autónomos.',
			'Desarrollo de proyectos propios y aprendizaje continuo.',
		],
		primaryCta: { label: 'Explorar proyectos', href: '/#proyectos' },
		secondaryCta: { label: 'Conocer mi perfil', href: '/#sobre-mi' },
	},

	// socials: enlaces reales pendientes de confirmar por el autor.
	socials: {
		github: { label: 'GitHub', href: 'https://github.com/alvarocyber' },
		linkedin: { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alvarogarciacamara/' },
		email: { label: 'Correo', href: 'mailto:alvaro.garcia69@alu.uclm.es' },
	} as Record<'github' | 'linkedin' | 'email', Link>,

	tagline: {
		words: ['Aprender', 'construyendo.', 'Entender', 'para', 'diseñar', 'mejor.'],
	},

	about: {
		number: '02',
		title: 'Sobre mí',
		lead: 'Estudio informática y la entiendo como un oficio: se aprende construyendo.',
		paragraphs: [
			'Estoy cursando 3.º de Ingeniería Informática en la ESI-UCLM. Mi interés va más allá de escribir código: quiero entender cómo funcionan los sistemas, cómo se diseñan los algoritmos y cómo combinar distintas tecnologías para construir soluciones útiles.',
			'Actualmente estoy orientando mi aprendizaje hacia la inteligencia artificial y los sistemas autónomos, sin dejar de trabajar los fundamentos de la ingeniería del software, la programación y el desarrollo de aplicaciones.',
		],
		pillars: [
			{ title: 'Fundamentos', text: 'Formación en las bases de la informática y la computación.' },
			{ title: 'Algoritmia', text: 'Interés por los algoritmos y la resolución estructurada de problemas.' },
			{ title: 'Proyectos', text: 'Aprendizaje práctico construyendo cosas reales de principio a fin.' },
			{ title: 'Curiosidad', text: 'Atención continua a nuevas tecnologías y formas de trabajar.' },
		],
	},

	areas: {
		number: '03',
		title: 'Áreas técnicas',
		intro:
			'Qué estoy estudiando, qué tecnologías utilizo y hacia dónde quiero orientar mi carrera. Las etiquetas distinguen lo que ya practico, lo que estoy aprendiendo y lo que estoy explorando.',
		levels: {
			uso: 'En uso',
			aprendiendo: 'Aprendiendo',
			explorando: 'Explorando',
		},
		groups: [
			{
				index: '01',
				title: 'Inteligencia artificial y agentes',
				items: [
					{ name: 'Machine learning', level: 'aprendiendo' },
					{ name: 'Agentes autónomos', level: 'explorando' },
					{ name: 'Sistemas multiagente', level: 'explorando' },
					{ name: 'IA simbólica y representación del conocimiento', level: 'explorando' },
					{ name: 'LLMs y sistemas RAG', level: 'aprendiendo' },
				],
			},
			{
				index: '02',
				title: 'Programación e ingeniería del software',
				items: [
					{ name: 'Python', level: 'uso' },
					{ name: 'JavaScript', level: 'uso' },
					{ name: 'Algoritmia y estructuras de datos', level: 'aprendiendo' },
					{ name: 'Diseño e implementación de aplicaciones', level: 'uso' },
					{ name: 'Arquitectura y organización del software', level: 'aprendiendo' },
				],
			},
			{
				index: '03',
				title: 'Desarrollo web e interfaces',
				items: [
					{ name: 'HTML y CSS', level: 'uso' },
					{ name: 'JavaScript', level: 'uso' },
					{ name: 'Diseño de interfaces y UX', level: 'aprendiendo' },
					{ name: 'Integración de frontend y backend', level: 'aprendiendo' },
				],
			},
			{
				index: '04',
				title: 'Sistemas y ciberseguridad',
				items: [
					{ name: 'Linux y línea de comandos', level: 'uso' },
					{ name: 'Redes y administración de sistemas', level: 'aprendiendo' },
					{ name: 'Ciberseguridad', level: 'explorando' },
				],
			},
		] as AreaGroup[],
	},

	projects: {
		number: '04',
		title: 'Proyectos',
		intro:
			'El núcleo del portfolio. Cada proyecto se presenta como un caso de estudio técnico: el problema, las decisiones y lo que construí.',
		categories: ['Todos', 'Inteligencia artificial', 'Desarrollo de software', 'Desarrollo web', 'Sistemas y ciberseguridad', 'Universidad y experimentación'],
		items: [
			{
				slug: 'jarvis',
				name: 'Jarvis',
				status: 'Completado',
				categories: ['Inteligencia artificial'],
				summary:
					'Asistente personal que automatiza tareas y devuelve información en cuanto se le invoca, integrado con mi sistema de notas.',
				context:
					'Lo construí como proyecto propio para tener un asistente capaz de ejecutar automatizaciones y resolver consultas bajo demanda.',
				role: 'Diseño y desarrollo completos, y mantenimiento para uso personal. No está publicado en un repositorio.',
				tech: ['Python', 'Obsidian', 'MCP'],
				challenges: [],
				image: { src: '/jarvis.webp', alt: 'Vista del asistente Jarvis en ejecución.' },
			},
			{
				slug: 'aplicacion-bancaria',
				name: 'Aplicación bancaria',
				status: 'Completado',
				categories: ['Universidad y experimentación'],
				summary:
					'Aplicación bancaria de escritorio desarrollada como proyecto universitario, con lógica de negocio y persistencia en base de datos.',
				context:
					'Proyecto de la universidad para aplicar diseño de aplicaciones, implementación de funcionalidades y conexión con una base de datos relacional, organizado en capas de presentación, dominio y persistencia.',
				role: 'Diseño de la aplicación, integración de cada funcionalidad y conexión con la base de datos.',
				tech: ['C#', '.NET 10', 'Windows Forms', 'MySQL'],
				challenges: [
					{
						title: 'Arquitectura por capas',
						text: 'Separé la presentación (Windows Forms), el dominio y la persistencia para mantener el código estructurado y mantenible.',
					},
				],
				repo: 'https://github.com/alvarocyber/appbancaria',
				image: { src: '/app-banco.webp', alt: 'Interfaz de la aplicación bancaria de escritorio.' },
			},
			{
				slug: 'python-from-cero',
				name: 'Python from Cero',
				status: 'Completado',
				categories: ['Inteligencia artificial', 'Desarrollo de software'],
				summary:
					'Cuaderno de aprendizaje de Python desde cero, como base para el desarrollo backend y los sistemas de IA y agentes.',
				context:
					'Lo usé como punto de partida antes de profundizar en inteligencia artificial, agentes autónomos y sistemas multiagente.',
				role: 'Recorrido completo resuelto por mí, con scripts numerados y ejercicios organizados por tema.',
				tech: ['Python', 'requests', 'BeautifulSoup'],
				challenges: [
					{
						title: 'Solo librería estándar',
						text: 'Todo el recorrido usa la librería estándar salvo requests y BeautifulSoup en los módulos de peticiones y scraping.',
					},
				],
				repo: 'https://github.com/alvarocyber/python-from-cero',
				image: { src: '/python-from-cero.svg', alt: 'Composición con el logotipo de Python.' },
			},
			{
				slug: 'fullstack-from-cero',
				name: 'Fullstack from Cero',
				status: 'En desarrollo',
				categories: ['Desarrollo web'],
				summary:
					'Cuaderno de bitácora del bootcamp de JavaScript full stack de JSCamp, con apuntes y ejercicios módulo a módulo.',
				context:
					'Complementa mi formación en la ESI-UCLM siguiendo el temario oficial de JSCamp, de frontend a DevOps.',
				role: 'Ejercicios y apuntes propios sobre el temario, organizados por módulos.',
				tech: ['HTML', 'CSS'],
				challenges: [
					{
						title: 'Práctica propia, no copia',
						text: 'Cada módulo recoge mis propios ejercicios y apuntes, no una copia del repositorio oficial del curso.',
					},
				],
				repo: 'https://github.com/alvarocyber/fullstack_from_zero',
				image: {
					src: '/fullstack-from-cero.svg',
					alt: 'Composición con los logotipos del stack: HTML, CSS, JavaScript, TypeScript, React, Node.js, SQL y Docker.',
				},
			},
		] as Project[],
		pendingNote: 'Proyectos en preparación. Esta sección se completará con repositorios reales verificados.',
	},

	process: {
		number: '05',
		title: 'Cómo trabajo',
		intro: 'Un enfoque de aprendizaje que aplico a cada proyecto.',
		steps: [
			{ index: '01', title: 'Investigar el problema', text: 'Entender el contexto, las restricciones y qué hay que resolver antes de escribir código.' },
			{ index: '02', title: 'Diseñar una solución', text: 'Pensar la estructura, los datos y los componentes antes de implementar.' },
			{ index: '03', title: 'Implementar y experimentar', text: 'Construir, probar enfoques y aprender del resultado de cada iteración.' },
			{ index: '04', title: 'Probar, documentar y mejorar', text: 'Verificar que funciona, dejar constancia de lo aprendido y refinar.' },
		],
	},

	education: {
		number: '06',
		title: 'Formación y evolución técnica',
		intro: 'Mi formación actual y cómo se orientan mis intereses.',
		current: {
			title: 'Ingeniería Informática — ESI-UCLM',
			detail: '3.º de carrera. Orientación progresiva hacia la inteligencia artificial, los agentes autónomos y el desarrollo de software.',
		},
		timeline: [
			{ period: 'Base', title: 'Fundamentos', text: 'Programación, algoritmia y bases de la computación.' },
			{ period: 'Actualidad', title: 'Ingeniería del software', text: 'Diseño e implementación de aplicaciones y proyectos propios.' },
			{ period: 'En curso', title: 'Inteligencia artificial', text: 'Machine learning, agentes y sistemas autónomos.' },
		],
		// Cursos, certificaciones y formación complementaria: solo cuando existan datos verificables.
		extra: [] as Link[],
	},

	contact: {
		number: '07',
		title: 'Las buenas ideas empiezan construyendo.',
		text: 'Estoy aprendiendo, desarrollando proyectos y explorando nuevas formas de aplicar la informática. Si quieres conocer mi trabajo, compartir una idea o hablar de una oportunidad, puedes contactar conmigo.',
	},

	footer: {
		note: 'Diseñado y construido con Astro.',
		legal: [
			{ label: 'Aviso legal', href: '/legal' },
			{ label: 'Privacidad', href: '/privacidad' },
		] as Link[],
	},
};

export type SiteCopy = typeof es;
