DROP DATABASE IF EXISTS bamazon;
CREATE database bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT(11) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100)  NULL,
  department_name VARCHAR(100)  NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT(11) NOT NULL,
  PRIMARY KEY (item_id)
  
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("iPhone 7", "Electronics", 50.00, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Jansport Backpack", "Luggage", 40.89, 45);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Herschel Backpack", "Luggage", 56.99, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Wilson Beach Volleyball", "Sports", 25.25, 8);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Bell Bike Helment", "Sports", 33.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("MacBook Air", "Electronics", 399.99, 67);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Nike Flyknit Trainers", "Shoes", 99.55, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Doc Marten Vintage 1460", "Shoes", 200.00, 3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Purell Hand Sanitizer", "Health", .68, 99);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUE ("Harry Potter Book Collection", "Books", 289.53, 5);

SELECT * FROM products;