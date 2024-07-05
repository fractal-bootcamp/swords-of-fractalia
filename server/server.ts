import express from 'express';
import cors from 'cors';

import { loginHandler } from './routes/login';
import { validateTokenHandler } from './routes/validateToken';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.post('/login', loginHandler);
app.post('/validateToken', validateTokenHandler);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}.`));