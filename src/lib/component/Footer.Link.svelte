<script lang="ts">
  export let href: string;
</script>

<a
  href={href}
  class="font-body text-lg underline text-black-primary dark:text-white-primary"
>
  <slot/>
</a>
