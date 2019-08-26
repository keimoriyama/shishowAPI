"use strict";
var express = require("express");
//セキュリティ用のモジュール
//import * as helmet from 'helmet'
var router = express.Router();
//app.use(helmet())
router.get('/', function (req, res, next) {
    res.send("hello world");
});
module.exports = router;
