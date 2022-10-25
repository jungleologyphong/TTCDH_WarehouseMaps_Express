var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//Routes
var indexRouter = require('./server/routes/index');
var statisticalRouter = require('./server/routes/statistical');
var maps_binhduongRouter = require('./server/routes/maps_binhduong');
var thaiton_warehousesRouter = require('./server/routes/thaiton_warehouses');
var dashboardRouter = require('./server/routes/dashboard');
var warehouseThaiTonCRouter = require('./server/routes/warehouseThaiTonC');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/statistical', statisticalRouter);
app.use('/maps_binhduong', maps_binhduongRouter);
app.use('/thaiton_warehouses', thaiton_warehousesRouter);
app.use('/dashboard', dashboardRouter)
app.use('/warehouseThaiTonC', warehouseThaiTonCRouter);

app.use(function (req, res, next) {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;