const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const express = require('express');
const connectDB = require('./config/db');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');

const errorHandler = require('./middlewares/errorHandler');

const app = express();
connectDB();
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));

app.use(helmet());
app.use(cors()); 
app.use(express.json());
app.use(morgan('dev'));

// routes 
app.use('/api/v1/auth', require('./routes/v1/auth'));
app.use('/api/v1/tasks', require('./routes/v1/tasks'));

// error handler 
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
