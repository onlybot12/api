

const express = require('express');
const app = express();



const PORT = process.env.PORT || 3000;




app.get('/', (req, res) => {
  const randomKhodam = pickRandom(khodam);
  res.json({
    author: "Lana",
    result: "alok",
      
    }
  
  })
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




  
