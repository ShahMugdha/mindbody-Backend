const express = require('express'),
http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const mongoose = require('mongoose');
const saleRouter = require('./routes/sales');
const userRouter = require('./routes/user')
const port = 5000;
const authorize = require('./middleware/authorize');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

//models
const Sale = require('./models/Sale');

// db connect
const url ='mongodb+srv://MugdhaShah:mugdha123@cluster0-ms17e.mongodb.net/Test'

const connect = mongoose.connect(url,{useNewUrlParser: true,useUnifiedTopology: true})
connect.then((db) => {
  console.log("Connected correctly to server");
}, (err) => { console.log(err); });

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use(cors());
//app.use("/*", authorize);
app.use('/sales', saleRouter);
app.use("/userToken", userRouter);

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});