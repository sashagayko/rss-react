import express from 'express';
import { renderToString } from 'react-dom/server';
import { WrappedApp } from './App';
import { renderTemplate } from './renderTemplate';
console.log('ff');
const app = express();

app.use(express.static('dist'));

app.get('*', async (req, res) => {
  console.log('ff');
  const content = renderToString(WrappedApp());

  res.send(
    renderTemplate({
      cssPath: '../dist/assets/main.css',
      jsPath: '../dist/assets/main.js',
      content,
    })
  );
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('server is listening on port: 3000');
});
