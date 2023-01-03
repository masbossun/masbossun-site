<script lang="ts">
	import { onDestroy } from "svelte";
  import { page } from "$app/stores";
  import NavLogo from "./Navbar.NavLogo.svelte";
  import NavLinks from "./Navbar.NavLinks.svelte";
  import NavMenuButton from "./Navbar.NavMenuButton.svelte";
  import NavMenu from "./Navbar.NavMenu.svelte";

  let size: number;
  let isMenuShow = false;

  const onClick = () => {
    isMenuShow = !isMenuShow;
  }

  const unsubscribe = page.subscribe(() => {
    isMenuShow = false;
  });

  onDestroy(unsubscribe);
</script>


<svelte:window bind:innerWidth={size}/>

<nav class="flex flex-row items-center justify-between py-4 relative">
  <NavLogo />
  {#if size}
    {#if size >= 640}
      <NavLinks />
    {:else}
      <NavMenuButton
        onClick={onClick}
        isMenuShow={isMenuShow}
      />
    {/if}
  {/if}

  {#if isMenuShow}
    <NavMenu/>
  {/if}
</nav>

