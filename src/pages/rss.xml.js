import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = (await getCollection('posts'))
    .filter((p) => !p.data.draft)
    .sort((a, b) => (b.data.date?.valueOf() ?? 0) - (a.data.date?.valueOf() ?? 0));

  return rss({
    title: 'Employable PM',
    description: 'Hands-on guides for product managers: AI workflows, coding agents, and building real things.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date ?? new Date(),
      description: post.data.excerpt ?? post.data.meta_description ?? '',
      link: `/posts/${post.id.replace(/\.md$/, '')}/`,
    })),
  });
}
