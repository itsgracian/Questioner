import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const env = (process.env.NODE_ENV === 'test' || process.env.NODE_ENV === 'dev') ? `_${process.env.NODE_ENV}` : '';

const dropQueries = `${questionsTable}; ${rsvpsTable}; ${votesTable}; ${commentsTable}; ${usersTable}; ${meetupsTable};`;

pool.query(dropQueries)
  .then((res) => {
    console.log(res);
    pool.end();
  })
  .catch((err) => {
    console.log(err);
    pool.end();
  });
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});
};

const create = () => {
const usersTable = `CREATE TABLE IF NOT EXISTS
    users(
      id BIGSERIAL PRIMARY KEY,
      firstname VARCHAR NOT NULL,
      lastname VARCHAR NOT NULL,
      othername VARCHAR() NOT NULL,
      email VARCHAR() NOT NULL,
      phone VARCHAR() NOT NULL,
      username VARCHAR() NOT NULL,
      password VARCHAR() NOT NULL,
      registered DATE NOT NULL DEFAULT CURRENT_DATE,
      isadmin BOOLEAN NOT NULL DEFAULT false
    )`;

const meetupsTable = `CREATE TABLE IF NOT EXISTS
    meetups(
      meetup_id BIGSERIAL PRIMARY KEY,
      topic VARCHAR() NOT NULL,
      location VARCHAR(100) NOT NULL,
      images VARCHAR [] NULL,
      tags VARCHAR [] NULL
      "createdOn" DATE NOT NULL DEFAULT CURRENT_DATE,
      topic VARCHAR(50) NOT NULL,
      happening DATE NOT NULL DEFAULT CURRENT_DATE,
    )`;

const questionsTable = `CREATE TABLE IF NOT EXISTS
    questions(
      question_id BIGSERIAL PRIMARY KEY,
      user_id INT NOT NULL,
      meetup INT NOT NULL,
      title VARCHAR() NOT NULL,
      body text
    )`;

const rsvpsTable = `CREATE TABLE IF NOT EXISTS
    rsvp(
      rsvp_id BIGSERIAL PRIMARY KEY,
      user_id INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      meetup INT NOT NULL REFERENCES meetups(meetup_id) ON DELETE CASCADE ON UPDATE CASCADE,
      response VARCHAR(200) NOT NULL
    )`;

const votesTable = `CREATE TABLE IF NOT EXISTS
    votes(
      vote_id BIGSERIAL NOT NULL PRIMARY KEY,
      user_id BIGINT NOT NULL,
      question_id BIGINT NOT NULL,
      upvotes NUMERIC,
      downvotes NUMERIC
    )`;

const commentsTable = `CREATE TABLE IF NOT EXISTS
    comments(
      comment_id BIGSERIAL PRIMARY KEY,
      commentedby INT NOT NULL REFERENCES users(id) ON DELETE CASCADE ON UPDATE CASCADE,
      comment TEXT NOT NULL,
      datecreation DATE NOT NULL DEFAULT CURRENT_DATE
    )`;

const createQueries = `${usersTable}; ${meetupsTable}; ${questionsTable}; ${rsvpsTable}; ${votesTable}; ${commentsTable};`;

pool.query(createQueries)
  .then((res) => {
    console.log(res);
    pool.end();
  })
  .catch((err) => {
    console.log(err);
    pool.end();
  });
pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});
};

export {
drop,
create,
pool
};

require('make-runnable');
