import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

export default async function convertRequest(base, quote) {
  try {
    const { data } = await axios.get(`${baseUrl}/rate/${base}/${quote}`);

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
