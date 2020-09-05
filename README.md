# Affirmations-Backend
The backend server for the Affirmations app

## Models / Schema

### User Model

| Column Name | Data Type | Notes | Todo |
| --------------- | ------------- | ------------------------------ | --- |
| id | Object_id | Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| date | Date | default as current date | ❓ maybe don't need
| volunteer | Boolean | if user want to signup to be volunteer | 📍 checkbox
| phone | String | phone number for volunteer | 📍
| lacation | String | user's location | 📍 
| mood | Interger | user's mood | 📍 after login 

### Affirmations Model 

| Column Name | Data Type | Notes | Todo |
| --------------- | ------------- | ------------------------------ | ------- |
| quote | String | Content of the quote | 📍
| quotId | Integer | Id of the quote | 📍
| like | Array of objects | Array of users's object_id | 📍
| comments | Array of Objects | {userId, userName, like} | 📍

## Routes

| Method | Path | Location | Purpose | Todo |
| ------ | ---------------- | -------------- | ------------------- | -------- |
| GET | api/users/test (Public) | users.js | Postman testing |
| POST | api/users/register (Public) | users.js | Signup form |
| POST | api/users/login (Public) | users.js | Login form |
| POST | - | - | Add comment | 📍 GET/PUT/DELETE for commons??? 
| POST | - | users.js | Add Mood | 📍 GET/PUT for mood?? 
| GET | - | users.js | Get volunteers' phone number for resource page | 📍
