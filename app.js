var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const db = require("./server/database/databaseConnect");
db.connectToServer();

var indexRouter = require('./routes/index');
var statisticalRouter = require('./routes/statistical');
var maps_binhduongRouter = require('./routes/maps_binhduong');
var thaiton_warehousesRouter = require('./routes/thaiton_warehouses');
var dashboardRouter = require('./routes/dashboard');
var warehouseThaiTonCRouter = require('./routes/warehouseThaiTonC');

const app = express();
const port = process.env.PORT || 8080;

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

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to Project with Nodejs Express and MongoDB',
  });
});

app.listen(port, () => {
  console.log(`Our server is running on port ${port}`);
});

module.exports = app;