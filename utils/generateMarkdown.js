// Function to generate a license badge based on the selected license
// Returns an empty string if no license is selected
function getLicenseBadge(license) {
  return license !== "None"
    ? `![License Badge](https://img.shields.io/badge/License-${license}-blue)`
    : "";
}

// Function to generate a license link based on the selected license
// Returns an empty string if no license is selected
function getLicenseLink(license) {
  return license !== "None"
    ? `[${license}](https://opensource.org/license/${license})`
    : "";
}

// Function to generate the license section for the README
// Returns an empty string if no license is selected
function getLicenseSection(license) {
  return license !== "None"
    ? `## License\nThis project is licensed under the ${getLicenseLink(
        license
      )} license.`
    : "";
}

// Function to generate markdown content for the README
function generateReadme(data) {
  return `# ${data.title}
  
  ${getLicenseBadge(data.license)}
  
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ${getLicenseSection(data.license)}
  
  ## Questions
  For any questions, please contact me at [${data.email}](mailto:${data.email}).
  
  You can also visit my GitHub profile at [${data.github}](https://github.com/${
    data.github
  }).
  `;
}

module.exports = generateReadme;
