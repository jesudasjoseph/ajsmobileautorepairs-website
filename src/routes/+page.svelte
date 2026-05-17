<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { Button, Hr } from 'flowbite-svelte';
</script>

<h1 class="mb-4 text-3xl font-bold">AJ's Mobile Auto Repairs</h1>

<div class="relative mb-4 overflow-hidden rounded-xl">
	<img
		src="/assets/images/cover-01.jpg"
		alt="Engine work being done on a red car, using a hoist from AJ's truck."
		class="h-100 w-full object-cover object-bottom"
	/>
	<div class="absolute bottom-0 bg-gray-800/90 p-4 text-white">
		<p class="mb-4">
			Are you in or around Corvallis, OR? Do you have car troubles? Fill out the form below and I
			can come right to you and make your car troubles go away! Everything from oil changes to
			engine repairs!
		</p>

		<Button href="#request">Request Services Now</Button>
	</div>
</div>

<Hr />

<h2 class="mb-4 text-xl font-bold" id="pricing">Pricing</h2>

<p class="mb-2">
	Minimum service call fee is <strong>$50</strong>. I can travel up to 5 miles for free, and then I
	will charge a <strong>$1.5/mile</strong> after that.
</p>

<p class="mb-4">
	Parts are not included in the service call fee and will be charged separately. I will provide you
	with an estimate for parts and labor before starting any work.
</p>

<p class="mb-4">
	Most services are calculated using the OEM flat labor time guide. Here are some examples:
</p>

<ul class="mb-4 list-inside list-disc *:mb-4">
	<li>
		<strong>Inspection</strong><br />$75 labor
	</li>
	<li>
		<strong>Oil Change</strong><br /> $37.5 labor (+ oil and filter costs)
	</li>
	<li>
		<strong>Brake Pad & Rotor Replacement</strong><br />$75 labor (+ parts costs)
	</li>
</ul>

<Hr />

<h2 class="mb-4 text-xl font-bold" id="request">Request Services</h2>

<ContactForm />
