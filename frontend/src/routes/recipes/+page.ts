import type { Recipe } from '$lib/ts/datatypes';
import type { PageLoad } from './$types'
import { getAll } from '$lib/ts/database';

export const load: PageLoad = ( async({ params }) => {
  const recipes = await getAll<Recipe>("recipes");

  return {
    post: {
      recipes: recipes,
    }
  }

}) satisfies PageLoad;
