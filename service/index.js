const express = require('express');
const app = express();

const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(express.json());



app.post('/api/book_request', (req, res) => {
    const { name, address, email } = req.body;
    // You can add logic to save this data to a database or process it
    res.status(201).json({ message: 'Book request received' });
  });
  
  // Endpoint to handle feedback
  app.post('/api/meeting_request', (req, res) => {
    const { userName, comments } = req.body;
    // Add logic to store feedback in your database
    res.status(201).json({ message: 'Meeting request received' });
  });
  
