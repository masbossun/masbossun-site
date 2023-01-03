import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
  const { slug } = params;
  const mdModule = import(`../../../lib/works/${slug}.md`);
  const { default: page, metadata: { title, category } } = await mdModule;

  return {
    metadata: { title, slug, category },
    page,
  };
}) satisfies PageLoad;
