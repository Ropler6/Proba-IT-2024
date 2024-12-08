import axios, { AxiosError } from "axios";
import { URL } from "$lib/ts/database";
import type { Actions } from "@sveltejs/kit";

export const actions = {
  login: async({ cookies, request }) => {
    const data = await request.formData();
    const email = data.get("email") as string;
    const password = data.get("password") as string;

    try {
      const response = await axios.post(`${URL}/user/login`, { email, password, });
      const expirationDate = new Date();
      expirationDate.setMonth(expirationDate.getMonth() + 1); //after 1 month

      cookies.set("email", email, { expires: expirationDate, path: "/" });

      return { success: true, };
    }
    catch (e: AxiosError) {
      console.error(`Error: ${e.status}`);
      return { success: false, };
    }
  },
} satisfies Actions;
