let http = require("http");
let fs = require("fs");
let url = require("url");

http
  .createServer((request, response) => {
    if (request.url.endsWith(".js")) {
      let jsFile = request.url.slice(1);
      fs.readFile(jsFile, (err, data) => {
        if (err) throw err;
        response.setHeader("Content-Type", "text/javascript");
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else if (request.url.endsWith("/datawrite") && request.method == "POST") {
      let dataStrim = "";
      request.on("data", (chunk) => {
        dataStrim += chunk;
        console.log(dataStrim, "ok");
        console.log(typeof dataStrim, "ok3");
      });
      request.on("end", () => {
        fs.readFile("baza.json", "utf8", (err, data) => {
          if (err) throw err;

          let inputValue = JSON.parse(dataStrim); //переданный объект inputValue это объект

          let fileBaza = JSON.parse(data); //объект из файла

          let obAr = fileBaza.find(
            (item) =>
              item.name == inputValue.name &&
              item.plant == inputValue.plant &&
              item.position == inputValue.position // inputValue.name это name: nameinput7.value, а item.name это свойство name находящегося в файле baza.json и т.д.
          );

          if (obAr) {
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("the information is already in the database");
            response.end();
            console.log("ok");
          } else {
            let newArr = fileBaza.concat(inputValue);
            fs.writeFile("baza.json", JSON.stringify(newArr), (err) => {
              if (err) throw err;
              console.log("done");
            });
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("information recorded in the database");
            response.end();
          }
        });
      });
    } else if (request.url.endsWith("/searchAll") && request.method == "GET") {
      fs.readFile("baza.json", "utf8", function (err, data) {
        if (err) throw err;
        response.setHeader("Content-Type", "application/json");
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else if (request.url.endsWith("/search") && request.method == "POST") {
      let dataStrimSearch = "";
      request.on("data", (chunk) => {
        dataStrimSearch += chunk;
        console.log(dataStrimSearch, "ok");
        console.log(typeof dataStrimSearch, "ok3");
      });
      request.on("end", () => {
        fs.readFile("baza.json", "utf8", (err, data) => {
          if (err) throw err;
          console.log(data, "ok4");
          let inputValue = JSON.parse(dataStrimSearch); //переданный объект inputValue это объект
          console.log(inputValue, "ok5");

          let fileBaza = JSON.parse(data); //объект из файла
          console.log(fileBaza, "ok6");

          let obAr = fileBaza.find(
            (item) =>
              item.name == inputValue.name && item.plant == inputValue.plant // inputValue.name это name: nameinput7.value, а item.name это свойство name находящегося в файле baza.json и т.д.
          );

          if (obAr) {
            let out = JSON.stringify(obAr);
            response.setHeader("Content-Type", "application/json");
            response.statusCode = 200;
            response.write(out);
            response.end();
          } else {
            let a = "information NOT in the database";
            let out1 = JSON.stringify(a);
            response.setHeader("Content-Type", "application/json");
            response.statusCode = 200;
            response.write(out1);
            response.end();
          }
        });
      });
    } else if (
      request.url.endsWith("/searchmanager") &&
      request.method == "POST"
    ) {
      let dataStrimSearch = "";
      request.on("data", (chunk) => {
        dataStrimSearch += chunk;
      });
      request.on("end", () => {
        fs.readFile("bazamanager.json", "utf8", (err, data) => {
          if (err) throw err;

          let inputValue = JSON.parse(dataStrimSearch); //переданный объект inputValue это объект

          let fileBaza = JSON.parse(data); //объект из файла

          let obAr = fileBaza.find(
            (item) =>
              item.name == inputValue.name && item.plant == inputValue.plant // inputValue.name это name: nameinput7.value, а item.name это свойство name находящегося в файле baza.json и т.д.
          );

          if (obAr) {
            let out = JSON.stringify(obAr);
            response.setHeader("Content-Type", "application/json");
            response.statusCode = 200;
            response.write(out);
            response.end();
          } else {
            let a = "information NOT in the database";
            let out1 = JSON.stringify(a);
            response.setHeader("Content-Type", "application/json");
            response.statusCode = 200;
            response.write(out1);
            response.end();
          }
        });
      });
    } else if (
      request.url.endsWith("/datawritemanager") &&
      request.method == "POST"
    ) {
      let dataStrim = "";
      request.on("data", (chunk) => {
        dataStrim += chunk;
      });
      request.on("end", () => {
        fs.readFile("bazamanager.json", "utf8", (err, data) => {
          if (err) throw err;

          let inputValue = JSON.parse(dataStrim); //переданный объект inputValue это объект
          console.log(inputValue, "ok7");
          let fileBaza = JSON.parse(data); //объект из файла

          let obAr = fileBaza.find(
            (item) =>
              item.name == inputValue.name &&
              item.plant == inputValue.plant &&
              item.position == inputValue.position // inputValue.name это name: nameinput7.value, а item.name это свойство name находящегося в файле baza.json и т.д.
          );

          if (obAr) {
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("the information is already in the database");
            response.end();
            console.log("ok");
          } else {
            let newArr = fileBaza.concat(inputValue);
            fs.writeFile("bazamanager.json", JSON.stringify(newArr), (err) => {
              if (err) throw err;
              console.log("done");
            });
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("information recorded in the database");
            response.end();
          }
        });
      });
    } else if (
      request.url.endsWith("/datawritedirector") &&
      request.method == "POST"
    ) {
      let dataStrim = "";
      request.on("data", (chunk) => {
        dataStrim += chunk;
      });
      request.on("end", () => {
        fs.readFile("bazadirector.json", "utf8", (err, data) => {
          if (err) throw err;

          let inputValue = JSON.parse(dataStrim); //переданный объект inputValue это объект
          console.log(inputValue, "ok8");
          let fileBaza = JSON.parse(data); //объект из файла

          let obAr = fileBaza.find(
            (item) =>
              item.name == inputValue.name &&
              item.plant == inputValue.plant &&
              item.position == inputValue.position // inputValue.name это name: nameinput7.value, а item.name это свойство name находящегося в файле baza.json и т.д.
          );

          if (obAr) {
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("the information is already in the database");
            response.end();
            console.log("ok");
          } else {
            let newArr = fileBaza.concat(inputValue);
            fs.writeFile("bazadirector.json", JSON.stringify(newArr), (err) => {
              if (err) throw err;
              console.log("done");
            });
            response.setHeader("Content-Type", "text/plain");
            response.statusCode = 200;
            response.write("information recorded in the database");
            response.end();
          }
        });
      });
    } else if (request.url.endsWith(".css")) {
      let cssFile = request.url.slice(1);

      fs.readFile(cssFile, (err, data) => {
        if (err) throw err;
        response.setHeader("Content-Type", "text/css");
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else if (request.url.endsWith(".jpg")) {
      let imgFile = request.url.slice(1);
      fs.readFile(imgFile, (err, data) => {
        if (err) throw err;
        response.setHeader("Content-Type", "image/jpg");
        response.statusCode = 200;
        response.write(data);
        response.end();
      });
    } else {
      getPage(request.url, response, 200);
    }
  })
  .listen(8000);

function getPage(name, response, statusCode = 200) {
  if (name == "/") {
    name = "indexStart";
  }
  fs.readFile("page/" + name + ".html", "utf8", (err, data) => {
    if (!err) {
      response.setHeader("Content-Type", "text/html");
      response.statusCode = statusCode;
      response.write(data);
      response.end();
    } else {
      getPage("404", response, 404);
    }
  });
}
