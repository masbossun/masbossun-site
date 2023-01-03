<script lang="ts">
	import type { IconNames } from "$lib/types";

  export let width: number;
  export let height: number;
  export let icon: IconNames;
  export let style: string | undefined = undefined;

</script>

<svg class={`fill-current ${$$props.class}`} style={style}>
  <use
    xlink:href={`/images/icons.svg#${icon}`}
    width={width}
    height={height}
  />
</svg>
