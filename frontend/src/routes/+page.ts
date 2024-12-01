import type { Recipe } from '$lib/ts/datatypes';
import type { PageLoad } from './$types'
import axios from "axios"

const PORT = 3000;
const URL = `http://localhost:${PORT}`

export const load = (async({ params }) => {
  const response = await axios.get(`${URL}/recipes`)
  if (response.status === 404) {
    //TODO: do something
  }

  return {
    post: {
      recipes: response.data as Recipe,
    }
  }

}) satisfies PageLoad;
