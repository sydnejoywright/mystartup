const express = require('express');
const uuid = require('uuid');
const app = express();


const book_requests = []
const meeting_requests = []


const port = process.argv.length > 2 ? process.argv[2] : 4000;

app.use(express.json());

app.use(express.static('public'));


app.get('*', (_req, res) => {
  res.send({ msg: 'Simon service' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});



app.post('/api/book_request', (req, res) => {
    const { name, address, email } = req.body;
    book_requests.push((name, address, email))
    console.log(book_requests)
    res.status(201).json({ message: 'Book request received' });
  });
  
  app.post('/api/meeting_request', (req, res) => {
    const { name, phone, email, country } = req.body;
    meeting_requests.push({ name, phone, email, country, message });
    console.log(meeting_requests);
    res.status(201).json({ message: 'Meeting request received' });
  });
  

  // CreateAuth a new user
apiRouter.post('/auth/create', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = { email: req.body.email, password: req.body.password, token: uuid.v4() };
    users[user.email] = user;

    res.send({ token: user.token });
  }
});

// GetAuth login an existing user
apiRouter.post('/auth/login', async (req, res) => {
  const user = users[req.body.email];
  if (user) {
    if (req.body.password === user.password) {
      user.token = uuid.v4();
      res.send({ token: user.token });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth logout a user
apiRouter.delete('/auth/logout', (req, res) => {
  const user = Object.values(users).find((u) => u.token === req.body.token);
  if (user) {
    delete user.token;
  }
  res.status(204).end();
});
