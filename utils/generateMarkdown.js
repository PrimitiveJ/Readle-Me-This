// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!licenses) {
    return '';
  }

  return `${licenses}`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!licenses) {
    return '';
  }

  return `${licenses}`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licensebutton) {
  if (!licenses) {
    return '';
  }

  return `${licenses}`;
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  ## Badge
  ${data.licenses}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Testing](#Testing)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## License
  ${data.licenses}
  ## Contributions
  ${data.contributors}
  ## Testing
  ${data.tests}
  ## Repository
  ${data.gitrepo}
  ## GitHub
  ${data.gitusername}
  ## Contact
  ${data.questionscontact}
  This README.md was generated using READLEMETHIS.
`;
};


module.exports = generateMarkdown;
