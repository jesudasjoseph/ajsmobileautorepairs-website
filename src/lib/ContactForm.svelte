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
	<Label for={name}>{label}</Label>
	<Input {name} id={name} {type} {required} class="mb-2" />
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
		<h2 class="mb-4 text-xl font-bold">Request Services</h2>
		<input type="hidden" name="access_key" value={env.PUBLIC_WEB3FORMS_ACCESS_KEY} />
		<div>
			<div class="flex w-full flex-col gap-4 md:flex-row">
				<fieldset class="grow">
					<legend class="mb-2 font-bold">Contact Info</legend>
					{@render inputwithlabel('Name', 'name', 'text', true)}
					{@render inputwithlabel('Phone', 'phone', 'tel', true)}
					{@render inputwithlabel('Email (Optional)', 'email', 'email')}
				</fieldset>
				<fieldset class="grow">
					<legend class="mb-2 font-bold">Car Info</legend>
					{@render inputwithlabel('Make (Optional)', 'make', 'text')}
					{@render inputwithlabel('Model (Optional)', 'model', 'text')}
					{@render inputwithlabel('Year (Optional)', 'year', 'text')}
				</fieldset>
			</div>
			<Label for="description">What can I help you with?</Label>
			<Textarea name="description" id="description" required class="mb-2 min-h-30 w-full" />
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
