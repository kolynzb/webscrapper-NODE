const axios = require("axios");
const express = require("express");
const cheerio = require("cheerio");
const PORT = 8000;
const app = express();
const url = "https://www.theguardian.com/uk";
axios(url).then((res) => {
  const html = res.data;
  const $ = cheerio.load(html);
  $("");
});
app.listen(PORT, () => console.log(`running on port ${PORT}`));
