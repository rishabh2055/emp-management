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
    require('./server/config/passport');

    const app = express();

    // create a write stream (in append mode)
    let accessLogStream = fs.createWriteStream(__dirname + '/server_logs.log',{flags: 'a'});


    // setup the logger
    app.use(morgan('combined', {stream: accessLogStream}))
    
    global.APP_PATH = path.resolve(__dirname);


    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB, { useNewUrlParser: true }).then(
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
    const userRoutes = require('./server/routes/users');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/api/departments', departmentRoutes);
    app.use('/api/grades', gradeRoutes);
    app.use('/api/employees', employeeRoutes);
    app.use('/api/users', userRoutes);

    // catch 404 and forward to error handler
    app.use((req, res, next)=> {
        let err = {
            status: 404
        }
        next(err);
    });

    /* error handlers & middlewares */
    app.use((err, req, res, next)=> {console.log('hetre')
        // return error
        res.status(err.status || 500);
        res.json({
          status: err.status,  
          message: (!err.message)? req.url+' not found': err.message,
        });
    });

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });