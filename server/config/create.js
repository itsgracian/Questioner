import {Pool} from "pg";

const pool=new Pool({
    connectionString:process.env.DATABASE_TEST
});

const dropTable=()=>{
    const  users=`DROP TABLE IF EXISTS users`;
    const meetup=`DROP TABLE IF EXISTS meetups`;
    const questions=`DROP TABLE IF EXISTS questions`;
    const rsvp=`DROP TABLE IF EXISTS rsvp`;
    const  votes=`DROP TABLE IF EXISTS votes`;
    const combineQuery=`${users}; ${meetup}; ${questions}; ${rsvp}; ${votes}`;
    //@run query to drop
    pool.query(combineQuery)
    .then(data=>{
        console.log(data);
        pool.end();
    })
    .catch(error=>{
        console.log(error);
        pool.end();
    })
}
const create=()=>{
     const userTable= `CREATE TABLE  IF NOT EXISTS users(
         id serial NOT NULL ,
         firstname character varying(100)   NOT NULL,
         lastname character varying(100)   NOT NULL,
         othername character varying ,
         email character varying  NOT NULL,
         password character varying  NOT NULL,
         username character varying  NOT NULL,
         phonenumber character varying  NOT NULL,
         isadmin boolean NOT NULL DEFAULT false,
         registered date NOT NULL DEFAULT CURRENT_DATE,
         avatar character varying(255) ,
         CONSTRAINT users_pkey PRIMARY KEY (id));`;
      //@creating meetup table
      const meetupTable=`CREATE TABLE  IF NOT EXISTS meetups(
          meetup_id bigserial NOT NULL,
          topic character varying(200) COLLATE pg_catalog."default" NOT NULL,
          location character varying(200) COLLATE pg_catalog."default" NOT NULL,
          images character varying[] COLLATE pg_catalog."default",
          happening date,
          "createdOn" date,
          tags character varying[] COLLATE pg_catalog."default",
          CONSTRAINT meetups_pkey PRIMARY KEY (meetup_id));`;

    //@questions table
    const questionTable=`CREATE TABLE  IF NOT EXISTS questions(
        question_id bigserial NOT NULL,
        user_id integer NOT NULL,
        meetup integer NOT NULL,
        title character varying COLLATE pg_catalog."default" NOT NULL,
        body text COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT questions_pkey PRIMARY KEY (question_id),
        CONSTRAINT "meetup_fkey_from_meetupsTable" FOREIGN KEY (meetup)
            REFERENCES public.meetups (meetup_id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE CASCADE,
        CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (user_id)
            REFERENCES public.users (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION)`;

    //@user id foreign key
    const userFkey=`CREATE INDEX IF NOT EXISTS "fki_user_fkey_from_usersTable"
    ON public.questions USING btree (user_id)`;
    //@meetup foreign key
    const meetupFkey=`CREATE INDEX  IF NOT EXISTS "fki_meetup_fkey_from_meetupsTable"
    ON public.questions USING btree
    (meetup)`;


    //@votes table
    const voteTable=`CREATE TABLE  IF NOT EXISTS votes(
        vote_id bigserial NOT NULL,
        users_id bigint NOT NULL,
        question_id bigint NOT NULL,
        upvotes numeric DEFAULT 0,
        downvotes numeric DEFAULT 0,
        CONSTRAINT votes_pkey PRIMARY KEY (vote_id))`;
        //comment table
    const commentTable=`CREATE TABLE  IF NOT EXISTS comments(
        comment_id bigserial NOT NULL,
        comment text  NOT NULL,
        question bigint NOT NULL,
        commentedby integer NOT NULL,
        "dateCreation" date NOT NULL DEFAULT CURRENT_DATE,
        CONSTRAINT comments_pkey PRIMARY KEY (comment_id),
        CONSTRAINT "question_fkey_from_questionsTable" FOREIGN KEY (question)
            REFERENCES public.questions (question_id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE  CASCADE,
        CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (commentedby)
            REFERENCES public.users (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION )`;

    //foreign key questions
    const qFKey=`CREATE INDEX IF NOT EXISTS "fki_question_fkey_from_questionsTable"
    ON public.comments USING btree
    (question)`;

    //foreign key for user
    const uFkey=`CREATE INDEX IF NOT EXISTS "user"
    ON public.comments USING btree
    (commentedby)`;

    //rsvp table
    const rsvpTable=`CREATE TABLE  IF NOT EXISTS rsvp(
        rsvp_id bigserial NOT NULL,
        user_id bigint NOT NULL,
        meetup bigint NOT NULL,
        response character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT rsvp_pkey PRIMARY KEY (rsvp_id) )`;
    
    //@combine table
    const combineTable=`${userTable};${meetupTable};${questionTable};${userFkey};${meetupFkey};${voteTable};
    ${commentTable};${qFKey};${uFkey};${rsvpTable}`;
    pool.query(combineTable)
    .then(tables=>{
        console.log(tables);
        pool.end();
    })
    .catch(err=>{
        console.log(err);
        pool.end();
    })
    }

export{
    dropTable,
    create,
    pool
}