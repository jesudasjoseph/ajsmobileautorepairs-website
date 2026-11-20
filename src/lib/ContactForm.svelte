<script lang="ts">
	import { Input, Label, Button, Textarea, Alert } from 'flowbite-svelte';
	import { env } from '$env/dynamic/public';

	let formError: 'captcha' | 'submission' | null = $state(null);
	let submitted = $state(false);

	function handleSubmit(event: Event) {
		event.preventDefault();
		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const hcaptcha = formData.get('h-captcha-response');

		if (!hcaptcha) {
			formError = 'captcha';
			return;
		}

		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					formError = null;
				} else {
					formError = 'submission';
					console.error(data.message);
				}
			})
			.catch((e) => {
				console.error(e);
				formError = 'submission';
			})
			.finally(() => {
				submitted = true;
				form.reset();
			});
	}
</script>

<svelte:head>
	<script src="https://web3forms.com/client/script.js" async defer></script>
</svelte:head>

{#snippet inputwithlabel(
	label: string,
	name: string,
	type: string = 'text',
	required: boolean = false
)}
	<Label for={name} class="text-base">{label}</Label>
	<Input {name} id={name} {type} {required} class="mb-3" />
{/snippet}

{#if submitted}
	<div class="rounded-lg border border-primary-400 p-4 dark:border-gray-700 dark:bg-gray-800">
		{#if formError === 'submission'}
			<Alert color="red">Error: Please try refreshing the page and submitting again.</Alert>
		{:else}
			<Alert color="green">
				Your request has been sent! I will get back to you as soon as possible.
			</Alert>
		{/if}
	</div>
{:else}
	<form
		onsubmit={handleSubmit}
		class="rounded-lg border border-primary-400 p-4 dark:border-gray-700 dark:bg-gray-800"
	>
		<input type="hidden" name="access_key" value={env.PUBLIC_WEB3FORMS_ACCESS_KEY} />
		<div>
			<Label for="description" class="mb-2 text-xl font-bold">What can I help you with?</Label>
			<Textarea name="description" id="description" required class="mb-8 min-h-30 w-full" />
			<div class="mb-6 flex w-full flex-col gap-4 md:flex-row md:gap-8">
				<fieldset class="grow">
					<legend class="mb-4 text-xl font-bold">Vehicle</legend>
					{@render inputwithlabel('Year', 'year', 'text', true)}
					{@render inputwithlabel('Make', 'make', 'text', true)}
					{@render inputwithlabel('Model', 'model', 'text', true)}
					{@render inputwithlabel('Mileage (Optional)', 'mileage', 'text')}
					{@render inputwithlabel('Engine Size (Optional)', 'engine', 'text')}
				</fieldset>
				<fieldset class="grow">
					<legend class="mb-4 text-xl font-bold">Contact</legend>
					{@render inputwithlabel('Name', 'name', 'text', true)}
					{@render inputwithlabel('Phone', 'phone', 'tel', true)}
					{@render inputwithlabel('Email (Optional)', 'email', 'email')}
					{@render inputwithlabel('Urgency (Optional)', 'urgency', 'text')}
				</fieldset>
			</div>
		</div>

		<div class="mb-2 flex flex-col items-center gap-2">
			{#if formError === 'captcha'}
				<Alert class="grow" color="red">Please complete the captcha</Alert>
			{/if}
			<div class="h-captcha" data-captcha="true"></div>
		</div>
		<Button type="submit" class="cursor-pointer">Send Request</Button>
	</form>
{/if}
