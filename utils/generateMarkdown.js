// // function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}`;
// }

// module.exports = generateMarkdown;


// // https://shields.io/category/build

function generateMarkdown(data) {
  return `# ${data.title}
  
  ![License:](https://img.shields.io/badge/Randy%20Whitley-${
    data.license ? data.license : "None"
  }-brightgreen)
  ## Description:
    ${data.description}
  # Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Test](#test)
  - [Credits](#credits)
  - [License](#license)
  - [Questions](#questions)
  ## Installation:
    ${data.installation}
  ## Usage:
    ${data.usage}
  ## Contributing:
    ${data.contribution}
  ## Test:
    ${data.test}
  ## Credits:
    ${data.credit}
  ## License:
  This project is subject to ![License: ${
    data.license ? data.license : "None"
  }](https://img.shields.io/badge/License-${data.license ? data.license : "None"}-red)
  ## Questions:
  For additional questions, Get in touch at: ${data.email}\n
  Check out my [GitHub](https://github.com/${data.username})
  GitHub [Repository](https://github.com/${data.username}/${data.repo});`;
}

module.exports = generateMarkdown;
