const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8000;
const router = require('./routes/userRouter');
const connectDB = require('./config/db');


connectDB();



app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', router);

app.get('/', (req, res) => {
    res.status(200).send({ message: `Server is running at port ${port}` });
}   
);



app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});


