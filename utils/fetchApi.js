import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      "X-RapidAPI-Key": "3cf45f1f5amsh0f536ce6233e89bp123a65jsn244b9abab5fa",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });

  return data;
};
