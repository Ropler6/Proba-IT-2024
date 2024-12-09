import type { RequestHandler } from "@sveltejs/kit";
import { json } from "@sveltejs/kit";

//TODO: find a less hacky alternative
export const GET: RequestHandler = async({ cookies }) => {
  return json(cookies.get("email") || null);
}

export const DELETE: RequestHandler = async({ cookies }) => {
  cookies.delete("email", { path: "/" });
}
