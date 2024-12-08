import axios from "axios";
import { URL } from "$lib/ts/database";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  register: async({ cookies, request }) => {
    const data = await request.formData();
    const username = data.get("username") as string;
    const password = data.get("password") as string;

    const response = await axios.post(`${URL}/register`, { username, password, });
    if (response.status !== 200) return { success: false, };

    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1); //after 1 month
    cookies.set("username", username, { expires: expirationDate, path: "/" });

    return {
      success: true,
      username: username,
    };
  },
} satisfies Actions;
