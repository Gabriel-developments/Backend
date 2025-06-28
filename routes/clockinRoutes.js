// routes/clockRoutes.js
const express = require('express');
const router = express.Router();

// Importa os modelos.
// Certifique-se de que os caminhos para os modelos estão corretos.
const Clockin = require('../models/Clockin');
const Clockout = require('../models/Clockout');

/**
 * Rota POST /
 * Cria um novo registro de entrada (Clockin).
 * Espera um corpo de requisição JSON com { petshopName, executorName }.
 */
router.post('/', async (req, res) => {
    try {
        const { petshopName, executorName } = req.body;

        // Validação básica (opcional, mas recomendado no mundo real)
        if (!petshopName || !executorName) {
            return res.status(400).send('petshopName and executorName are required.');
        }

        // Cria uma nova instância do modelo Clockin
        const newClockin = new Clockin({ petshopName, executorName });

        // Salva o registro no banco de dados (simulado)
        await newClockin.save();

        // Retorna "ok" e status 200 conforme o teste espera
        res.status(200).send('ok');
    } catch (error) {
        console.error('Error creating clockin:', error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * Rota GET /
 * Retorna todos os registros de entrada (Clockins).
 */
router.get('/', async (req, res) => {
    try {
        // Busca todos os registros de Clockin no banco de dados (simulado)
        const clockins = await Clockin.find();

        // Retorna os registros com status 200
        res.status(200).json(clockins);
    } catch (error) {
        console.error('Error fetching clockins:', error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * Rota POST /clockout
 * Cria um novo registro de saída (Clockout).
 * Espera um corpo de requisição JSON com { petshopName, executorName }.
 */
router.post('/clockout', async (req, res) => {
    try {
        const { petshopName, executorName } = req.body;

        // Validação básica (opcional, mas recomendado no mundo real)
        if (!petshopName || !executorName) {
            return res.status(400).send('petshopName and executorName are required.');
        }

        // Cria uma nova instância do modelo Clockout
        const newClockout = new Clockout({ petshopName, executorName });

        // Salva o registro no banco de dados (simulado)
        await newClockout.save();

        // Retorna "ok" e status 200 conforme o teste espera
        res.status(200).send('ok');
    } catch (error) {
        console.error('Error creating clockout:', error);
        res.status(500).send('Internal Server Error');
    }
});

/**
 * Rota GET /clockout
 * Retorna todos os registros de saída (Clockouts).
 */
router.get('/clockout', async (req, res) => {
    try {
        // Busca todos os registros de Clockout no banco de dados (simulado)
        const clockouts = await Clockout.find();

        // Retorna os registros com status 200
        res.status(200).json(clockouts);
    } catch (error) {
        console.error('Error fetching clockouts:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
