const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
//Connect to database
connectDb();

//Server
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

//Middleware
app.use(errorHandler);
app.use('', require('./routes/storyRoutes'));

//Listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
