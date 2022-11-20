const inquirer = require("inquirer");
const mysql = require("mysql2");
const dotenv = require('dotenv');

const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config();

const db = mysql.createConnection(
    {
      host: 'localhost', 
      user: 'root', // process.env.DB.USER
      password: '', // process.DB_PASSWORD
      database: 'employee_db' // process.DB_NAME
    },
    console.log(`Connected to the employee_db database.`)
  );

//   db.query('', function (err, results) {
//     console.log(results);
//   })


const init = () => {
    inquirer.prompt({
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
    }).then(answer => {
        if (answer.mainMenu === 'Quit') {
            process.exit();
        }
        else if (answer.mainMenu === 'View all departments') {
            viewDepartments();
        } else if (answer.mainMenu === 'View all roles') {
            viewRoles();
        } else if (answer.mainMenu === 'View all employees') {
            viewEmployees();
        } else if (answer.mainMenu === 'Add a department') {
            addDepartment();
        } else if (answer.mainMenu === 'Add a role') {
            addRole();
        } else if (answer.mainMenu === 'Add an employee') {
            addEmployee();
        } else if (answer.mainMenu === 'Update an employee role') {
            updateEmployee();
        }
    });
};

const viewDepartments = () => {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
        init();
    });
}

const viewRoles = () => {
    db.query('', function (err, results){
        console.log(results);
        init();
    })
}

const viewEmployees = () => {
    db.query('', function (err, results) {
        console.log(results);
        init();
    })
}

const addDepartment = () => {
    inquirer.prompt({
        type:'input',
        name: 'departmentAdd',
        message: 'What department would you like added?'
    }).then(answer => {
        db.
    })
}

const addRole = () => {
inquirer.prompt ([
    {
        type: 'input',
        name: 'rolename',
        message: 'What is the name of the role?'
    },
    {
        type: 'input',
        name: 'rolesalary',
        message: 'What is the salary of the role?'
    },
    {
        type: 'list',
        name: 'roledepartment',
        message: 'Which department does the role belong to?',
        choices: 
    }
]).then(answers => {

})
}

const addEmployee = () => {
    inquirer.prompt ([
        { 
            type: 'input',
            name: 'firstname',
            message: 'What is the employees first name?'
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'Waht is the employees last name?'
        },
        {
            type: 'list',
            name: 'employeerole',
            message: 'What is the employees role?'
            choices: 
        },
        {
            type: 'list',
            name: 'employeemanager',
            message: 'Who is the employees manager?'
            choices:
        }

    ]).then(answers => {

    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'listUpdate',
            message: "Which employees would you like to update?"
            choices: 
        },
        {
            type: 'list',
            name: 'listRole',
            message: 'What roles are the new employees filling?'
            choices: 
        }
    ]).then(answers => {

    })
}

init();
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  