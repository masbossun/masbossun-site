import type { PageLoad } from './$types';

export const load = (async ({ params }) => {
	const { slug } = params;
	const mdModule = import(`../../../lib/posts/${slug}.md`);
	const {
		default: page,
		metadata: { author, date, title, git }
	} = await mdModule;

	return {
		metadata: { author, date, slug, title, git },
		page
	};
}) satisfies PageLoad;
