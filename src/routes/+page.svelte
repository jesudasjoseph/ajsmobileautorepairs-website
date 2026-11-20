<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { Button, Hr } from 'flowbite-svelte';
	import Banner from '$lib/assets/banner.png';

	//const services = ['Oil Changes', 'Tune Ups', 'Inspections'];
</script>

<svelte:head></svelte:head>
<h1 class="bg-gray-900 py-4 text-center text-3xl font-bold md:text-6xl">
	AJ's Mobile Auto Repairs
</h1>
<div class="relative mb-4 overflow-hidden rounded-xl">
	<img
		src={Banner}
		alt="Engine work being done on a red car, using a hoist from AJ's truck."
		class=" object-cover object-bottom"
	/>
</div>

<p class="mb-2 text-xl">
	Do you have car troubles? Does your car make strange noises? Is it stuck in your driveway?
</p>
<p class="mb-4 text-xl">
	I can help! I do everything from oil changes to engine diagnostics & repairs!
</p>

<p class="mb-4 text-xl">And I can come right to you!</p>

<Button href="#request" class="text-lg">Contact Me</Button>
<Hr />
<h2 class="mb-6 text-xl font-bold md:text-3xl">Service Area</h2>
<iframe
	class="rounded-xl"
	title="Service Area"
	src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105042.56178085312!2d-123.29701974489292!3d44.5930747518893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6defcedf22000f47%3A0xc75722c81dc0881f!2sAJ's%20Mobile%20Auto%20Repairs%20LLC!5e0!3m2!1sen!2sus!4v1795161359125!5m2!1sen!2sus"
	width="100%"
	height="450"
	style="border:0;"
	loading="lazy"
	referrerpolicy="strict-origin-when-cross-origin"
></iframe>

<!-- <Hr />

<p class="mb-2 flex flex-wrap justify-between text-5xl">
	{#each services as service, index (service)}
		<span>
			{service}
		</span>
		{#if index != services.length - 1}<span class="sm:hidden">&#x2022;</span>{/if}
	{/each}
</p> -->

<Hr />

<h2 class="mb-6 text-xl font-bold md:text-3xl" id="pricing">Pricing</h2>

<p class="mb-2 text-xl">
	Minimum service fee is <strong>$75</strong>.
</p>
<p class="mb-6 text-xl">
	Fuel fee <strong>$2.5/mile</strong>.
</p>

<p class="mb-2 text-xl">An estimate will be provided before any work is performed.</p>

<Hr />

<h2 class="mb-4 text-xl font-bold md:text-3xl" id="request">Request Services</h2>

<ContactForm />
