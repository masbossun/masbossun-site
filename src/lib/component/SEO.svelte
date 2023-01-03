<script lang="ts">
  export let description: string;
  export let url: string;
  export let title: string;
  export let image: string;
</script>

<meta name="description" content={description} />

<meta property="og:url" content={url} />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
<meta property="twitter:domain" content="masbossun.dev" />
<meta property="twitter:url" content={url} />
