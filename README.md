# Questioner

Questioner helps the meetup organizer prioritize questions to be answered.
Other users can vote on asked questions and they bubble to the top or bottom of the log.


[![Build Status](https://travis-ci.com/itsgracian/Questioner.svg?branch=develop)](https://travis-ci.com/itsgracian/Questioner)
[![Coverage Status](https://coveralls.io/repos/github/itsgracian/Questioner/badge.svg?branch=develop)]
[![Maintainability](https://api.codeclimate.com/v1/badges/4f0320ef536642de8d46/maintainability)](https://codeclimate.com/github/itsgracian/Questioner/maintainability)

# Frontend
* Only Vanilla JavaScript, (No Frontend Framework)
* HTML
* CSS

# Backend:
* [Express](https://expressjs.com/)
* [Nodejs](https://nodejs.org/en/)

# Installation
```

git clone https://github.com/itsgracian/Questioner

cd questioner

npm install

```
# To start the server
```

npm start


# To Start the server using nodemon package
```

npm run dev

# Running Test
```

npm test

```

# APP is hosted on Heroku
Use this link on heroku https://protected-beach-95106.herokuapp.com

# API Reference
### # Users API
|  API METHODS                                    |  API URL                                                 | DESCRIPTIONS
|----------------------|--------------------------------------------------------------------------------|-----------------------
| POST                  | https://protected-beach-95106.herokuapp.com/api/v1/signup| this allows user to create account.
|POST                  | https://protected-beach-95106.herokuapp.com/api/v1/signin | this allows user to signin or login to his/her account
| GET                   | https://protected-beach-95106.herokuapp.com/api/v1/users/username| this allows other users to find user by username
| PATCH              | https://protected-beach-95106.herokuapp.com/api/v1/users | it allows user to update account
| PATCH              | https://protected-beach-95106.herokuapp.com/api/v1/users/change-password | It allows users to change their password
| GET                  | https://protected-beach-95106.herokuapp.com/api/v1/users/current/user | It allows to find current user who logged in
| PATCH             | https://protected-beach-95106.herokuapp.com/api/v1/users/profile/picture| It allows users to change their profile picture
| DELETE          | https://protected-beach-95106.herokuapp.com/api/v1/users | It allows User to delete his/ her account 

#### Meetups API
|  API METHODS                                    |  API URL                                                 | DESCRIPTIONS
|----------------------|--------------------------------------------------------------------------------|-----------------------
| POST                  | https://protected-beach-95106.herokuapp.com/api/v1/meetups| this allows user to create meetups but this works only for user who are admin
| GET                    | https://protected-beach-95106.herokuapp.com/api/v1/meetups | this allows users to view all created meetups
| GET                    | https://protected-beach-95106.herokuapp.com/api/v1/meetups/v/:id | this allows users to view single meetup and its number of created questions.
| GET                    | https://protected-beach-95106.herokuapp.com/api/v1/meetups/v/questions/:meetupId | It allows users to view asked questions on single meetup.
| GET                    | https://protected-beach-95106.herokuapp.com/api/v1/meetups/m/upcoming | It allows users to view upcoming meetups
| DELETE             | https://protected-beach-95106.herokuapp.com/api/v1/meetups/:id | this allow user to delete meetup but this route works only for user who are admin
| PATCH               | https://protected-beach-95106.herokuapp.com/api/v1/meetups/:id | It allows user to update meetup but it works only for admin.
| POST                 | https://protected-beach-95106.herokuapp.com/api/v1/meetups/:id/images | It allows user to add images to a meetup and it is private route, it only works for admin.
| POST                 | https://protected-beach-95106.herokuapp.com/api/v1/meetups/:id/tags | It allows user to add tags to a meetup and it is private route, it only works for admin.

#### Questions API
|  API METHODS                                    |  API URL                                                 | DESCRIPTIONS
|----------------------|--------------------------------------------------------------------------------|-----------------------
| POST                 |  https://protected-beach-95106.herokuapp.com/api/v1/meetups/:meetupId/questions | It allows user to ask question on specific meetup.
| DELETE            |  https://protected-beach-95106.herokuapp.com/api/v1/questions/:questionId | This allows user to delete his/her question on a meetup.
| GET                   | https://protected-beach-95106.herokuapp.com/api/v1/questions | This allows user to view the question he/she asked on a meetup.
| POST                 | https://protected-beach-95106.herokuapp.com/api/v1/questions/:questionId/upvote | It allows user to upvote asked questions on specific meetup. user is only allowed to upvote question once.
| POST                 | https://protected-beach-95106.herokuapp.com/api/v1/questions/:questionId/downvote | It allows user to downvote asked questions on specific meetup. user is only allowed to downvote question once.

#### Comments API
|  API METHODS                                    |  API URL                                                 | DESCRIPTIONS
|----------------------|--------------------------------------------------------------------------------|-----------------------
| POST                  | https://protected-beach-95106.herokuapp.com/api/v1/comments/:questionId | It allows users to add comment on asked questions.
| GET                    | https://protected-beach-95106.herokuapp.com/api/v1/comments/:id | It allows users to view and edit his/her comment.
| PATCH               | https://protected-beach-95106.herokuapp.com/api/v1/comments/:id | It allows users to update his/her comment.
| DELETE            | https://protected-beach-95106.herokuapp.com/api/v1/comments/:id | This allows users to delete his/her comment.

