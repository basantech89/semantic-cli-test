const inquirer = require("inquirer");
const selectLine = require("inquirer-select-line");

inquirer.registerPrompt("selectLine", selectLine);
inquirer
  .prompt([
    {
      type: "selectLine",
      message: "Where add line?",
      name: "line",
      choices: ["first", "second", "third", "fourth", "fifth"],
    },
  ])
  .then(function (answers) {
    console.log("Chosen line: ", answers?.line);
    /*
    OUTPUT :
    Chosen line: 2
    */
  });
