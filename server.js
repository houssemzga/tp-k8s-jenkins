const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Stockage des clients (en mémoire pour l'exemple)
let clients = [
    { id: 1, nom: "Dupont Jean", email: "jean.dupont@email.com", telephone: "06 12 34 56 78" },
    { id: 2, nom: "Martin Sophie", email: "sophie.martin@email.com", telephone: "06 23 45 67 89" },
    { id: 3, nom: "Bernard Pierre", email: "pierre.bernard@email.com", telephone: "06 34 56 78 90" }
];
let nextId = 4;

// Routes API
app.get('/api/clients', (req, res) => {
    res.json(clients);
});

app.post('/api/clients', (req, res) => {
    const { nom, email, telephone } = req.body;
    const newClient = {
        id: nextId++,
        nom,
        email,
        telephone
    };
    clients.push(newClient);
    res.status(201).json(newClient);
});

app.delete('/api/clients/:id', (req, res) => {
    const id = parseInt(req.params.id);
    clients = clients.filter(client => client.id !== id);
    res.status(204).send();
});

// Page principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Démarrer le serveur
app.listen(port, () => {
    console.log(`✅ Application démarrée sur http://localhost:${port}`);
});