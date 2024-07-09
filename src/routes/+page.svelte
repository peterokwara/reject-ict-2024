<script lang="ts">
	import Hero from '$lib/home/hero.svelte';
	import Imagine from '$lib/home/imagine.svelte';
	import Reality from '$lib/home/reality.svelte';
	import Testimonials from '$lib/home/testimonials.svelte';
	import Cta from '$lib/home/cta.svelte';

	const title = 'Reject The ICT Bill 2024';
	const description = 'Keep Technology Open for Everyone';
	const ogImage = 'https://reject-robotics-ai.vercel.app/images/open-graph/website.png';
	const url = 'https://reject-robotics-ai.vercel.app';
</script>

<svelte:head>
	<!-- Titles -->
	<title>{title}</title>
	<meta property="og:title" content={title} />
	<meta name="twitter:title" content={title} />
	<!-- Description -->
	<meta name="description" content={description} />
	<meta property="og:description" content={description} />
	<meta name="twitter:description" content={description} />
	<!-- Image -->
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1024" />
	<meta property="og:image:height" content="575" />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:card" content="summary_large_image" />
	<!-- URL -->
	<meta property="og:url" content={url} />
	<!-- Type -->
	<meta property="og:type" content="website" />
</svelte:head>

<Hero />
<Imagine />
<Reality />
<Testimonials />
<Cta />
