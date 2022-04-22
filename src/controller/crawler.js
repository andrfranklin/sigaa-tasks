import express from 'express';

const crawler = express.Router();

crawler.get('/', async (req, res) => {
    res.send('crawler');
});

export { crawler };