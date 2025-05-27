const express = require('express');
const Word = require('../models/Word');
const router = express.Router();
const fetchVideo = require("../utils/giphy");
const fetchImage = require("../utils/falai");

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

  if (!word || !definition) {
    return res.status(400).json({ error: "Word and definition are required" });
  }

  try {
    
    const imageUrl = await fetchImage(word);
  
    const videoUrl = await fetchVideo(word);

    const newWord = new Word({ word, definition, imageUrl, videoUrl });
    await newWord.save();

    res.status(201).json(newWord);
  } catch (error) {
    console.error("Error creating word:", error);
    res.status(500).json({ error: error.message || "Server Error" });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { word, definition } = req.body;
    const updatedWord = await Word.findByIdAndUpdate(
      req.params.id,
      { word, definition },
      { new: true }
    );
    res.json(updatedWord);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Word.findByIdAndDelete(req.params.id);
    res.json({ message: 'Word deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

