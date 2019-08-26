"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var indexRouter = require('./test');
var getDataFromFirebase = require('./firebaseconfig');
var app = express();
//testを呼び出す
app.get('/', indexRouter);
app.get('/firebase', getDataFromFirebase);
app.listen(process.env.PORT || 5000, function () { return console.log('listening'); });
