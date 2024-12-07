

const express = require('express');
const app = express();
const axios = require('axios');


const PORT = process.env.PORT || 3000;

let domen = "https://apii.maulanaa.xyz"
// Variabel untuk menyimpan jumlah request
let requestCount = 0;

// Middleware untuk menghitung request
app.use((req, res, next) => {
  requestCount++;
  console.log(`Request ke-${requestCount}: ${req.method} ${req.url}`);
  next();
});


// Endpoint untuk endpoint
app.get('/', async (req, res) => {
  try {
    var list_endpoint = [
      domen + "/ai/chat",
    ]
    var endpoint_with_params = [
      domen + "/ai/chat?q=",
    ]
    var result = {
      list_endpoint,
      total_endpoint: list_endpoint.length,
      endpoint_with_params
    }
    res.status(200).json({
      status: 200,
      creator: "Lana x",
      result
    });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});




// Endpoint untuk mendapatkan jumlah request
app.get('/request-count', (req, res) => {
  res.status(200).json({ creator: "Lana Api", count: requestCount, msg: `Jumlah request yang diterima: ${requestCount}` });
});

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




  
