const express = require('express');

const {sequelize, Student} = require('./models/index');


const app = express();
app.use(express.json());

app.listen({port: 3000,},async ()=>{

    //lets check the connection with MySQL
    await sequelize.authenticate();
    console.log('authenticated to MySQL');
    await sequelize.sync({force: true});
    console.log('Database sync complete');
});



