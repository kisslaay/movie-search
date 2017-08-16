var express = require("express");
var request = require("request");
var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("search"); 
});

app.get("/results", function(req, res) {
    var query = req.query.search;
    request("http://www.omdbapi.com/?s=" + query + "&apikey=thewdb", function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var data = JSON.parse(body);
            res.render("results", {data: data});
        }
    });
});


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie app have started!");
});