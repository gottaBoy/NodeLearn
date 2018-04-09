var express = require('express');
var app = express();
var fs = require("fs");

var bodyParser = require('body-parser');
var multer  = require('multer');

// 创建 application/x-www-form-urlencoded 编码解析
var urlencodedParser = bodyParser.urlencoded({ extended: false })
 
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(multer({ dest: '/tmp/'}).array('image'));

app.get('/', function (req, res) {
    console.log('index.html')
   res.sendFile( __dirname + "/" + "index.html" );
})

app.get('/index.html', function (req, res) {
    console.log('index.html')
   res.sendFile( __dirname + "/" + "index.html" );
})

// shipper_month
app.get('/shipper_month.html', function (req, res) {
    console.log('shipper_month.html')
   res.sendFile( __dirname + "/pages/" + "shipper_month.html" );
})

// month_shipper
app.get('/month_shipper.html', function (req, res) {
    console.log('month_shipper.html')
   res.sendFile( __dirname + "/pages/" + "month_shipper.html" );
})

// month_all
app.get('/month_all.html', function (req, res) {
    console.log('month_all.html')
   res.sendFile( __dirname + "/pages/" + "month_all.html" );
})

// echart
app.get('/echart.html', function (req, res) {
    console.log('echart.html')
   res.sendFile( __dirname + "/pages/" + "echart.html" );
})

// demo1
app.get('/demo1.html', function (req, res) {
    console.log('demo1.html')
   res.sendFile( __dirname + "/pages/" + "demo1.html" );
})

app.get('/process_get', function (req, res) {
 
    // 输出 JSON 格式
    var response = {
        "first_name":req.query.first_name,
        "last_name":req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
 })
 
app.post('/process_post', urlencodedParser, function (req, res) {
 
   // 输出 JSON 格式
   var response = {
       "first_name":req.body.first_name,
       "last_name":req.body.last_name
   };
   console.log(response);
   res.end(JSON.stringify(response));
})

app.post('/file_upload', function (req, res) {
 
    console.log(req.files[0]);  // 上传的文件信息
  
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
         fs.writeFile(des_file, data, function (err) {
          if( err ){
               console.log( err );
          }else{
                response = {
                    message:'File uploaded successfully', 
                    filename:req.files[0].originalname
               };
           }
           console.log( response );
           res.end( JSON.stringify( response ) );
        });
    });
})

var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
 
})