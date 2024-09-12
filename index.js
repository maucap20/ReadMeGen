// Required Packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");

// Array of questions for user input
const promptQuestions = [
  {
    type: "input",
    name: "title",
    message: "Please enter your project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "Describe how to use this project:",
  },
  {
    type: "input",
    name: "contributing",
    message: "List the contribution guidelines:",
  },
  {
    type: "input",
    name: "tests",
    message: "Provide testing instructions for the application:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for this project:",
    choices: [
      "MIT",
      "GPL-2.0",
      "GPL-3.0",
      "LGPL-2.1",
      "LGPL-3.0",
      "Apache-2.0",
      "MPL-2.0",
      "BSD-2-Clause",
      "BSD-3-Clause",
      "None",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address:",
  },
];

// Function to write the README file to the system
function saveReadmeFile(fileName, markdownContent) {
  fs.writeFile(fileName, markdownContent, (error) => {
    if (error) {
      console.error("Error writing file:", error);
    } else {
      console.log("README.md file has been generated successfully!");
    }
  });
}

// Function to initialize the application
function initializeApp() {
  inquirer.prompt(promptQuestions).then((answers) => {
    const markdown = generateMarkdown(answers);
    saveReadmeFile("./Generated_README/README.md", markdown);
  });
}

// Start the application
initializeApp();
