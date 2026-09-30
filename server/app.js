require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;
const analyzeRouter = require("./routes/analyze");
const spellCheckRouter = require("./routes/spellCheck");
const grammarCheckRouter = require("./routes/GrammarCheck");

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use("/api/analyze", analyzeRouter);
app.use("/api/spellcheck", spellCheckRouter);
app.use("/api/grammarcheck", grammarCheckRouter);

// start the server
app.listen(PORT, () => {
  console.log("Server is running ");
});
