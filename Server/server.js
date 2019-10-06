import express from 'express';
import api from './api';

const port = 9888;
const app = express();
const API_ROOT = `http://localhost:${port}/api`;

app.use('/api', api);

app.listen(port, error => {
  if (error) {
    console.error(error);
  } else {
    console.info('==> 🌎  Listening on port %s. Open up %s in your browser.', port, API_ROOT);
  }
});
