
DROP DATABASE IF EXISTS kevin_dallyn_db;
CREATE DATABASE kevin_dallyn_db;

  DROP TABLE IF EXISTS  users CASCADE;

  CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL
  );

  INSERT INTO users (
  email,
  password
) VALUES
('kevin_dallyn@proposal.com', 'engaged');