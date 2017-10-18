var inquirer = require('inquirer');
var basic = require('./BasicCard.js');
var cloze = require("./ClozeCard.js");

function addcard() {
    inquirer.prompt([{
        name: "front",
        message: "What is the question?",

    }, {
        type: "input",
        name: "back",
        message: "What is the answer?",
    }]).then(function(answers) {
        var newCloze = new cloze(answers.front, answers.back);
        console.log("Question and answer has been added!");

    });
}

cloze("George Washington was the first president of the United States.", "George Washington");

// this will throw an error
cloze("This doesn't work", "oops");
