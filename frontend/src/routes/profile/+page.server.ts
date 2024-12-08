import type { PageServerLoad } from './$types'
import { get } from '$lib/ts/database';
import type { User } from '$lib/ts/datatypes'

export const load: PageServerLoad = ( async({ cookies }) => {
  const email = cookies.get("email");
  const userData = await get<User>(`user/${email}`);

  return {
    userData,
  }

});
