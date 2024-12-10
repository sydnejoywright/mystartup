const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json()); // Move this line here

const book_requests = [];
const meeting_requests = [];

app.post('/api/book_request', (req, res) => {
  const { name, address, email } = req.body;
  book_requests.push({ name, address, email }); // Fix incorrect object structure
  console.log(book_requests);
  res.status(201).json({ message: 'Book request received' });
});

app.post('/api/meeting_request', (req, res) => {
  const { name, phone, email, country, message } = req.body;
  meeting_requests.push({ name, phone, email, country, message });
  console.log(meeting_requests);
  res.status(201).json({ message: 'Meeting request received' });
});


app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

