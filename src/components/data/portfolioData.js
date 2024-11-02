/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @typedef PortafolioData
 * @property {string} imgSrc Url de la imagen
 * @property {string} title Titulo de la tarjeta
 * @property {string[]} skills Array con tus habilidades ej: ['React', 'CSS', 'JavaScript']
 * @property {string} descripcion La descripcion de la tarjeta
 * @property {string} demoURL Url de una pagina de demostración
 * @property {string} repoURL Url del repositorio, ej: https://github.com/usuario/repo
 * @property {string} anim La animación que se ejecutará cuando se cargue la tarjeta, ej: fade-up, fade-right, fade-left, fade-down
 * @property {number} averageBrightness Cuanto brillo tendrá el color de fondo de la tarjeta, ej: 0.1
 */

/**
 * @SofiDev Esto es JSDOC, si consideras que puede ser complicado solo borralo, es un comentario, no afectará en nada
 * @type {PortafolioData[]}
 */
export const portafolioData = [
	{
		imgSrc: '/img/mantenimientosplipt.jpg',
		title: 'Mantenimiento y Carga de gas de aire acondicionado',
		skills: [],
		descripcion:
			'Programas de mantenimiento preventivo y correctivo como verificación y carga de gas refrigerante, para prolongar la vida útil de tus equipos y evitar costosas reparaciones futuras.',
		demoURL: '',
		repoURL: 'https://calendar.app.google/nUeud7iUAYa4HoMf6',
		anim: 'fade-right',
	},
{
		imgSrc: '/img/colocacionaire.jpg',
		title: 'colocacion de aire acondicinado',
		skills: [],
		descripcion:
			'Instalación profesional de nuevos equipos de refrigeración, adaptándonos a tus necesidades específicas y cumpliendo con todos los estándares de seguridad y eficiencia.',
		demoURL: '',
		repoURL: 'https://calendar.app.google/nUeud7iUAYa4HoMf6',
		anim: 'fade-right',
	},
{
		imgSrc: '/img/reparacion.jpg',
		title: 'Detección de fallas y prueba de funcionamiento',
		skills: [],
		descripcion:
			'Diagnóstico y solución rápida de problemas en equipos de refrigeración, desde refrigeradores y freezers hasta sistemas de refrigeración industrial.',
		demoURL: '',
		repoURL: 'https://calendar.app.google/nUeud7iUAYa4HoMf6',
		anim: 'fade-right',
	}

];

const skillIcons = {
	JavaScript: 'skill-icons:javascript',
	React: 'skill-icons:react-dark',
	Astro: 'skill-icons:astro',
	CSS: 'skill-icons:css',
	Sass: 'skill-icons:sass',
	StyledComponents: 'skill-icons:styledcomponents',
	Bootstrap: 'skill-icons:bootstrap',
	Tailwind: 'skill-icons:tailwindcss-dark',
};

/**
 * @description Se mapea el portafolioData para que tenga los iconos de las habilidades
 * 	Puedes ver Array.map en https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */
export const getPortafolioData = portafolioData.map((item) => {
	return {
		// Se coloca todo el contenido previo del item
		...item,
		// Se cambian las skills por los iconos correspondientes
		skills: item.skills.map((skill) => skillIcons[skill]),
	};
});
