type ActiveListener = (id: string) => void;

const listeners = new Set<ActiveListener>();
let started = false;

export function onActiveSection(listener: ActiveListener): () => void {
	listeners.add(listener);
	const current = document.documentElement.dataset.activeSection;
	if (current) listener(current);
	return () => listeners.delete(listener);
}

export function initScrollState(): void {
	if (started || typeof IntersectionObserver === 'undefined') return;
	started = true;

	const sections = [...document.querySelectorAll<HTMLElement>('main section[id]')];
	if (sections.length === 0) return;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				const id = entry.target.id;
				document.documentElement.dataset.activeSection = id;
				listeners.forEach((listener) => listener(id));
			});
		},
		{ rootMargin: '-45% 0px -50% 0px' }
	);

	sections.forEach((section) => observer.observe(section));
}