import express from 'express';
const appRouter = express.Router()

app.get('/', (req, res) => res.send('Hello World!'))

export default appRouter;