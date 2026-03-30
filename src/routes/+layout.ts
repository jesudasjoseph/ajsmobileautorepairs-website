import * as Sentry from '@sentry/svelte';

export const prerender = true;

Sentry.init({
	dsn: 'https://20c9e5fa0f31c86972f3e2c65b711e75@o4511135136743424.ingest.us.sentry.io/4511135139102720',
	// Adds request headers and IP for users, for more info visit:
	// https://docs.sentry.io/platforms/javascript/guides/svelte/configuration/options/#sendDefaultPii
	sendDefaultPii: true
});
