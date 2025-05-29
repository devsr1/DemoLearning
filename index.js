import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();

// Set view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Routes
app.get('/my', (req, res) => {
  res.send('This is my website');
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'EJS Demo',
    heading: 'Welcome to My Website',
    message: 'This is a simple EJS template rendering example.',
    users: [
      { name: 'Alice', email: 'alice@example.com' },
      { name: 'Bob', email: 'bob@example.com' },
      { name: 'Charlie', email: 'charlie@example.com' }
    ]
  });
});

// Export app for Vercel (no listen)
export default app;