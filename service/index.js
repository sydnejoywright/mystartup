const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const DB = require('./database.js');

const authCookieName = 'token';

const book_requests = [];
const meeting_requests = [];

const port = process.argv.length > 2 ? process.argv[2] : 8082;

app.use(express.json()); // Move this line here
app.use(cookieParser());
app.use(express.static('public'));
app.set('trust proxy', true);

const apiRouter = express.Router();
app.use('/api', apiRouter);

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });




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


// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await DB.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await DB.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});


// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await DB.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// secureApiRouter verifies credentials for endpoints
const secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  const authToken = req.cookies[authCookieName];
  const user = await DB.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});







// Default error handler
app.use(function (err, req, res, next) {
  res.status(500).send({ type: err.name, message: err.message });
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});



// setAuthCookie in the HTTP response
function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

const httpService = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
