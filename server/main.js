import express from 'express';
import { createServer } from 'http'
import dotenv from 'dotenv';
import { connectDb } from './db/DbConfig';
import { Startup } from './Startup';
import { socketProvider } from './SocketProvider';

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

if (process.env.NODE_ENV == 'dev') {
  // @ts-ignore
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
}

const httpServer = createServer(app);
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app)
socketProvider.initialize(httpServer)

connectDb();

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});