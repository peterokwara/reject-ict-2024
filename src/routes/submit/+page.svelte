<script lang="ts">
	import toast, { Toaster } from 'svelte-french-toast';

	let formData = {
		name: '',
		comments: [{ sectionOfBill: '', proposal: '', justification: '' }]
	};

	let generatedTemplate = '';
	let showTemplate = false;

	function addComment() {
		formData.comments = [
			...formData.comments,
			{ sectionOfBill: '', proposal: '', justification: '' }
		];
	}

	function removeComment(index: number) {
		formData.comments = formData.comments.filter((_, i) => i !== index);
	}

	function generateTemplate() {
		let template = `NAME OF ORGANISATION/OR INDIVIDUAL PERSON: ${formData.name}\n\n`;
		formData.comments.forEach((comment, index) => {
			template += `Comment ${index + 1}:\n`;
			template += `Section of Bill: ${comment.sectionOfBill}\n`;
			template += `Proposal: ${comment.proposal}\n`;
			template += `Justification: ${comment.justification}\n\n`;
		});
		generatedTemplate = template;
		showTemplate = true;
	}

	function copyToClipboard() {
		navigator.clipboard.writeText(generatedTemplate);
		toast.success('Template copied to clipboard!');
	}
</script>

<Toaster />
<div class="max-w-2xl p-4 mx-auto">
	<h1 class="mb-4 text-2xl font-bold">Submit Comments for ICT Authority Bill, 2024</h1>

	<div class="mb-4">
		<label for="name" class="block mb-2">Name of Organisation/Individual Person</label>
		<input id="name" bind:value={formData.name} required class="w-full input input-bordered" />
	</div>

	<div class="mb-6">
		<h2 class="mb-2 text-lg font-semibold">Helpful Resources</h2>
		<p class="mb-2">Not sure where to start? Here are some resources to help you:</p>
		<div class="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3">
			<a
				href="https://chatgpt.com/g/g-onRXZwI9D-ict-authority-bill-2024-gpt"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full text-white btn btn-secondary"
			>
				Chat with bill (1)
			</a>
			<a
				href="https://chatgpt.com/g/g-eLeBzwkRa-proposed-ict-bill-paralegal"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full text-white btn btn-secondary"
			>
				Chat with bill (2)
			</a>
			<a
				href="https://docs.google.com/document/d/e/2PACX-1vSl7n1Fp934pS1EpMBQkETb3HiBFpLg2Lyaja6z8PEsviVin0qgxM8lT47KXYowqYpFeEHfXo6N6EMH/pub"
				target="_blank"
				rel="noopener noreferrer"
				class="w-full text-white btn btn-secondary"
			>
				Email Template
			</a>
		</div>
		<p class="mt-2 text-sm text-gray-600">
			The email template provides a structured format for your comments. You can use it as a guide
			when filling out the form below.
		</p>
	</div>

	{#each formData.comments as comment, index}
		<div class="p-4 mb-4 border rounded">
			<h2 class="mb-2 text-lg font-semibold">Comment {index + 1}</h2>

			<div class="mb-2">
				<label for={`section${index}`} class="block mb-1 label">Section of Bill</label>
				<input
					class="w-full input input-bordered"
					id={`section${index}`}
					bind:value={comment.sectionOfBill}
					required
				/>
			</div>

			<div class="mb-2">
				<label for={`proposal${index}`} class="block mb-1 label">Proposal</label>
				<textarea
					class="w-full textarea textarea-bordered"
					id={`proposal${index}`}
					bind:value={comment.proposal}
					required
				/>
			</div>

			<div class="mb-2">
				<label for={`justification${index}`} class="block mb-1 label">Justification</label>
				<textarea
					id={`justification${index}`}
					bind:value={comment.justification}
					required
					class="w-full textarea textarea-bordered"
				/>
			</div>

			{#if index > 0}
				<button on:click={() => removeComment(index)} class="mt-2 text-white btn btn-sm btn-error"
					>Remove Comment</button
				>
			{/if}
		</div>
	{/each}

	<button on:click={addComment} class="mb-4 text-white btn btn-primary">Add Another Comment</button>
	<button on:click={generateTemplate} class="mb-4 ml-2 text-white btn btn-secondary"
		>Generate Submission Template</button
	>

	{#if showTemplate}
		<div class="mt-4">
			<h2 class="mb-2 text-xl font-bold">Generated Template</h2>
			<textarea
				bind:value={generatedTemplate}
				readonly
				class="w-full h-64 mb-2 textarea textarea-bordered"
			/>
			<button on:click={copyToClipboard} class="btn btn-primary">Copy to Clipboard</button>

			<div class="mt-4">
				<p>
					Please submit your comments by email to:
					<br />
					<strong>ictabill@icta.go.ke</strong>
					<br />
					CC: <strong>legal@moict.go.ke</strong>
					<br />
					Or mail to:
					<br />
					Chief Executive Officer
					<br />
					ICT Authority
					<br />
					12th Floor TelPosta Towers
					<br />
					P.O. Box 27150-00200 Nairobi, Kenya
				</p>
			</div>
		</div>
	{/if}
</div>
