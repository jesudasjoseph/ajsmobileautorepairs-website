<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="relative min-h-dvh p-4 md:m-auto md:max-w-225">
	{@render children()}
	<footer class="absolute right-0 bottom-0 left-0 p-4 text-center text-sm text-gray-500">
		&copy; {new Date().getFullYear()} Jesudas Joseph. All rights reserved.
	</footer>
</div>
