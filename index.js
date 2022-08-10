import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import Routes from './server/route.js';
import Connection from './database/db.js';

const app = express();


dotenv.config();

app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Routes);

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const PORT = process.env.PORT || 8080;

Connection(USERNAME, PASSWORD);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("crud-app/build"));
}
 
app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));