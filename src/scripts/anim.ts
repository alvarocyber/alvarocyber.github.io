import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const revealEls = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];

if (reduce) {
	revealEls.forEach((el) => el.classList.add('is-visible'));
} else {
	const io = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					io.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
	);
	revealEls.forEach((el) => io.observe(el));

	gsap.registerPlugin(ScrollTrigger);

	const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
	lenis.on('scroll', ScrollTrigger.update);
	gsap.ticker.add((time) => lenis.raf(time * 1000));
	gsap.ticker.lagSmoothing(0);

	const diagram = document.querySelector<SVGSVGElement>('[data-diagram]');
	if (diagram) {
		const paths = diagram.querySelectorAll('g[stroke] path');
		paths.forEach((path) => {
			const len = (path as SVGPathElement).getTotalLength();
			gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
		});
		const nodes = diagram.querySelectorAll('circle');

		gsap.to(paths, {
			strokeDashoffset: 0,
			duration: 2,
			stagger: 0.12,
			ease: 'power2.out',
			delay: 0.3,
		});
		gsap.from(nodes, {
			scale: 0,
			transformOrigin: 'center',
			duration: 0.6,
			stagger: 0.08,
			ease: 'back.out(1.7)',
			delay: 0.5,
		});

		gsap.to(diagram, {
			yPercent: 6,
			ease: 'none',
			scrollTrigger: { trigger: '#inicio', start: 'top top', end: 'bottom top', scrub: true },
		});
	}

	const world = document.querySelector<SVGSVGElement>('[data-world] svg');
	if (world) {
		gsap.to(world, {
			yPercent: 4,
			ease: 'none',
			scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true },
		});
	}

	document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]').forEach((a) => {
		const id = a.getAttribute('href');
		if (!id || id === '#' || id === '#contenido') return;
		a.addEventListener('click', (e) => {
			const target = document.querySelector<HTMLElement>(id);
			if (!target) return;
			e.preventDefault();
			lenis.scrollTo(target, { offset: -96 });
		});
	});
}

export {};
