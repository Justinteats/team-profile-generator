const inquirer =require("inquirer");

const fs =require("fs");
const jest = require("jest");

const Manager = require('./__tests__/Manager.test');
const Engineer = require('./__tests__/Engineer.test');
const Intern = require('./__tests__/Intern.test');

const teamMembers = [];
const idArray = [];

const managerPrompt = [ 
        {
            type: 'input',
            name: 'name',
            message: 'Welcome to the Organization Vizualization tool\nPlease enter the name of the Manager of the Organization\n',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee id for the Manager.\n'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the manager email.\n',
            validate(value) {
                const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email!'
            }
        }, 
        
    ];
    
    const newEngineerPrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the Engineer\n',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee id for the Engineer.\n'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employee email.\n',
            validate(value) {
                const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email!'
            }
        }, 
        {
            type: 'input',
            name: 'github',
            message: "Please enter the Engineers GitHub username.\n"
    
        }
    ];

    const newInternPrompt = [
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the intern\n',
        },
        {
            type: 'input',
            name: 'id',
            message: 'Enter the employee id for the intern.\n'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter the employee email.\n',
            validate(value) {
                const pass = value.match(/^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i);
                if (pass) {
                    return true;
                }
                return 'Please enter a valid email!'
            }
        }, 
        {
            type: 'input',
            name: 'school',
            message: "Please enter the Interns School.\n"
    
        }
    ];

    const newEmpPrompt = [
        {
            type: "list",
            name: "employeeType",
            message: "Would you like to add an employee to the organization?\n",
            choices: [
                "Add an Engineer.",
                "Add an Intern.",
                new inquirer.Separator(),
                "No, I am done.",
            ],
        },
    ]

    function newEngineer() {
        inquirer.prompt(newEngineerPrompt).then((answers) =>{
            organization.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
        newEmp();
        });
    };
    
    // function to create new intern.
    function newIntern() {
        inquirer.prompt(newInternPrompt).then((answers) =>{
            organization.push(new Intern(answers.name, answers.id, answers.email, answers.school));
        newEmp();
        });
    };
    
    function makePage(orgData) {
        fs.writeFile('./dist/team.html', generateHTML(orgData), (err) =>   
        err ? console.error(err) : console.log('success!'))
        };
    
    
    // function to handle choice of new employee to add or end function.
    function newEmployee() {
        inquirer.prompt().then((answers) => {
            switch (answers.employeeType) {
                case "Add an Engineer.":
                    newEngineer();
                    break;
                case "Add an Intern.":
                    newIntern();
                    break;
                case "No, I am done.":
                    console.log(organization);
                    makePage(organization);
                    break;
            };
        })
    }
    
    
    function start() {
        inquirer.prompt(managerPrompt).then((answers) => {
            organization.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
            console.log(JSON.stringify(organization));  //need to remove this line to pass to function.        
            newEmp()
        });
    
    }
    
    init();