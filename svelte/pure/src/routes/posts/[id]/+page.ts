import type { PostI } from '../+page';
import type { PageLoad } from './$types';

export interface UserI {
  id: string,
  name: string,
  username: string,
  emal: string,
};

export const load = (async ({ fetch, params }) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
  const item = await res.json() as PostI;

  return item
}) satisfies PageLoad