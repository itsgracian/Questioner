import {Pool} from "pg";
import dotenv from "dotenv";

dotenv.config();

const pool=new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on("connect",()=>{
  console.log("connected to the database");
});

const createTables=()=>{
  const queryText=`
  CREATE TABLE public.users
  (
      id serial PRIMARY KEY NOT NULL,
      firstname character varying(100) NOT NULL,
      lastname character varying(100) NOT NULL,
      username character varying(100) NOT NULL,
      othername character varying(100),
      email character varying(100) NOT NULL,
      password character varying(100) NOT NULL,
      phonenumber character varying(64) NOT NULL,
      isadmin boolean NOT NULL DEFAULT false,
      registered date NOT NULL DEFAULT ('now'::text)::date

  );
  CREATE TABLE public.meetups
  (
      meetup_id serial PRIMARY KEY NOT NULL,
      topic character varying(200) NOT NULL,
      location character varying(100) NOT NULL,
      images character varying(200)[] ,
      happening date NOT NULL,
      "createdOn" date NOT NULL DEFAULT ('now'::text)::date,
      tags character varying[]

  );
  CREATE TABLE public.questions
  (
      question_id serial PRIMARY KEY  NOT NULL,
      user_id integer NOT NULL,
      meetup integer NOT NULL,
      title character varying NOT NULL,
      body text NOT NULL,
      CONSTRAINT "meetup_fkey_from_meetupsTable" FOREIGN KEY (meetup)
          REFERENCES public.meetups (meetup_id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE CASCADE,
      CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (user_id)
          REFERENCES public.users (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE CASCADE
  );
  CREATE TABLE public.comments
  (
      comment_id serial NOT NULL,
      comment text  NOT NULL,
      question bigint NOT NULL,
      commentedby integer NOT NULL,
      "dateCreation" date NOT NULL DEFAULT ('now'::text)::date,
      CONSTRAINT comments_pkey PRIMARY KEY (comment_id),
      CONSTRAINT "question_fkey_from_questionsTable" FOREIGN KEY (question)
          REFERENCES public.questions (question_id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE CASCADE,
      CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (commentedby)
          REFERENCES public.users (id) MATCH SIMPLE
          ON UPDATE NO ACTION
          ON DELETE CASCADE
  );
  CREATE TABLE public.votes
  (
      vote_id serial NOT NULL,
      users_id bigint NOT NULL,
      question_id bigint NOT NULL,
      upvotes numeric,
      downvotes numeric,
      CONSTRAINT votes_pkey PRIMARY KEY (vote_id)
  );
  CREATE TABLE public.rsvp
  (
      rsvp_id serial NOT NULL DEFAULT,
      user_id bigint NOT NULL,
      meetup bigint NOT NULL,
      response character varying COLLATE pg_catalog."default" NOT NULL,
      CONSTRAINT rsvp_pkey PRIMARY KEY (rsvp_id)
  );`;

  pool.query(queryText)
   .then((res)=>{
     console.log(res);
     pool.end();
   })
   .catch((err)=>{
     console.log(err);
     pool.end();
   })
}

//@drop table
const drop=()=>{
  const queryText=`
  DROP TABLE IF EXISTS users;
  DROP TABLE IF EXISTS meetups;
  DROP TABLE IF EXISTS questions;
  DROP TABLE IF EXISTS comments;
  DROP TABLE IF EXISTS votes;
  DROP TABLE IF EXISTS rsvp;
  `
  pool.query(queryText)
   .then((res)=>{
     console.log(res);
     pool.end();
   })
   .catch((err)=>{
     console.log(err);
     pool.end();
   })
}

pool.on("remove",()=>{
  console.log("removed successfully.");
  process.exit(0);
});

module.exports={
  createTables,
  drop
};

require("make-runnable");
