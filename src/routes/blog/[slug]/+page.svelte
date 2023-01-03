<script lang="ts">
	import SEO from '$lib/component/SEO.svelte';
	import { format, parseISO } from 'date-fns';
	import type { PageData } from './$types';

	export let data: PageData;

	const { page, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title} - masbossun.dev</title>
	<SEO
		description={metadata.title ?? "ryan's personal blog"}
		image={'/images/banner_bossun.webp'}
		title={`${metadata.title} - masbossun.dev`}
		url={`https://www.masbossun.dev/blog/${metadata.slug}`}
	/>
</svelte:head>

<h1 class="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
	{metadata.title}
</h1>
<span
	class="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50"
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
		If you find any misleading information or grammar issue, feel free to make corrections <a
			href={metadata.git}>here</a
		>.
	</p>
</section>
