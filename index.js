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
      user: 'root', // process.DB.USER
      password: 'Batman-robin#136!', // process.DB_PASSWORD
      database: 'employee_db' // process.DB_NAME
    },
    console.log(`Connected to the employee_db database.`)
  );

//   db.query('', function (err, results) {
//     console.log(results);
//   })

const init = () => {
    inquirer.prompt({
        type: 'input',
        name: 'Department_id',
        message: 'Which '
    })
}


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  