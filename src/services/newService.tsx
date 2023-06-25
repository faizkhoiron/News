const axios = require("axios");
const API_KEY = "a8c6d852df2e4246b16d9cc002cbbd9e";

export function fetchNews(): any {
  let response = axios
    .get(
      `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`
    )
    .then(async (response: any) => {
      return response;
    })
    .catch((error: any) => {
      console.error(error);
    });
  return response;
}

export async function fetchNewsCategory(category: string): Promise<any> {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?country=&category=${category}&apiKey=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
