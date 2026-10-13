export type Stop = {
	id: string;
	index: string;
	label: string;
};

export const stops: Stop[] = [
	{ id: 'inicio', index: '00', label: 'Inicio' },
	{ id: 'sobre-mi', index: '01', label: 'Mi perfil' },
	{ id: 'areas', index: '02', label: 'Áreas técnicas' },
	{ id: 'proyectos', index: '03', label: 'Proyectos' },
	{ id: 'proceso', index: '04', label: 'Cómo construyo' },
	{ id: 'formacion', index: '05', label: 'Formación' },
	{ id: 'contacto', index: '06', label: 'Contacto' },
];

export const stopIds = stops.map((stop) => stop.id);
