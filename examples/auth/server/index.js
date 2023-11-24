import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { verifyOffline } from './auth.js';

const app = express();

app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

app.get('/ping', async (req, res) => {
    return res.status(200).json({ message: 'OK' });
});

app.get('/verify-token', async (req, res) => {
    // Authorization header not set
    if (!(req.header('Authorization') && req.header('Authorization').startsWith('Bearer '))) {
        return res.status(401).json({ message: 'Invalid Authorization' });
    }

    try {
        console.log(req.header('Authorization'));

        // Verify authorization token
        await verifyOffline(req.header('Authorization').slice(7));

        // authorization secceeded
        return res.status(200).json({});
    } catch (e) {
        // authorization failed
        console.error(`Error: ${e.message}`);
        return res.status(401).json({ message: 'Unauthorized' });
    }
});

app.listen(3000, () => {
    console.log('listening on port 3000');
});
