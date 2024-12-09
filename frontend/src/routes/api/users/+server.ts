import { json, type RequestHandler } from "@sveltejs/kit";
import axios, { AxiosError } from "axios";

export const PORT = 3000;
export const URL = `http://localhost:${PORT}`;

export const GET: RequestHandler = async({ cookies }) => {
  const email = cookies.get("email");

  try {
    const user = await axios.get(`/users/${email}`);
    return json(user);
  }
  catch (e: AxiosError) {
    console.error(`Error ${e.status}: ${e.response.data}`);
    return json(null);
  }
}

