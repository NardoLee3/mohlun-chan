const fs = require('fs');

function intGenerator(max){
    return Math.floor(Math.pow(10, max - 1) + Math.random() * (Math.pow(10, max) - Math.pow(10, max - 1) - 1));
}

var id = intGenerator(7);

var jsonData ={
    "const": id
}

// var jsonObj = JSON.parse(jsonData);

var jsonContent = JSON.stringify(jsonData);
console.log(jsonContent);

fs.writeFile("cypress.env.json",jsonContent,'utf8', function (err){
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});