import * as Sentry from '@sentry/svelte';
import { env } from '$env/dynamic/public';

export const prerender = true;

if (env.PUBLIC_SENTRY_DSN)
	Sentry.init({
		dsn: env.PUBLIC_SENTRY_DSN,
		// Adds request headers and IP for users, for more info visit:
		// https://docs.sentry.io/platforms/javascript/guides/svelte/configuration/options/#sendDefaultPii
		sendDefaultPii: true
	});
