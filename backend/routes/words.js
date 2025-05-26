const express = require('express');
const Word = require('../models/Word');
const router = express.Router();
const fetchGif = require("../utils/giphy");

router.get('/', async (req, res) => {
  const words = await Word.find();
  res.json(words);
});


router.get('/:query', async (req, res) => {
  const word = await Word.findOne({ word: req.params.query });
  res.json(word || {});
});


router.post("/", async (req, res) => {
  const { word, definition } = req.body;

  try {
    
    const imageUrl = await fetchGif(word);

    const videoUrl = `https://www.signasl.org/sign/${word.toLowerCase()}`;

    const newWord = new Word({ word, definition, imageUrl, videoUrl });
    await newWord.save();

    res.status(201).json(newWord);
  } catch (error) {
    console.error("Error creating word:", error.message);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;

