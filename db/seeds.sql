USE employee_db

INSERT INTO department (name)
VALUES 
('Engineering'),
('Human Resources'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Lead engineer', 120000, 1),
('Human Resources Representative', 100000, 2),
('Accountant', 75000, 3),
('Lawyer', 180000, 4),
('Salesperson', 75000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Alfred', 'Pennyworth', 1, NULL),
('Bat', 'Man', 2, 1),
('Barbara', 'Gordon', 3, 1),
('Zelda', 'Hyrule', 4, NULL),
('Link', 'NA', 5, 4),
('Anakin', 'Skywalker', 1, NULL),
('Ahsoka', 'Tano', 2, 1);

