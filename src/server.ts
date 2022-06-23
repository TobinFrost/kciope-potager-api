import 'reflect-metadata';
import app from './app'
import { createServer } from 'http'

const PORT = process.env.PORT || 9292

const server = createServer(app).listen(PORT, () => {
    console.log('Server Up and listening on port ' + PORT);
})

export default server;