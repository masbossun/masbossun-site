<script>
	import { getColorMode, handleToggleColorMode } from '$lib/helper/ColorMode';
	import Socials from './Socials.svelte';

	let colorMode = getColorMode();

	const toggleColorMode = () => {
		handleToggleColorMode();
		if (colorMode === 'dark') {
			colorMode = 'light';
		} else {
			colorMode = 'dark';
		}
	};
</script>

<div class="bg-white-primary dark:bg-black-primary fixed inset-0 z-10">
	<section class="flex flex-col h-screen justify-center px-6">
		<div class="flex flex-1 flex-col justify-center items-start">
			<a
				href="/"
				class="self-stretch focus:outline-none focus:underline text-black-primary dark:text-white-primary py-4"
			>
				<h1>home</h1>
			</a>
			<a
				href="/blog"
				class="self-stretch focus:outline-none focus:underline text-black-primary dark:text-white-primary py-4"
			>
				<h1>blog</h1>
			</a>
			<button
				class="self-stretch text-left text-black-primary dark:text-white-primary py-4"
				on:click={toggleColorMode}
				aria-label="Toggle color mode"
			>
				<h1>
					dark{' '}
					<span class="text-black-primary dark:text-accent-secondary"> on </span>
					/
					<span class="text-accent-primary dark:text-white-primary"> off </span>
				</h1>
			</button>
		</div>

		<div class="p-6">
			<Socials />
		</div>
	</section>
</div>
