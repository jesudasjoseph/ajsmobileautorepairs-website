<script lang="ts">
	import './layout.css';
	import Favicon from '$lib/assets/favicon.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" type="image/svg+xml" href={Favicon} />
</svelte:head>

<div class="flex min-h-dvh flex-col justify-between">
	<div class="px-4 pb-4 md:mx-auto md:max-w-225">
		{@render children()}
	</div>
	<footer class="md:px-auto px-4 py-4 text-center text-sm dark:bg-gray-800 dark:text-gray-500">
		&copy; {new Date().getFullYear()} Jesudas Joseph. All rights reserved.
	</footer>
</div>
