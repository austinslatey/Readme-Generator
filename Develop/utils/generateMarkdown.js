// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge({license}) { 
  let yourLicense = ''
  if (license === 'MIT') {
    yourLicense = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
    return yourLicense;
  } else if (license === 'GPLv3') {
    yourLicense = `![GPLv3 license](https://img.shields.io/badge/License-GPLv3-blue.svg)`
    return yourLicense;
  } else if (license === 'GPL') {
    yourLicense = `![GPL license](https://img.shields.io/badge/License-GPL-blue.svg)`
    return yourLicense;
  } else {
    yourLicense = "N/A"
    return yourLicense;
  }

};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === true) {
    return yourLicense;
  } else {
    return "";
     
  }

}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // TODO come up with a good template for the reademe 
  return `#${data.title}


  ##Table of Contents


  * [Description](#description)
  * [Intended Use](#Intended-Use)
  * [Credentials](Credentials)
  * [License](License)

 
  


  ---

  

  ## Description
  ${data.description}

  ## Intended Use
  ${data.usage}

  ## Credenitals
  ${data.github}
  ${data.contactInfo}

  ## License 
  ${data.license}
  ${renderLicenseBadge(data)}
`;
}

module.exports = generateMarkdown;
