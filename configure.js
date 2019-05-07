#!/usr/bin/env node

const inquirer = require("inquirer");
const dotenv = require("dotenv");
const {
  writeFileSync
} = require("fs");

dotenv.config();

const questions = [{
  message: "pick a fruit",
  type: "list",
  name: "FRUIT",
  choices: ["apple", "banana", "orange"],
  default: process.env.FRUIT
},
  {
    message: "juice or ice cream",
    type: "input",
    name: "LIQUID",
    when: answers => ["apple", "cherry"].includes(answers.FRUIT),
    default: null
  }
];

inquirer.prompt(questions).then(answers => {
  const config = Object.assign(answers, {
    SOME_OTHER_VALUE: "myvalue"
  });
  const configText = Object.entries(config)
    .map(([key, val]) => `${key}=${val}`)
    .join("\n");
  writeFileSync(".env", configText);
});
