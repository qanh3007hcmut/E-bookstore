CREATE DATABASE Ebookstores;
USE Ebookstores;

CREATE TABLE Publisher (
    publisher_id INT AUTO_INCREMENT PRIMARY KEY,
    publisher_name VARCHAR(255) NOT NULL,
    publisher_email VARCHAR(255),
    publisher_address TEXT,
    publisher_phone VARCHAR(20)
);

CREATE TABLE Book (
    book_id INT AUTO_INCREMENT PRIMARY KEY,
    book_name VARCHAR(255) NOT NULL,
    book_description TEXT,
    book_price INT,
    publication_year DECIMAL(4, 0),
    book_language VARCHAR(50),
    inventory_quantity INT NOT NULL CHECK (inventory_quantity >= 0),
    publisher_id INT,
    image_name VARCHAR(255),
    book_type VARCHAR(255) NOT NULL,
    FOREIGN KEY (publisher_id) REFERENCES Publisher(publisher_id)
);

CREATE TABLE Author (
    author_id INT AUTO_INCREMENT PRIMARY KEY,
    author_name VARCHAR(255) NOT NULL,
    author_biography TEXT,
    author_nationality VARCHAR(50),
    author_dob DATE
);

CREATE TABLE `Write` (
    book_id INT,
    author_id INT,
    PRIMARY KEY (book_id, author_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

CREATE TABLE Cooperate (
    publisher_id INT,
    author_id INT,
    PRIMARY KEY (publisher_id, author_id),
    FOREIGN KEY (publisher_id) REFERENCES Publisher(publisher_id),
    FOREIGN KEY (author_id) REFERENCES Author(author_id)
);

CREATE TABLE Series (
    series_name VARCHAR(255),
    series_id INT AUTO_INCREMENT PRIMARY KEY,
    series_description TEXT
);

CREATE TABLE Series_Item (
    item_id INT PRIMARY KEY,
    series_id INT NOT NULL,
    order_in_series INT NOT NULL,
    FOREIGN KEY (item_id) REFERENCES Book(book_id),
    FOREIGN KEY (series_id) REFERENCES Series(series_id)
);

ALTER TABLE Series
ADD CONSTRAINT chk_series_books
CHECK ((SELECT COUNT(*) FROM Series_Item WHERE Series_Item.series_id = Series.series_id) >= 2);

CREATE TABLE Customer_account (
    username VARCHAR(15) PRIMARY KEY,
    `password` VARCHAR(100) NOT NULL CHECK (
        LENGTH(`password`) >= 8 AND
        `password` REGEXP '.*[A-Z].*' AND
        `password` REGEXP '.*[a-z].*' AND
        `password` REGEXP '.*[0-9].*'
    ),
    customer_name VARCHAR(255),
    customer_phone VARCHAR(50),
    customer_email VARCHAR(255),
    customer_address TEXT
);

CREATE TABLE Order_history (
    order_history_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    FOREIGN KEY (username) REFERENCES Customer_account(username)
);

CREATE TABLE Discount (
    discount_id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(15),
    amount INT NOT NULL,
    FOREIGN KEY (username) REFERENCES Customer_account(username)
);

CREATE TABLE Invoice (
    invoice_id INT AUTO_INCREMENT PRIMARY KEY,
    invoice_date DATE,
    customer_id VARCHAR(15) NOT NULL,
    payment_method VARCHAR(255) NOT NULL,
    money_paid INT NOT NULL,
    FOREIGN KEY (customer_id) REFERENCES Customer_account(username)
);

CREATE TABLE `Order` (
    order_id INT AUTO_INCREMENT PRIMARY KEY,
    customer_id VARCHAR(15) NOT NULL,
    `status` VARCHAR(255),
    discount_id VARCHAR(50),
    order_history_id INT NOT NULL,
    invoice_id INT,
    FOREIGN KEY (customer_id) REFERENCES Customer_account(username),
    FOREIGN KEY (discount_id) REFERENCES Discount(discount_id),
    FOREIGN KEY (order_history_id) REFERENCES Order_history(order_history_id),
    FOREIGN KEY (invoice_id) REFERENCES Invoice(invoice_id)
);

CREATE TABLE Order_item (
    book_id INT PRIMARY KEY,
    order_id INT NOT NULL,
    quantity INT CHECK (quantity > 0),
    FOREIGN KEY (order_id) REFERENCES `Order`(order_id),
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);

CREATE TABLE Favorite_list (
    favorite_list_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(15) NOT NULL,
    FOREIGN KEY (username) REFERENCES Customer_account(username)
);

CREATE TABLE Favorited_book (
    book_id INT PRIMARY KEY,
    favorite_list_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES Book(book_id),
    FOREIGN KEY (favorite_list_id) REFERENCES Favorite_list(favorite_list_id)
);

CREATE TABLE Genre (
    AGenre VARCHAR(255) PRIMARY KEY,
    book_id INT NOT NULL,
    FOREIGN KEY (book_id) REFERENCES Book(book_id)
);

INSERT INTO Customer_account (username, `password`)
VALUES
('user1', 'Password1A');

INSERT INTO Publisher (publisher_name)
VALUES
('Publisher1');

INSERT INTO Book (book_name, book_description, book_price, publication_year, book_language, inventory_quantity, publisher_id, image_name, book_type)
VALUES
('ABC', 'adsfasdfadsfdfasdfasdf', 123, 2004, 'English', 50, 1, 'ABC.png', 'adfasdf');

INSERT INTO Genre (AGenre, book_id)
VALUES
("Fiction", 1);
