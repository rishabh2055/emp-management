const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose'),
    expressValidator = require('express-validator'),
    config = require('./server/config/database');

    const app = express();
    
    global.APP_PATH = path.resolve(__dirname);

    mongoose.Promise = global.Promise;
    mongoose.connect(config.DB).then(
      () => {console.log('Database is connected') },
      err => { console.log('Can not connect to the database'+ err)}
    );
    const departmentRoutes = require('./server/routes/departments');
    const gradeRoutes = require('./server/routes/grades');
    //const employeeRoutes = require('./server/routes/employees');

    app.use(bodyParser.json());
    app.use(cors());
    const port = process.env.PORT || 4000;

    app.use('/api/departments', departmentRoutes);
    app.use('/api/grades', gradeRoutes);
    //app.use('/api/employees', employeeRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });