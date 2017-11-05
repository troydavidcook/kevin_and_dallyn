
DROP DATABASE IF EXISTS kevin_dallyn_db CASCADE;
CREATE DATABASE kevin_dallyn_db;

  DROP TABLE IF EXISTS  users CASCADE;

  CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    CONSTRAINT email_unique UNIQUE(email)
  );

  INSERT INTO users (
  email,
  password
) VALUES
('troydavidcook@gmail.com', 'p@ssword');