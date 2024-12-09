import axios, { AxiosError } from "axios";
import { URL } from "$lib/ts/database";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  register: async({ cookies, request }) => {
    const data = await request.formData();
    const name = data.get("name") as string;
    const telephone = data.get("telephone") as string;
    const email = data.get("email") as string;
    const password = data.get("password") as string;
    const password2 = data.get("password2") as string;

    if (password !== password2) return { success: false, };

    try {
      const response = await axios.post(`${URL}/user/register`, { name, telephone, email, password, });
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1); //after 1 month

      cookies.set("email", email, { expires: expirationDate, path: "/" });

      return { success: true, };
    }
    catch (e: AxiosError) {
      console.error(`Error ${e.status}: ${e.response.data}`);
      return { success: false, };
    }
  },
} satisfies Actions;
