const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

const data = require('./questions.json');

//Routes
app.get('/', (req, res) => {
  res.send('We are on Quiz Home Page');
});

app.get('/questions', async (req, res) => {
  try {
    res.json(data);
  } catch (error) {
    res.json({ message: error });
  }
});

app.listen(3005);
