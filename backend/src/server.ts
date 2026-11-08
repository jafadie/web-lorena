import 'dotenv/config';

import app from './app.js';
import { connectDatabase } from './database/connection.js';

const PORT = Number(process.env.PORT || 3000);

async function startServer() {
  try {
    //await connectDatabase();

    app.listen(PORT, '127.0.0.1', () => {
      console.log(`API listening in ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting the app:', error);
    process.exit(1);
  }
}

startServer();