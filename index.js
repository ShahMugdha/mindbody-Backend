const express = require('express'),
http = require('http');
const hostname = 'localhost';
const morgan = require('morgan');
const mongoose = require('mongoose');
const saleRouter = require('./routes/sales');
const salesRepRouter = require('./routes/salesRep');
const clientRouter = require('./routes/clients');
const staffRouter = require('./routes/staff');
const locationRouter = require('./routes/locations');
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
app.use('/sales-rep', salesRepRouter);
app.use('/clients', clientRouter);
app.use('/staff', staffRouter);
app.use('/locations', locationRouter);
app.use("/userToken", userRouter);
function split(thing) {
	if (typeof thing === "string") {
		return thing.split("/");
	} else if (thing.fast_slash) {
		return "";
	} else {
		const match = thing
			.toString()
			.replace("\\/?", "")
			.replace("(?=\\/|$)", "$")
			.match(/^\/\^((?:\\[.*+?^${}()|[\]\\\/]|[^.*+?^${}()|[\]\\\/])*)\$\//);
		return match ? match[1].replace(/\\(.)/g, "$1").split("/") : "<complex:" + thing.toString() + ">";
	}
}
function print(path, layer) {
	if (layer.route) {
		layer.route.stack.forEach(print.bind(null, path.concat(split(layer.route.path))));
	} else if (layer.name === "router" && layer.handle.stack) {
		layer.handle.stack.forEach(print.bind(null, path.concat(split(layer.regexp))));
	} else if (layer.method) {
		console.log("%s /%s", layer.method.toUpperCase(), path.concat(split(layer.regexp)).filter(Boolean).join("/"));
	}
}
app._router.stack.forEach(print.bind(null, []));
const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});