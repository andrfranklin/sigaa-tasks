'use strict'

import express from 'express';
import { scraper } from './scraper.js';

const routes = express.Router();
routes.use('/api', scraper);

export { routes };