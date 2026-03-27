<script lang="ts">
	import { Input, Label, Button, Textarea, Alert } from 'flowbite-svelte';

	let formError: 'captcha' | 'submission' | null = $state('captcha');

	function handleSubmit(event: Event) {
		event.preventDefault();
		const formData = new FormData(event.target as HTMLFormElement);
		fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData
		})
			.then((response) => response.json())
			.then((data) => {
				if (data.success) {
					alert('Form submitted successfully!');
				} else {
					alert('Form submission failed. Please try again.');
				}
			})
			.catch(() => {
				alert('An error occurred while submitting the form. Please try again.');
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

<form onsubmit={handleSubmit} class="m-4 rounded-lg border border-primary-400 p-4">
	<input type="hidden" name="access_key" value="//Add Form Key" />
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
