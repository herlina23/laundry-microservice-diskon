const express = require('express');
const cors = require('cors')

const app = express();

app.use(cors())

//Environtment Variables
require('dotenv').config()

//Connect to Database
require("./config/db");

app.use(express.json());

app.use('/api/v1/rules', require('./routes/rules'))

const PORT = process.env.PORT || 3005;
app.listen(PORT, console.log(`Server started on Port ${PORT}`))