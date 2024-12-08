import axios, { AxiosError } from "axios";

export const PORT = 3000;
export const URL = `http://localhost:${PORT}`;

/* Fetches all data entries from the database for the given path
 * @param route the route from which to fetch entries
 * @returns the data as an array of `T`
 */
export const getAll = async<T>(route: string) => {
  try {
    const response = await axios.get(`${URL}/${route}`); 
    return response.data as T[];
  }
  catch (e: AxiosError) {
    console.error(`Error: ${e.status}`);
  }

}

export const add = async<T>(route: string, data: T) => {
  try {
    const response = await axios.post(`${URL}/${route}`, data);
  }
  catch (e: AxiosError) {
    console.error(`Error: ${e.status}`);
  }

}
