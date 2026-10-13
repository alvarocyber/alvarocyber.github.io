import { es, type SiteCopy } from './es';

export const locales = { es } as const;
export type Locale = keyof typeof locales;
export const defaultLocale: Locale = 'es';

export const copy: SiteCopy = es;
