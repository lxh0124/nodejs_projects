var https = require('https');
var http = require('http');
var BufferHelper = require('bufferhelper');
var iconv = require('iconv-lite');
var fs = require('fs');

var url = "https://mm.taobao.com/tstar/search/tstar_model.do?_input_charset=utf-8"

var req = https.get(url, function (res) {
    var bufferHelper = new BufferHelper();
    //res.setEncoding('utf8');
    res.on('data', function (chunk) {
        bufferHelper.concat(chunk);
    });
    res.on('end', function () {
        //var html = bufferHelper.toBuffer().toString();
        var body = iconv.decode(bufferHelper.toBuffer(), 'GBK');
        var jsonBody = JSON.parse(body);

        for (var i = 0; i < jsonBody.data.searchDOList.length; i++) {
            getLadyData(jsonBody.data.searchDOList[i]);
        }
    });
});
req.end();



function getLadyData(obj) {
    console.log('realName - ' + obj.realName);
    console.log('imageUrl - ' + obj.avatarUrl);
    console.log('city - ' + obj.city);
    console.log('userId - ' + obj.userId);
    console.log('weight - ' + obj.weight);
    console.log('height - ' + obj.height);
    console.log('----------------------');
    save(obj);
}

var imagePath = "./images/";

var imageUrl = "http://gtd.alicdn.com/sns_logo/i6/TB1fVJJQFXXXXcyXpXXSutbFXXX.jpg"

function save(obj){
    var p = creatFolder(obj.realName);
    var filepath = p + "/" +new Date().getMilliseconds() + ".jpg";
    console.log(filepath)
    saveImage(obj.avatarUrl, filepath);
}

function creatFolder(folderName) {
    var p = "./images/" + folderName;
    if (!fs.existsSync(p)) {
        fs.mkdirSync(p);
    }
    return p;
}

function saveImage(imageUrl, filepath) {

    http.get("http:"+imageUrl, function (res) {
        res.setEncoding('binary');//二进制（binary）
        var imageData = '';
        res.on('data', function (data) {//图片加载到内存变量
            imageData += data;
        }).on('end', function () {//加载完毕保存图片
            console.log(filepath)
            fs.writeFile(filepath, imageData, 'binary', function (err) {//以二进制格式保存
                if (err) throw err;
                console.log('file saved');
            });
        });
    });
}





