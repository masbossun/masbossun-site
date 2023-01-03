<script lang="ts">
	export let isMenuShow: boolean;
	export let onClick: () => void;
</script>

<button
	type="button"
	class="text-black-primary dark:text-white-primary appearance-none absolute -right-2 p-2 rounded-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 z-20"
	on:click={onClick}
	aria-label="Menu"
>
	<svg class="h-6 w-6 fill-current">
		<use xlink:href={`/images/icons.svg${isMenuShow ? '#masbossun_times' : '#masbossun_menu'}`} />
	</svg>
</button>
