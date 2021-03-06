const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

//链接数据库
mongoose.connect('mongodb://127.0.0.1/test');

mongoose.connection.on('connected', () => {
    console.log('MoogoDB connect success')
});

mongoose.connection.on('error', () => {
    console.log('MoogoDB connect fail')
});

mongoose.connection.on('disconnected', () => {
    console.log('MoogoDB connect disconnected')
});

module.exports=function(app){
    app.use('/',require('./index'));
    app.use('/user',require('./user'));
    app.use('/content',require('./content'));
};