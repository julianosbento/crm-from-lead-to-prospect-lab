import axios from 'axios';

export async function get(url: string, errorMessage: string) {
  try {
    const response = await axios.get(url);

    return response.data;
  } catch (error) {
    //@ts-ignore
    console.error(`${errorMessage} ${error.message}`);
  }
}
