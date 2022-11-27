#!/usr/bin/env node

import choices from "./common";

const inquirer = require("inquirer");
const selectLine = require("inquirer-select-line");

inquirer.registerPrompt("selectLine", selectLine);
inquirer
  .prompt([
    {
      type: "selectLine",
      message: "Where add line?",
      name: "line",
      choices,
    },
  ])
  .then(function (answers) {
    console.log("Chosen line: ", answers?.line);
    /*
    OUTPUT :
    Chosen line: 2
    */
  });
