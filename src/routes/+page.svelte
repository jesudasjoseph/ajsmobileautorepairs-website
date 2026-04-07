<script>
	import ContactForm from '$lib/ContactForm.svelte';
	import { Button, Card, Hr } from 'flowbite-svelte';
</script>

<h1 class="mb-4 text-3xl font-bold">AJ's Mobile Auto Repairs</h1>

<p class="mb-4">
	Are you in or around Corvallis, OR? Do you have car troubles? Fill out the form below and I can
	come right to you and fix it!
</p>

<Hr />

<h2 class="mb-4 text-xl font-bold" id="services">Services</h2>

<section class="grid grid-cols-1 gap-4 *:max-w-full sm:grid-cols-2 lg:grid-cols-3">
	<Card class="sm:col-span-full"></Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
	<Card>
		<a href="#request">
			<img
				class="rounded-t-lg"
				src="https://images.unsplash.com/photo-1613214150384-14921ff659b2?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="Brake disk on a car"
			/>
		</a>
		<div class="flex items-center justify-between p-5">
			<a href="#request">
				<h3 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Brakes</h3>
			</a>
			<Button href="#request">Request Service</Button>
		</div>
	</Card>
</section>

<Hr />

<h2 class="mb-4 text-xl font-bold" id="request">Request Services</h2>

<ContactForm />
