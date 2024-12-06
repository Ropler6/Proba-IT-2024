import axios from "axios";

export const PORT = 3000;
export const URL = `http://localhost:${PORT}`;

/* Fetches all data entries from the database for the given path
 * @param route the route from which to fetch entries
 * @returns the data as an array of `T`
 */
export const getAll = async<T>(route: string) => {
  const response = await axios.get(`${URL}/${route}`); 

  if (response.status !== 200) throw new Error(`Could not fetch data from ${route}`);

  return response.data as T[];
}

export const add = async<T>(route: string, data: T) => {
  const response = await axios.post(`${URL}/${route}`,(data));

  if (response.status !== 200) throw new Error(`Could not add data to ${route}`);
}
