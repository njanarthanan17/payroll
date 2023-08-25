const express = require('express');

const bodyParser = require('body-parser');

const appConstants = require('./constants');




const app = express();

app.use(bodyParser.json({limit: '500mb', extended: true, parameterLimit:5000000}));

app.use(bodyParser.urlencoded({limit: '500mb', extended: true, parameterLimit:5000000}));


app.use(function(req, res, next) {

    res.header("Access-Control-Allow-Origin", "*");

    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");

    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Token,Authorisedkey, authorization, X-PINGOTHER, Content-Type, Accept, content-type");

 

    next();

  });

 

//DB connection

const db = require('./src/util/dbconfig');

console.log('DB Entered');

//DB test

db.authenticate().then(() => {

    console.log('Connection has been established successfully.')

}).catch(err => {

    console.log('Unable to connect to database: ', err)

});

 

console.log('DB Entered');

app.get('/', (req, res) => res.send('Welcome to Hrms API'));

 

require('./src/routes/employee.routes')(app);

require('./src/routes/userlogin.routes')(app);

 

const PORT = process.env.PORT || appConstants.APP_PORT;

 

app.listen(PORT, console.log(`Server started on port ${PORT}`));