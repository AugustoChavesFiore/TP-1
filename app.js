const express=require('express');
const cors=require('cors');
const helmet=require('helmet');
const morgan=require('morgan');
const path = require('path');
const { conectarDB } = require('./db');
require('dotenv').config();
require('ejs');

const app=express();
const port=process.env.PORT || 3000; 
conectarDB();

//mid
app.use(morgan('dev'));
// app.use(helmet);
// app.use(cors);
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.use(express.static(path.join(__dirname, './src/public')));

app.use(require('./src/routes/img.routes'));

app.listen(port,()=>{console.log(`server on http://localhost:${port}`);})