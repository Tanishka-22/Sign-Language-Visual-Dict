const axios = require("axios");

const fetchImage = async (query) => {
  try {
    const response = await axios.post(
      "https://api.fal.ai/v1/pipelines/fal-ai/flux-dev/run",
      {
        prompt: `Sign language representation of the word: ${query}`,
      },
      {
        headers: {
          Authorization: `Key ${process.env.FAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data?.image?.url || '';
  } catch (error) {
    console.error("Error fetching FAL.AI image:", error.message);
    return '';
  }
};

module.exports = fetchImage;