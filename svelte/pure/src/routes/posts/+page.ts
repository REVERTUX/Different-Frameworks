import type { PageLoad } from './$types';

export interface PostI {
  userId: string,
  id: string,
  title: string,
  body: string
}

export const load = (async ({ fetch }) => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const items = await res.json() as PostI[];

  return { items }
}) satisfies PageLoad