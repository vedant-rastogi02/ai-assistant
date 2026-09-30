const express = require("express");
const axios = require("axios");

const spellCheckRouter = express.Router();

spellCheckRouter.post("/", async (req, res) => {
  try {
    const { sentence } = req.body;

    const response = await axios.post(
      "https://api.openai.com/v1/responses",
      {
        model: "gpt-5.5",
        input: `Correct only the spelling mistakes in the following sentence. Do not change the grammar unless required because of spelling. Return only the corrected sentence.

Sentence:
${sentence}`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    res.json({
      result: response.data.output_text,
    });
  } catch (error) {
    console.error(error.response?.data || error.message);

    res.status(500).json({
      error: "Error processing sentence",
    });
  }
});

module.exports = spellCheckRouter;
