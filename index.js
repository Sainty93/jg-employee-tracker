const inquirer = require('inquirer');
const mysql =require('mysql2');
require('dotenv').config();

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
                'Add a department',
                'View all employees',
                'Add a new employee',
                'View all roles',
                'Add a new role',
                'Update employee role',
                'Quit',
            ],
        },
    ])
        then ((response) => {
            switch (response.mainMenu) {
                case 'View all departments':
                    viewAllDepartments();
                    break;
                    
                    case 'Add a department':
                        addDepartment();
                        break;

                    case 'View all employees':
                        viewAllEmployees();
                        break;

                    case 'Add a new employee':
                        addEmployee();
                        break;
                    
                    case 'View all roles':
                        addRole;
                        break;

                    case 'Update employee role':
                        updateEmployeeRole();
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

       // const query = 'SELECT employee.id, employee.first_name, employee.last_name, role.title,
       // department.name AS department, role.salary, Contact(manager.fist_name, '', manager.last_name) AS manager
    //    FROM employee
      //  LEFT JOIN employee manager on manager.id = employee.manager_id
       // INNER JOIN ROLE on (role.id = employee.role_id)
       // INNER JOIN department on (department.id  = role.department_id)
       // ORDER BY employee.id;`

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

            inquirer.prompt([
                {
                    type: 'input',
                    name: 'department',
                    choices: ['What department would you like to add?'],
                },
            ])
            .then((response) => {
                let query = `INSERT INTO department (department_name) VALUES (?)`;
                database.query(query, (err, res) => {
                    if (err) throw err;
                    console.log(response.name + 'department has been added.');
        });
    });
});
    };

