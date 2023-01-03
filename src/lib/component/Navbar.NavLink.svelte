<script lang="ts">
	import { page } from '$app/stores';

	export let href: string;
</script>

<a
	{href}
	class={`py-2 px-4 transition ease-out hover:bg-accent-primary text-black-primary hover:text-white-primary dark:hover:bg-accent-secondary dark:text-white-primary dark:hover:text-black-primary ${
		$page.url.pathname.includes(href) ? 'underline' : ''
	} ${$$props.class}`}
>
	<span class="font-monospace font-medium text-base"><slot /></span>
</a>
