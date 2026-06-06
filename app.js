const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Sample App!', version: '1.0.0' });
});

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/greet/:name', (req, res) => {
  const { name } = req.params;
  res.json({ greeting: `Hello, ${name}!` });
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

module.exports = app;
