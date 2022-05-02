// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require ('./utils/generateMarkdown.js');
const licensesMap = require('./utils/licenses')
// TODO: Create an array of questions for user input

const apache = "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
const boost= "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
const BSD3="[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
const BSD2="[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)"
const CC0="[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)"
const CC4= "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC_BY_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)"
const CCBYSA="[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)" 
const CCBYNC= "[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)"
const CCBYND= "[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC_BY--ND_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)"
const CCBYNCSA="[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC_BY--NC--SA_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)" 
const CCBYNCND="[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)"
const eclipse="[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)"
const gnuv3="[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
const gnuv2="[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"
const gnuagplv3="[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
const gnuLGPLv3="[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
const gnuFDL= "[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)"
const hippo2="[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)"
const hippo3="[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)"
const IPL="[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)"
const ISC= "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"
const MIT="[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
const MPL= "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
const ODC="[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)"
const ODbL="[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)" 
const PDDL= "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)"
const perl= "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
const artistic="[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)"
const OFL= "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)"
const unlicense="[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"
const WTFPL= "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
const zLib ="[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)"
const licenses = [apache, boost, BSD3, BSD2, CC0, CC4, CCBYSA, CCBYNC, CCBYND, CCBYNCSA, CCBYNCND, eclipse, gnuv3, gnuv2, gnuagplv3, gnuLGPLv3, gnuFDL, hippo2, hippo3, IPL, ISC, MIT, MPL, ODC, ODbL, PDDL, perl, artistic, OFL, unlicense, WTFPL, zLib]

let choices =  ""
licenses.forEach(myFunction)

function myFunction(value, index, array) {
    choices+= "{" + "name:" + value + "}" + ","
}
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Type your project title:',
      default: '',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Type a description of your project:',
        default: '',
    },
    
    {
        type:'input',
        name: 'install',
        message: "Enter all instructions for installation:",
        default:'',
    },

    {
        type:'input',
        name: 'usage',
        message: "Enter all instructions for usage:",
        default:'',
    },


    {
        type: 'checkbox',
        message: 'Select licenses',
        name: 'licenses',
        choices: 
         licensesMap   
    },
   

    {
        type:'input',
        name: 'contributors',
        message: "Enter all contributors here:",
        default:'',
    },

    {
        type:'input',
        name: 'gitrepo',
        message: "Enter github repo here:",
        default:'',
    },

    {
        type:'input',
        name: 'gitusername',
        message: "Enter github username here:",
        default:'',
    },

    {
        type:'input',
        name: 'tests',
        message: "Enter all test instructions here:",
        default:'',
    },

    {
        type:'input',
        name: 'questionscontact',
        message: "Enter contact for users to ask additional questions here:",
        default:'',
    },
];

const promptUser = () => {
    return inquirer.prompt(questions);
};


// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('./README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README.md file has been successfully created!")
        }
    });
}


// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(function(data) {
        return generateMarkdown(data);
    })
    .then(function(data) {
    writeToFile(data)
    })
    .catch(err => {
        console.log(err);
    });

}

// Function call to initialize app
init();
