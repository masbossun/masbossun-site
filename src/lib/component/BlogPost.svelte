<script lang="ts">
	import { format, parseISO } from 'date-fns';

	export let date: string;
	export let href: string;
	export let title: string;
	export let preview: string | null;
	export let author: string;
	export let withBottomSeparator: boolean;
</script>

<li>
	<div class="py-10">
		<span
			class="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-[.65]"
		>
			{format(date ? parseISO(date) : new Date(), 'd/M/yyyy')} by {author}
		</span>
		<div class="h-2" />
		<a href={href ?? '#'} class="text-black-primary dark:text-white-primary">
			<h2 class="h3">{title}</h2>
		</a>
		<div class="h-6" />
		{#if !!preview}
			<p class="text-black-primary dark:text-white-primary max-w-prose line-clamp-2 leading-8">
				{preview}
			</p>
			<div class="h-6" />
		{/if}
		<a href={href ?? '#'}>
			<div
				class="inline-flex bg-accent-primary dark:bg-accent-secondary text-white-primary dark:text-black-primary py-3 px-4 rounded-none font-monospace font-medium text-sm"
			>
				continue reading
			</div>
		</a>
	</div>
	{#if withBottomSeparator}
		<div class="h-0.5 w-full bg-white-secondary dark:bg-black-secondary" />
	{/if}
</li>
