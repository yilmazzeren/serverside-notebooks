const router = require("express").Router();
const path = require("path");
const fs = require("fs");

router.route("/").get((request, response, next) => {
  const dataArr = [];

  fs.readdir(path.join(__dirname, "../notebooks"), function (err, files) {
    //readdir notebooks içindeki dosyları listeler
    //handling error
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    //listing all files using forEach
    files.forEach(function (file) {
      // Do whatever you want to do with the file
      // console.log(file); //notebooks içerisindeki txt dosyaları
      const data = fs.readFileSync(
        // txt dosyalarını okumak için
        path.join(__dirname, `../notebooks/${file}`),
        {
          encoding: "utf8",
          flag: "r",
        }
      );
      const payload = {
        //name = asd.txt value=asd.txt içeriği
        fileName: file,
        value: data,
      };
      dataArr.push(payload);
      // console.log(payload);
    });
    response.status(200).send(dataArr);
  });
});

router.route("/save").post((request, response, next) => {
  const { body } = request;
  // console.log("body", body);
  const { fileName, value } = body;
  var fs = require("fs");
  var stream = fs.createWriteStream(
    path.join(__dirname, `../notebooks/${fileName}.txt`)
  );
  console.log(stream);
  stream.once("open", function (fd) {
    stream.write(value);
    stream.end();
  });
  response.status(200).send("");
});

module.exports = router;
