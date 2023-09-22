const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let data = require('./data.json');

app.get('/', (req, res) => {
  res.json(data);
});

app.post('/', (req, res) => {
  const newItem = req.body;
  data.push(newItem);
  res.json(data);
});

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updatedItem = req.body;
  data[id] = updatedItem;
  res.json(data);
});

app.delete('/delete/:id', (req, res) => {
  const id = req.params.id;
  data.splice(id, 1);
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
