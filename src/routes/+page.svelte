<script lang="ts">
	import WorkImage from '$lib/component/WorkImage.svelte';
</script>

<svelte:head>
	<title>masbossun dev</title>
	<meta name="description" content="ryan's personal website" />

	<meta property="og:url" content="https://www.masbossun.dev" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="masbossun dev" />
	<meta property="og:description" content="ryan's personal website" />
	<meta property="og:image" content="/images/banner_bossun.webp" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="masbossun dev" />
	<meta name="twitter:description" content="ryan's personal website" />
	<meta name="twitter:image" content="/images/banner_bossun.webp" />
	<meta property="twitter:domain" content="masbossun.dev" />
	<meta property="twitter:url" content="https://www.masbossun.dev" />
</svelte:head>

<main>
	<h1 class="text-black-primary dark:text-white-primary my-20 md:my-40 max-w-page-title">
		As a software developer, ryan does his works with passion
	</h1>
	<div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
		<WorkImage href="/work/winsen-xyz">
			<img
				src="/images/works/works-winsen.webp"
				alt="winsen"
				srcSet="/images/works/works-winsen.webp, /images/works/works-winsen@2x.webp 2x, /images/works/works-winsen@3x.webp 3x"
				class="h-full"
			/>
		</WorkImage>
		<WorkImage href="/work/rekber-app">
			<img
				src="/images/works/works-rekber.webp"
				alt="rekber"
				srcSet="/images/works/works-rekber.webp, /images/works/works-rekber@2x.webp 2x, /images/works/works-rekber@3x.webp 3x"
				class="h-full"
			/>
		</WorkImage>
		<WorkImage href="/work/waruung-app">
			<img
				src="/images/works/works-waruung.webp"
				alt="bukom-digital"
				srcSet="/images/works/works-waruung.webp, /images/works/works-waruung@2x.webp 2x, /images/works/works-waruung@3x.webp 3x"
				class="h-full"
			/>
		</WorkImage>
		<WorkImage href="/work/hijrah-app">
			<img
				src="/images/works/works-hijrah.webp"
				alt="hijrah"
				srcSet="/images/works/works-hijrah.webp, /images/works/works-hijrah@2x.webp 2x, /images/works/works-hijrah@3x.webp 3x"
				class="h-full"
			/>
		</WorkImage>
	</div>
	<div class="my-20 md:my-40 prose md:prose-lg dark:prose-dark max-w-none">
		<p>
			Ryan is a full-time mobile developer at{' '}
			<a href="https://rukita.co">rukita</a>, where he specializes in frontend development for the
			web and mobile app using{' '}
			<a href="https://reactjs.org">react js</a> and{' '}
			<a href="https://reactnative.dev">react native</a>. He is proficient in these frameworks and
			is also able to learn and work with other technologies as needed.
		</p>
		<p>
			In his spare time, Ryan maintains a <a href="/blog">blog</a> where he writes about various topics
			to keep his skills sharp. He is constantly seeking new opportunities to learn and build new things.
			If you have an interesting project or idea that you&apos;d like to discuss with him, don&apos;t
			hesitate to reach out to him.
		</p>
	</div>
</main>
