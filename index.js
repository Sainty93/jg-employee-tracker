const inquirer = require('inquirer');
const mysql =require('mysql2');
require('console.table');

const PORT = process.env.PORT || 3000;

const databaseConnection = mysql.createConnection({
    host: 'localhost',
    port: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

db.connect((err) => {
    if (err) throw err;
    mainMenu();
});

const mainMenu = () => {
    return inquirer.createPromptModule([
        {
            type: 'list',
            name: 'main_menu',
            message: 'What can i help with today?',
            choices: [
                'View all departments',
                'Add a department',
                'View all employees',
                'Add a new employee',
                'View all employees',
                'Quit',
            ],
        },
    ]);
};