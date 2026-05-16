const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('🚀 TP Jenkins + Docker + K8s OK !'));
app.get('/health', (req, res) => res.status(200).send('OK'));

app.listen(port, () => console.log(`App sur port ${port}`));