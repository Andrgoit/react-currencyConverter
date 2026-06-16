import axios from "axios";
const baseUrl = import.meta.env.VITE_API_URL;

export default async function requestForChart(base, quote, fromDate) {
  try {
    const { data } = await axios.get(
      `${baseUrl}/rates?from=${fromDate}&base=${base}&quotes=${quote}`,
    );

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}
