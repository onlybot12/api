

const express = require('express');
const app = express();
const axios = require('axios');


const PORT = process.env.PORT || 3000;




app.get('/', (req, res) => {
  res.json({
    author: "Lana",
    result: "alok",
      
    })
})

app.get('/ai/chat', async (req, res) => {
  let { q } = req.query;
  if (!q) {
    return res.status(404).json({ status: 404, creator: "MannR", msg: "Parameter 'q' tidak ditemukan" })
  }
  try {
    const baseUrl = "https://hercai.onrender.com"
    let { data } = await axios({
      "method": "GET",
      "url": baseUrl + "/v3/hercai",
      "params": {
        "question": q
      }
    })
    let result = data
    res.status(200).json({
      status: 200,
      creator: "Lana X",
      result
    })
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




  
