import axios from "axios";
import GiphyResponse from "../models/GiphyResponse";

const key: string | undefined = process.env.REACT_APP_GIPHY_KEY;

// function for trending
export const getTrendingGifs = (): Promise<GiphyResponse> => {
  return axios
    .get(`https://api.giphy.com/v1/gifs/trending`, {
      params: {
        api_key: key,
      },
    })
    .then((response) => response.data);
};

// function for searchterm
export const getSearchedGifs = (searchTerm: string): Promise<GiphyResponse> => {
  return axios
    .get("https://api.giphy.com/v1/gifs/search", {
      params: {
        q: searchTerm,
        api_key: key,
      },
    })
    .then((response) => {
      return response.data;
    });
};
