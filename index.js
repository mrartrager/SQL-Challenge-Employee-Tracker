const inquirer = require("inquirer");
const mysql = require("mysql2");
const dotenv = require('dotenv');

// const PORT = process.env.PORT || 5001;
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

dotenv.config();

const db = mysql.createConnection(
    {
      host: 'localhost', 
      user: 'root', // process.env.DB.USER
      password: 'Batman-robin#136!', // process.envDB_PASSWORD
      database: 'employee_db' // process.env.DB_NAME 
    },
    console.log(`Connected to the employee_db database.`)
  );
// const db= {}
//   db.query('', function (err, results) {
//     console.log(results);
//   })


const init = async function () {
   await inquirer.prompt([{
        type: 'list',
        name: 'mainMenu',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }]).then(answer => {
        if (answer.mainMenu === 'Quit') {
            // process.exit();
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
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
        init();
    });
}

const viewRoles = () => {
    db.query('SELECT roles.id AS role_id,  ', function (err, results){
        console.log(results);
        init();
    })
}

const viewEmployees = () => {
    db.query('', function (err, results) {
        if (err) console.log(err)
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
        let insertQuery = `INSERT INTO department (name) VALUES ('${answer.departmentAdd}')`;
        db.query(insertQuery, function (err, results) {
            if (err) console.log(err)
            console.log(results)
            init()
        })
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
        choices: [1,2,3,4,5]
    }
]).then(answer => {
    let insertQuery = `INSERT INTO role (title, salary, department_id) VALUES ('${answer.rolename}', '${answer.rolesalary}', '${answer.roledepartment}')`;
        db.query(insertQuery, function (err, results) {
            if (err) console.log(err)
            console.log(results)
            init()
})
})}

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
            message: 'What is the employees role?',
            choices: []
        },
        {
            type: 'list',
            name: 'employeemanager',
            message: 'Who is the employees manager?',
            choices: []
        }

    ]).then(answers => {

    })
}

const updateEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'listUpdate',
            message: "Which employees would you like to update?",
            choices: []
        },
        {
            type: 'list',
            name: 'listRole',
            message: 'What roles are the new employees filling?',
            choices: []
        }
    ]).then(answers => {

    })
}

init();
