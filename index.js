const inquirer = require('inquirer');
const mysql =require('mysql2');
require('dotenv').config();
require('console.table');

const database = mysql.createConnection(
    {
        host: 'localhost',
        user: 'process.env.DB_USER',
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
    console.log('Connected to company database.')

);

db.connect((err) => {
    if (err) throw err;
    mainMenu();
});

const mainMenu = () => {
    return inquirer
    .prompt([
        {
            type: 'list',
            name: 'main_menu',
            message: 'What can I do for you today?',
            choices: [
                'View all departments',
                'View all employees',
                'View all roles',
                'Add a department',
                'Add a new employee',
                'Add a role',
                'Update employee role',
                'Update employee manager',
                'View employee by department',
                'View employee by manager',
                'View total budget by department',
                'Quit',
            ],
        },
    ])
        then ((response) => {
            switch (response.main_menu) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                    

                    case 'View all employees':
                        viewAllEmployees();
                        break;

                    case 'View all roles':
                        viewAllRoles();
                        break;
                    
                    case 'Add a department':
                        addDepartment();
                        break;

                    case 'Add a new employee':
                        addEmployee();
                        break;

                    case 'Add a role':
                    addRole();
                    break;
                    
                    case 'Update employee manager':
                        updateEmployeeManager();
                        break;

                    case 'View employee by department':
                        viewEmployeeByDepartment();
                        break;
                    
                    case 'View employee by manager':
                        viewAllDepartmentsByManager();
                        break;

                    case 'View total budget by department':
                        viewDepartmentBudget();
                        break;

                    case 'View total budget by department':
                        viewDepartmentBudget();
                        break;

                    case 'Quit':
                        database.end();
                        break;
            }
        });

    };

    const addEmployee = () => {};

    const addRole = () => {};

    const updateEmployeeRole = () => {};

    const updateEmployeeManager = () => {};

    const viewEmployeeByDepartment = () => {};

    const viewAllEmployeeByManager = () => {};

    const viewDepartmentBudget = () => {};

    const viewAllDepartments = () => {
        console.log('Viewing all departments...\n');

        let query = 'SELECT * FROM department;';

        databaseConnection.query(query, (err, res)  => {
            if (err) throw err;
            console.table(res);
            mainMenu();
        });
    };

    const viewAllEmployees = () => {
        console.log('Viewing all employees...\n');

      

        database.query(query, (err, res) => {
            if (err) throw err;
            console.table(res);
            mainMenu();
        });
    };

    const viewAllRoles = () => {
        console.log('Viewing all employees...\n');

        const query = `SELECT role.id, role.title, role.department_id, role.salary FROM role;`;

        database.query(query, (err, res) => {
            if (err) throw err;
            console.log(err);

           
  
   
            type: 'input',
            name: 'first_name',
            message: 'Please enter first name.',
            validate: (inoutFirstName) => {
                if (inoutFirstName) {
                    return true;
                } else {
                    console.log('Please enter first name.');
                 }
             },
         
         {
            type: 'input',
            name: 'last_name',
            messsage: 'Please enter last name.',
            validate: (inoutLastName) => {
                if (inoutLastName) {
                    return true;
                } else {
                    console.log('Please enter last name.');
         }
    },

},
{
    type: 'input',
    name: 'role_id',
    messsage: 'Please enter a role ID for new employee.',
    validate: (inputRoleId) => {
        if (inputRoleId) {
            return true;
        } else {
            console.log('Please enter role ID.');
        }
    },

.then((response) => {
    let query ='INSERT INTO employee SET?`;'

    database.query(
        query,
        {
            fist_name: response.fist_name,
            last_name: response.last_name,
            role_id: response.role_id,
            manager_id: response.manager_id,
        },
        (err) => {
            if (err) throw err;
            console.log ('New employee added!');
            mainMenu();    
        }
    );
});
