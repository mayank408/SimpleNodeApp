var express = require('express')
var todoController = require('./controllers/todoController')

var app = express();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/.well-known/assetlinks.json',function(req,res)
{
res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify([{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "com.example.mohitkumar.airtelhack",
    "sha256_cert_fingerprints":
    ["BF:71:A6:B5:E7:38:CC:41:0A:3A:0C:E1:1F:CD:E0:06:AD:CA:8A:3D:35:9E:DD:BD:17:A9:BD:31:E3:56:58:12"]
  }
}]));
})

todoController(app);


app.listen(process.env.PORT || 3000)
console.log('server is running')