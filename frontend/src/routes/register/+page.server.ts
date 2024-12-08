import axios from "axios";
import { URL } from "$lib/ts/database";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  register: async({ cookies, request }) => {
    const data = await request.formData();
    const name = data.get("name") as string;
    const telephone = data.get("telephone") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    const response = await axios.post(`${URL}/register`, { name, telephone, email, password, });
    if (response.status !== 200) return { success: false, };

    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 1); //after 1 month

    cookies.set("email", email, { expires: expirationDate, path: "/" });

    return {
      success: true,
      email: email,
    };
  },
} satisfies Actions;
