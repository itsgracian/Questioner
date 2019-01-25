class InitializeDb {
    constructor() {
        this.pool = new Pool({
            user: process.env.DBUSER,
            host: process.env.DATABASABE_URL,
            database: process.env.DBS,
            password: process.env.DBPASSWORD,
            port: process.env.PORT,
        });

        this.connect = async () => this.pool.connect();

        /**
         * scripts for creating tables
         */
        this.userTable = `
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
        `;
        this.meetupTable = `
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
    `;
        this.questionTable = `
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
    `;/**
     * questions are related to meetups
     */
        this.commentTable = `
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
    `;
        /**
         * comments are related to questions
         */
        this.voteTable = `
        CREATE TABLE public.votes
        (
            vote_id serial NOT NULL,
            users_id bigint NOT NULL,
            question_id bigint NOT NULL,
            upvotes numeric,
            downvotes numeric,
            CONSTRAINT votes_pkey PRIMARY KEY (vote_id)
        );`;

        this.rsvpTable = `
        CREATE TABLE public.rsvp
        (
            rsvp_id serial NOT NULL DEFAULT,
            user_id bigint NOT NULL,
            meetup bigint NOT NULL,
            response character varying COLLATE pg_catalog."default" NOT NULL,
            CONSTRAINT rsvp_pkey PRIMARY KEY (rsvp_id)
        );
    `;
        /**
         * images that are related to meetups
         */
        this.startDb();
    }
    /**
     * execute the queries to create tables if not exist
     */
    async startDb() {
        await this.executeQuery(this.userTable);
        await this.executeQuery(this.meetupTable);
        await this.executeQuery(this.questionTable);
        await this.executeQuery(this.rsvpTable);
        await this.executeQuery(this.voteTable);
        await this.executeQuery(this.commentTable);
    }
    /**
     *
     * @param {*each request} query
     * @param {*return response for the queries passed} data
     */
    async executeQuery(sql) {
        const connection = await this.connect();
        try {
            await connection.query(sql);
        } catch (error) {
            return error;
        } finally {
            /**
             * release the connection
             */
            connection.release();
        }
    }
}
export default new InitializeDb();
