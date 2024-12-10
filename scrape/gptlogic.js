const axios = require("axios");

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

module.exports = gptlogic;
