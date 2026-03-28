<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>

<div class="min-h-dvh dark p-4 dark:bg-gray-900 dark:text-white">
	{@render children()}
</div>
