const axios = require("axios");

const fetchVideo = async (query) => {
  try {
    const response = await axios.get("https://api.giphy.com/v1/gifs/search", {
      params: {
        api_key: process.env.GIPHY_API_KEY,
        q: `ASL sign language ${query}`,
        limit: 1,
        rating: 'g',
        lang: 'en'
      }
    });

    const gif = response.data.data[0];
    if (!gif) {
      return `https://www.signasl.org/sign/${query.toLowerCase()}`;
    }
    return gif.images.original.url;
  } catch (error) {
    console.error("Error fetching Giphy image:", error.message);
    return `https://www.signasl.org/sign/${query.toLowerCase()}`;
  }
};

module.exports = fetchVideo;
