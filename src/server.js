'use strict';

const express = require('express');
const path = require('path');

const app = express();

// Servir estáticos (frontend básico)
app.use(express.static(path.join(__dirname, '..', 'public')));

// Healthcheck para integración
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Endpoint API de ejemplo
app.get('/api/hello', (_req, res) => {
  res.json({ message: 'Hello from API' });
});

// Arranque si se ejecuta directamente
if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
}

module.exports = app;
