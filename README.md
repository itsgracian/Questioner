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
### #Users API
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
|
|
|