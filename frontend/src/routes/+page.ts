import type { PageLoad } from './$types'
import axios from "axios"

const PORT = 3000;
const URL = `http://localhost:${PORT}`

export const load = (async({ params }) => {
  const response = await axios.get(`${URL}/`)
  if (response.status === 404) {
    //TODO: do something
  }

  sessionStorage.setItem("recipes", JSON.stringify(response.data));

  return {
    post: {
      recipes: response.data,
    }
  }

}) satisfies PageLoad;
