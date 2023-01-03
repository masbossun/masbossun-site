<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title} - masbossun.dev</title>
	<meta name="description" content="the work that ryan has been doing lately" />

	<meta property="og:url" content={`https://www.masbossun.dev/work/${metadata.slug}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${metadata.title} - masbossun.dev`} />
	<meta property="og:description" content="the work that ryan has been doing lately" />
	<meta property="og:image" content="/images/banner_bossun.webp" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${metadata.title} - masbossun.dev`} />
	<meta name="twitter:description" content="the work that ryan has been doing lately" />
	<meta name="twitter:image" content="/images/banner_bossun.webp" />
	<meta property="twitter:domain" content="masbossun.dev" />
	<meta property="twitter:url" content={`https://www.masbossun.dev/work/${metadata.slug}`} />
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
