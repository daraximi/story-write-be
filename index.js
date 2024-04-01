const express = require('express');
const dotenv = require('dotenv').config();
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const cors = require('cors');
//Connect to database
connectDb();

//Server
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 3005;

//Middleware
app.use(errorHandler);
app.use('/api/stories', require('./routes/storyRoutes'));

//Listener
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
