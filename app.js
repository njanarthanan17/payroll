// app.js
import express from 'express'

import bodyParser from 'body-parser'

import { API_PREFIX } from './constants.js'

 

const app = express();

 

app.use(bodyParser.json())

app.use(express.json())

app.use(API_PREFIX,routes)

module.exports = app;

export default app
