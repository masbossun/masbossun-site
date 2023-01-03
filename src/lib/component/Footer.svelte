<script lang="ts">
	import Link from './Footer.Link.svelte';
</script>

<div class="h-0.5 w-full bg-white-secondary dark:bg-black-secondary" />
<footer class="py-12">
	<div class="grid grid-cols-2 md:grid-cols-3 gap-6">
		<div class="flex flex-col">
			<div class="py-4">
				<span
					class="font-monospace text-xs text-black-primary dark:text-white-primary opacity-[.65]"
				>
					Contacts
				</span>
			</div>
			<Link href="mailto:setiagi.ryan@gmail.com">email</Link>
			<Link href="https://linkedin.com/in/ryan-setiagi">linkedin</Link>
		</div>
		<div class="flex flex-col">
			<div class="py-4">
				<span
					class="font-monospace text-xs text-black-primary dark:text-white-primary opacity-[.65]"
				>
					Socials
				</span>
			</div>
			<Link href="https://twitter.com/masbossun">twitter</Link>
			<Link href="https://instagram.com/masbossun">instagram</Link>
		</div>
		<div class="flex flex-col">
			<div class="py-4">
				<span
					class="font-monospace text-xs text-black-primary dark:text-white-primary opacity-[.65]"
				>
					Others
				</span>
			</div>
			<Link href="https://github.com/masbossun">github</Link>
			<Link href="https://stackoverflow.com/cv/masbossun">stackoverflow</Link>
			<Link href="https://dribbble.com/masbossun">dribbble</Link>
		</div>
	</div>

	<div class="h-24" />
	<span
		class="flex flex-1 text-black-primary dark:text-white-primary font-monospace text-xs text-center"
	>
		proudly made by ryan
	</span>
</footer>
