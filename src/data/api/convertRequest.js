import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

export default async function convertRequest(convertFrom, convertTo) {
  try {
    const { date } = await axios.get(`${baseUrl}/${convertFrom}/${convertTo}`);
    return date;
  } catch (error) {
    throw new Error(error.message);
  }
}
