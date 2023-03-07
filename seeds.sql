INSERT INTO department (department_name)
VALUES ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Customer Service');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 150000, 1),
        ('Salesperson', 75000, 1),
        ('Senior Software Engineer', 200000, 2),
        ('Software Enginner', 120000, 2),
        ('Senior Accountant', 150000, 3),
        ('Accountant', 100000, 3),
        ('Service Manager', 80000, 4),
        ('Service Representative', 65000, 4);
        ('Service Manager', 80000, 4),
        ('Service Representative', 65000, 4);

        INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ('Garcia', 'Rodriguez', 1, NULL);
                ('Mathew', 'Brian' 2, 1),
                ('Stephen', 'Carpenter' 5, NULL);
                ('Smith', 'John', 4, 3),
                ('Jennifer', 'Gonzalez' 3, NULL),
                ('Gutierrez', 'Daniel' 7, NULL),
                ('Tim', 'Kevin', 8, 7);