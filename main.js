#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bgBlue("***CURRENCY CONVERTOR***"));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.6,
    "PKR": 277.70,
    //Add more currencies and their exchange rates here.
};
let userSelection = await inquirer.prompt([
    {
        name: "From",
        message: "Select your Currency wihch you want you convert",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "To",
        message: "Select your Currency in which you want to convert",
        type: "list",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "Amount",
        message: "How much Amount you want to convert",
        type: "number",
    }
]);
let fromlist = exchange_rate[userSelection.From]; //pkr 277.70
let toList = exchange_rate[userSelection.To]; // 1
let amount = userSelection.Amount; //5000
let BaseAmount = amount / fromlist; //5000 / 277.70
let convertedAmount = BaseAmount * toList; // base Amount / 1
let result = Math.round(convertedAmount);
console.log(chalk.bgMagenta(result));
