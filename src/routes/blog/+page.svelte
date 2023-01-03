<script lang="ts">
	import BlogPost from '$lib/component/BlogPost.svelte';
	import SEO from '$lib/component/SEO.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts } = data;
</script>

<svelte:head>
	<title>blog - masbossun.dev</title>
	<SEO
		description="ryan usually write something here"
		image={'/images/banner_bossun.webp'}
		title={`blog - masbossun.dev`}
		url={`https://www.masbossun.dev/blog/`}
	/>
</svelte:head>

<main>
	<h1 class="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
		Ryan usually wrote something here, blog, article, etc, you name it
	</h1>
	<ol>
		{#each posts as S, I}
			<BlogPost
				title={S?.title}
				author={S?.author}
				date={S?.date}
				href={`/blog/${S?.slug}`}
				preview={S?.preview}
				withBottomSeparator={I !== posts.length - 1}
			/>
		{/each}
	</ol>
</main>
<div class="h-24" />
