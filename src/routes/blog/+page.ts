import type { MDFile } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async () => {
  const mdModules = import.meta.glob('$lib/posts/*.md');
  const posts = await Promise.all(
    Object.keys(mdModules).map(async (path) => {
      const file = await mdModules[path]() as MDFile;
      console.log({file});
      const { author, date, preview, slug, title } = file.metadata;
      return { author, date, preview, slug, title };
    }),
  )
  return {
    posts:
      posts.sort((post1, post2) => post1?.date > post2?.date ? -1 : 1)
  };
}) satisfies PageLoad;
