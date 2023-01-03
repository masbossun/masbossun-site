<script lang="ts">
  import NavLink from "./Navbar.NavLink.svelte";
  import Icon from "./Icon.svelte";
  import { getColorMode, handleToggleColorMode } from "$lib/helper/ColorMode";
	import type { IconNames } from "$lib/types";

  let colorMode = getColorMode();

  const toggleColorMode = () => {
    handleToggleColorMode();
    if (colorMode === "dark") {
      colorMode = "light";
    }else{
      colorMode = "dark";
    }
  };

  const getIconByMode = (mode: string): IconNames => {
    if (mode === "light") return "sun";
    if (mode === "dark") return "moon";
    return "moon";
  }

  $: icon = getIconByMode(colorMode)

</script>

<div class="flex items-center">
  <NavLink href="/blog" class="mr-2">
    blog
  </NavLink>
  <button
    class="text-black-primary transition ease-out hover:bg-accent-primary p-2 rounded-none hover:text-white-primary dark:hover:bg-accent-secondary dark:text-white-primary dark:hover:text-black-primary"
    on:click={toggleColorMode}
    aria-label="Toggle color mode"
  >
    <Icon
      icon={icon}
      height={20}
      width={20}
      class="h-5 w-5"
      style="margin: 2.5px"
    />
  </button>
</div>
