<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>

<div class="flex min-h-dvh flex-col justify-between">
	<div class="p-4 md:mx-auto md:max-w-225">
		{@render children()}
	</div>
	<footer class="md:px-auto px-4 py-4 text-center text-sm dark:bg-gray-800 dark:text-gray-500">
		&copy; {new Date().getFullYear()} Jesudas Joseph. All rights reserved.
	</footer>
</div>
