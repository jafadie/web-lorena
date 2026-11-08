import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(helmet());
app.use(express.json({ limit: '1mb' }));

app.get('/api/health', (_req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'API working correctly',
    timestamp: new Date().toISOString()
  });
});

export default app;