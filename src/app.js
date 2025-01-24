const express = require('express');
const app = express();
const PORT = 3000;
const studentRouter = require('./controllers/studentcont');

app.disable('x-powered-by'); 
app.use(express.json({'limit': '5mb'})); 
app.use(express.urlencoded({'extended': true})); 
app.use(express.json());
app.use('/students', studentRouter); // route

app.all('*', function(_, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
    next();
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto: ${PORT}`);
});
