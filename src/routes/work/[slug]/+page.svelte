<script lang="ts">
	import SEO from '$lib/component/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title} - masbossun.dev</title>
	<SEO
		description="the work that ryan has been doing lately"
		image={'/images/banner_bossun.webp'}
		title={`${metadata.title} - masbossun.dev`}
		url={`https://www.masbossun.dev/work/${metadata.slug}`}
	/>
</svelte:head>

<h1 class="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
	{metadata.title}
</h1>
<span
	class="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-[.65]"
>
	{metadata?.category}
</span>
<div class="prose md:prose-lg dark:prose-dark max-w-none my-8">
	<svelte:component this={page} />
</div>
