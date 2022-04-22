'use strict'

import express from 'express';
import { crawler } from './crawler.js';

const routes = express.Router();
routes.use('/api', crawler);

export { routes };