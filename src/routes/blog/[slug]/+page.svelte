<script lang="ts">
	import { format, parseISO } from 'date-fns';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title} - masbossun.dev</title>
	<meta name="description" content={metadata.title ?? "ryan's personal blog"} />

	<meta property="og:url" content={`https://www.masbossun.dev/blog/${metadata.slug}`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${metadata.title} - masbossun.dev`} />
	<meta property="og:description" content={metadata.title ?? "ryan's personal blog"} />
	<meta property="og:image" content="/images/banner_bossun.webp" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${metadata.title} - masbossun.dev`} />
	<meta name="twitter:description" content={metadata.title ?? "ryan's personal blog"} />
	<meta name="twitter:image" content="/images/banner_bossun.webp" />
	<meta property="twitter:domain" content="masbossun.dev" />
	<meta property="twitter:url" content={`https://www.masbossun.dev/blog/${metadata.slug}`} />
</svelte:head>

<h1 class="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
	{metadata.title}
</h1>
<span
	class="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-[.65]"
>
	{format(metadata.date ? parseISO(metadata.date) : new Date(), 'd/M/yyyy')} by{' '}
	{metadata.author}
</span>
<div class="!prose md:!prose-lg dark:!prose-dark max-w-none my-8">
	<svelte:component this={page} />
</div>

<h3 class="text-black-primary dark:text-white-primary my-6 p-6 text-center">***</h3>
<section class="bg-white-secondary dark:bg-black-secondary p-6 -mx-6 md:mx-0 mb-20">
	<p class="text-black-primary dark:text-white-primary font-body">
		If you find any misleading information or issues with grammar, you can help by making
		corrections to the <a href={metadata.git}>github repository</a>.
	</p>
</section>
