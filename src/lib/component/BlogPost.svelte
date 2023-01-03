<script lang="ts">
  import { format, parseISO } from "date-fns";

  export let date: string;
  export let href: string;
  export let title: string;
  export let preview: string | null;
  export let author: string;
</script>

<li class="py-10">
  <span class="text-black-primary dark:text-white-primary font-monospace font-medium text-xs opacity-50">
    {format(date ? parseISO(date) : new Date(), "d/M/yyyy")} by {author}
  </span>
  <div class="h-2" />
  <a
    href={href ?? "#"}
    class="text-black-primary dark:text-white-primary"
  >
    <h3>{title}</h3>
  </a>
  <div class="h-6" />
  {#if !!preview}
    <p class="text-black-primary dark:text-white-primary max-w-prose line-clamp-2 leading-8">
      {preview}
    </p>
    <div class="h-6" />
  {/if}
  <a href={href ?? "#"}>
    <div class="inline-flex bg-accent-primary dark:bg-accent-secondary text-white-secondary dark:text-white-primary py-3 px-4 rounded-none font-monospace font-medium text-sm">
      read more
    </div>
  </a>
</li>
