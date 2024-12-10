

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

async function gptlogic(message, prompt) {
  try {
    let { data } = await axios.post("https://chateverywhere.app/api/chat/", {
      model: {
        id: "gpt-4",
        name: "GPT-4",
        maxLength: 32000,
        tokenLimit: 8000,
        completionTokenLimit: 5000,
        deploymentName: "gpt-4"
      },
      messages: [{
        pluginId: null,
        content: message,
        role: "user"
      }],
      prompt: prompt,
      temperature: 0.5
    }, {
      headers: {
        'Accept': "/*/",
        'User-Agent': "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
      }
    });
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

// Endpoint untuk endpoint
app.get('/', async (req, res) => {
  try {
    var list_fitur = [
      domen + "/ai/chat?q=halo",
      domen + "/ai/logic?q=haloo&logic=",
    ]
    res.status(200).json({
      list_fitur,
      total_fitur: list_fitur.length
    });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});




// Endpoint untuk mendapatkan jumlah request
app.get('/request-count', (req, res) => {
  res.status(200).json({ creator: "Lana Api", count: requestCount, msg: `Jumlah request yang diterima: ${requestCount}` });
});


// Endpoint untuk ai prompt
app.get('/ai/logic', async (req, res) => {
  let { q, logic } = req.query;
  if (!q) {
    return res.status(404).json({ status: 404, creator: "Lana X", message: "Masukan Parameter q" })
  }
  if (!logic) {
    return res.status(404).json({ status: 404, creator: "Lana X", message: "Masukan Parameter logic" })
  }
  try {
    //let result = await AI(messages)
    let result = await gptlogic(q, logic)
    res.status(200).json({
      status: 200,
      creator: "Lana X",
      result
    })
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
})

// Endpoint untuk ai chat
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




  
