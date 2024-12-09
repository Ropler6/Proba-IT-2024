import type { Recipe } from '$lib/ts/datatypes';
import type { PageLoad } from './$types'
import { getAll } from '$lib/ts/database';

export const load = ( async({ params }) => {
  const recipes = await getAll<Recipe>("recipes") || [];
  const topRated = recipes.sort((a, b) => b.rating - a.rating).slice(0, 2);

  return {
    post: {
      recipes: topRated,
    }
  }

}) satisfies PageLoad;
