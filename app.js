//IMPORTS
import 'dotenv/config.js'; 
import __dirname from './utils.js';
import createError from 'http-errors'; 
//var express = require('express');
import express from 'express';
//var path = require('path');
import path from 'path';
// var cookieParser = require('cookie-parser');
//var logger = require('morgan');
import logger from 'morgan';
//var indexRouter = require('./routes/index');
import indexRouter from './routes/index.js';
import errorHandler from './middlewares/errorHandler.js';
import notFoundHandler from './middlewares/notFoundHandler.js';
import cors from 'cors';


let app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// MIDDLEWARES
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// ROUTER
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(notFoundHandler);

// error handler
app.use(errorHandler);

export default app;
