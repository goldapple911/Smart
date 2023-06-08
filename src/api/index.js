import axios from "axios";

const weatherOptions = {
  method: "GET",
  url: "https://weatherapi-com.p.rapidapi.com/current.json",
  params: { q: "22.3, 114.1" },
  headers: {
    "X-RapidAPI-Key": "cf1d6bd258msh581225dc1a5493fp11399bjsn09a7b76afe60",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

export const getCurrentWeatherData = async () => {
  try {
    const response = await axios.request(weatherOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

const teletubbyOptions = {
  method: "GET",
  url: "/teletubbies.json",
};

export const getCurrenTeletubbyData = async () => {
  try {
    const response = await axios.request(teletubbyOptions);
    return response;
  } catch (error) {
    throw error;
  }
};

const NFTOptions = {
  method: "GET",
  url: "https://api-mainnet.magiceden.io/idxv2/getListedNftsByCollectionSymbol?collectionSymbol=okay_bears&limit=20&offset=",
};

export const getNFTList = async (offset) => {
  try {
    const response = await axios.request({
      ...NFTOptions,
      url: NFTOptions.url + offset.toString(),
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

const buildingOptions = {
  method: "GET",
  url: "/buildings.json",
};

export const getCurrentBuildingsData = async () => {
  try {
    const response = await axios.request(buildingOptions);
    return response;
  } catch (error) {
    throw error;
  }
};
