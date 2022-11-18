const inquirer = require("inquirer");
const mysql = require("mysql2");


const PORT = process.env.PORT || 5001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


const db = mysql.createConnection(
    {
      host: 'localhost',
      user: 'root',
      password: 'Batman-robin#136!',
      database: 'employee_db'
    },
    console.log(`Connected to the employee_db database.`)
  );

  db.query('', function (err, results) {
    console.log(results);
  })


  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  