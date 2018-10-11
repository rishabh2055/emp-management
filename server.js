const express = require('express'),
    fs = require('fs'),
    morgan = require('morgan'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    expressValidator = require('express-validator'),
    expressSession = require('express-session'),
    config = require('./server/config/database');

    // including passport
    //require('./server/config/passport');

    const app = express();

    // create a write stream (in append mode)
    let accessLogStream = fs.createWriteStream(__dirname + '/server_logs.log',{flags: 'a'});


    // setup the logger
    app.use(morgan('combined', {stream: accessLogStream}))
    
    global.APP_PATH = path.resolve(__dirname);


    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );

    /** Setting Default Headers */
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    const departmentRoutes = require('./server/routes/departments');
    const gradeRoutes = require('./server/routes/grades');
    const employeeRoutes = require('./server/routes/employees');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    // catch 404 and forward to error handler
    app.use((req, res, next)=> {
        let err = {
            status: 404
        }
        next(err);
    });

    /* error handlers & middlewares */
    app.use((err, req, res, next)=> {

        // return error
        res.status(err.status || 500);
        res.json({
          status: err.status,  
          message: err.message,
        });
    });

    app.use('/api/departments', departmentRoutes);
    app.use('/api/grades', gradeRoutes);
    app.use('/api/employees', employeeRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });