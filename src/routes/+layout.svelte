<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import Navbar from '$lib/component/Navbar.svelte';
	import Footer from '$lib/component/Footer.svelte';
	import { initiate } from '$lib/helper/ColorMode';

	let mounted = false;

	onMount(() => {
		initiate();
		mounted = true;
	});
</script>

{#if mounted}
	<header>
		<Navbar />
	</header>
	<slot />
	<Footer />
{/if}
