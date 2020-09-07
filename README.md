# Affirmations-Backend
The backend server for the Affirmations app

## Models / Schema

### User Model

| Column Name | Data Type | Notes | Todo |
| --------------- | ------------- | ------------------------------ | --- |
| _id | Object_id | Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| volunteer | Boolean | if user want to signup to be volunteer | 📍 checkbox click to show phonebox 
| phone | String | phone number for volunteer | 📍required in frontend
| lacation | String | user's location | 📍 
| mood | Number | user's mood | 📍 when login 

### Affirmations Model 

| Column Name | Data Type | Notes | Todo |
| --------------- | ------------- | ------------------------------ | ------- |
| _id | Object_id | Auto-generated |
| quote | String | Content of the quote | 
| quoteId | Number | Id of the quote | 📍
| author | String | author of the quote | 
| likes | Array of objects | {userId} | 📍
| comments | Array of objects | {userId, likes} | 📍

## Routes

| Method | Path | Location | Purpose | Todo |
| ------ | ---------------- | -------------- | ------------------- | -------- |
| GET | api/users/test (Public) | users.js | Postman testing | 
| POST | api/users/register (Public) | users.js | Signup form | 
| POST | api/users/login (Public) | users.js | Login form |
| GET | api/users | users.js | Postman get all users |
|   |   |   |   |
| POST | api/affirmations | affirmation.js | Post a new quote |
| GET | api/affirmations | affirmations.js | Get all the quotes |
| GET | api/affirmations/id | affirmations.js | Get a quote by id |
| DELETE | api/affirmations/id | affirmations.js | Delete a quote by id |
| PUT | api/affirmations/id | affirmations.js | Edit a quote by id |
|   |   |   |   |
| PUT | - | users.js | Change username | 📍
| POST | - | - | Add comment | 📍 GET/PUT/DELETE for commons??? 
| POST | - | users.js | Add Mood | 📍 GET/PUT for mood?? 
| GET | - | users.js | Get volunteers' phone number for resource page | 📍
