
const express = require('express');
const app = express();
require('dotenv').config();
const expressLayouts = require('express-ejs-Layouts');

const indexRouter = require('./routes/index');
const authorsRouter = require('./routes/authors');


const mongoose = require('mongoose');
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))
    .catch(err => console.log(err));

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'));


app.use('/', indexRouter);
app.use('/authors',authorsRouter);


const port = process.env.PORT || 3000;
app.listen( port ,() => console.log('app is running'));
