const axios = require("axios");

const fetchGif = async (query) => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: process.env.GIPHY_API_KEY,
        q: `sign language ${query}`,
        limit: 1
      }
    });

    const gif = response.data.data[0];
    return gif ? gif.images.original.url : '';
  } catch (error) {
    console.error("Error fetching Giphy image:", error.message);
    return '';
  }
};

module.exports = fetchGif;
