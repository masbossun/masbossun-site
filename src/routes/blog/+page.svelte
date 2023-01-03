<script lang="ts">
	import BlogPost from '$lib/component/BlogPost.svelte';
	import type { PageData } from './$types';

	export let data: PageData;

	const { posts } = data;
</script>

<svelte:head>
	<title>blog - masbossun.dev</title>
	<meta name="description" content={'ryan usually write something here'} />

	<meta property="og:url" content={`https://www.masbossun.dev/blog/`} />
	<meta property="og:type" content="website" />
	<meta property="og:title" content={`blog - masbossun.dev`} />
	<meta property="og:description" content={'ryan usually write something here'} />
	<meta property="og:image" content={'/images/banner_bossun.webp'} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`blog - masbossun.dev`} />
	<meta name="twitter:description" content={'ryan usually write something here'} />
	<meta name="twitter:image" content={'/images/banner_bossun.webp'} />
	<meta property="twitter:domain" content="masbossun.dev" />
	<meta property="twitter:url" content={`https://www.masbossun.dev/blog/`} />
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
