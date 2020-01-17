DROP DATABASE [IF EXISTS] climbing;

CREATE DATABASE [IF NOT EXISTS] climbing;

CREATE TABLE users (
    userId SERIAL PRIMARY KEY,
    userName VARCHAR (355) UNIQUE,
    password VARCHAR (355)
);

CREATE TABLE logs (
    logId SERIAL PRIMARY KEY,
    level INTEGER NOT NULL,
    posting_date DATE NOT NULL DEFAULT CURRENT_DATE,
    note TEXT,
    userId INTEGER REFERENCES users(userId)
);