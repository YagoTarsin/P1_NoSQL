require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user.routes');

const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(bodyParser.json());

// Middleware para parsear dados de formulário urlencoded
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos do diretório 'public'
app.use(express.static('public'));

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Conectado'))
    .catch(err => console.log(err));

// Rotas
app.use('/users', userRoutes);

// Iniciando o servidor na porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta: ${port}`);
});
