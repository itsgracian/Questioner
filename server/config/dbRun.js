import pool from "./connection";

class RunTable{
    constructor(){
        this.create();
    }
    create(){
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
     pool.query(userTable)
      .then(user=>{
          console.log(user);
      })
      .catch(tblErr=>{
          console.log(tblErr);
      })

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
    pool.query(meetupTable,(errs,meetups)=>{
        if(errs){
            console.log(errs);
        }
        console.log(meetups);
    })

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
            ON DELETE NO ACTION,
        CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (user_id)
            REFERENCES public.users (id) MATCH SIMPLE
            ON UPDATE NO ACTION
            ON DELETE NO ACTION
    )`;
    pool.query(questionTable,(er,question)=>{
        if(er){
            console.log(er);
        }
        console.log(question);
    })
    //@user id foreign key
    const userFkey=`CREATE INDEX IF NOT EXISTS "fki_user_fkey_from_usersTable"
    ON public.questions USING btree (user_id)`;
    pool.query(userFkey,(eror,uFkey)=>{
        if(eror){
            console.log(eror);
        }
        console.log(uFkey);
    });
    //@meetup foreign key
    const meetupFkey=`CREATE INDEX  IF NOT EXISTS "fki_meetup_fkey_from_meetupsTable"
    ON public.questions USING btree
    (meetup)`;
    pool.query(meetupFkey,(eror,MFkey)=>{
        if(eror){
            console.log(eror);
        }
        console.log(MFkey);
    });

    //@votes table
    const voteTable=`CREATE TABLE  IF NOT EXISTS votes(
        vote_id bigserial NOT NULL,
        users_id bigint NOT NULL,
        question_id bigint NOT NULL,
        upvotes numeric DEFAULT 0,
        downvotes numeric DEFAULT 0,
        CONSTRAINT votes_pkey PRIMARY KEY (vote_id))`;
        pool.query(voteTable,(errVt,votes)=>{
            if(errVt){
                console.log(errVt);
            }
            console.log(votes);
        })
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
                ON DELETE NO ACTION,
            CONSTRAINT "user_fkey_from_usersTable" FOREIGN KEY (commentedby)
                REFERENCES public.users (id) MATCH SIMPLE
                ON UPDATE NO ACTION
                ON DELETE NO ACTION )`;
        pool.query(commentTable,(errCt,comments)=>{
            if(errCt){
                console.log(errVt);
            }
            console.log(comments);
        })
    //foreign key questions
    const qFKey=`CREATE INDEX IF NOT EXISTS "fki_question_fkey_from_questionsTable"
    ON public.comments USING btree
    (question)`;
    pool.query(qFKey,(qErr,qForeign)=>{
        if(qErr){
            console.log(qErr);
        }
        console.log(qForeign);
    })
    //foreign key for user
    const uFkey=`CREATE INDEX IF NOT EXISTS "user"
    ON public.comments USING btree
    (commentedby)`;
    pool.query(uFkey,(uErr,uForeign)=>{
        if(uErr){
            console.log(uErr);
        }
        console.log(uForeign);
    })
    //rsvp table
    const rsvpTable=`CREATE TABLE  IF NOT EXISTS rsvp(
        rsvp_id bigserial NOT NULL,
        user_id bigint NOT NULL,
        meetup bigint NOT NULL,
        response character varying COLLATE pg_catalog."default" NOT NULL,
        CONSTRAINT rsvp_pkey PRIMARY KEY (rsvp_id) )`;
        pool.query(rsvpTable,(rsvpErr,rsvp)=>{
            if(rsvpErr){
                console.log(rsvpErr);
            }
            console.log(rsvp);
        })
    }
}

export default new RunTable();