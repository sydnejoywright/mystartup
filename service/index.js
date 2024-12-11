
const express = require('express');
const app = express();

const book_requests = [];
const meeting_requests = [];

const port = process.argv.length > 2 ? process.argv[2] : 4001;

app.use(express.json()); // Move this line here
app.use(express.static('public'));

const apiRouter = express.Router();
app.use('/api', apiRouter);



app.post('/book_request', (req, res) => {
  const { name, address, email } = req.body;
  book_requests.push({ name, address, email }); // Fix incorrect object structure
  console.log(book_requests);
  res.status(201).json({ message: 'Book request received' });
});

app.post('/meeting_request', (req, res) => {
  const { name, phone, email, country, message } = req.body;
  meeting_requests.push({ name, phone, email, country, message });
  console.log(meeting_requests);
  res.status(201).json({ message: 'Meeting request received' });
});


app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


