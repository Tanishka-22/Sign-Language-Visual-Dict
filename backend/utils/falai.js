const axios = require("axios");

const fetchImage = async (query) => {
  try {
    const response = await axios.post(
      "https://api.fal.ai/v1/pipelines/fal-ai/stable-diffusion-v1-5/image-to-image/run",
      {
        prompt: `A clear, professional illustration of American Sign Language (ASL) hand gesture for the word "${query}". Simple, clean line drawing style with white background. Show hand positions and movement arrows if needed.`,
        image_size: "512x512",
        num_inference_steps: 50,
        guidance_scale: 7.5,
        negative_prompt: "blurry, complex background, multiple hands, text overlay, watermark",
      },
      {
        headers: {
          Authorization: `Key ${process.env.FAL_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.data?.images?.[0]) {
      console.error("No image data in response:", response.data);
      return '';
    }

    return response.data.images[0];
  } catch (error) {
    console.error("Error fetching FAL.AI image:", error.response?.data || error.message);
    return '';
  }
};

module.exports = fetchImage;