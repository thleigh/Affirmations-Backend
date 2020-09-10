# Affirmations-Backend
The backend server for the Affirmations app

## Models / Schema

### User Model

| Column Name | Data Type | Notes | 
| --------------- | ------------- | ------------------------------ | 
| _id | Object_id | Auto-generated |
| name | String | Must be provided |
| email | String | Must be unique / used for login |
| password | String | Stored as a hash |
| volunteer | Boolean | if user want to signup to be volunteer |
| phone | String | phone number for volunteer |

### Affirmations Model 

| Column Name | Data Type | Notes |
| --------------- | ------------- | ------------------------------ |
| _id | Object_id | Auto-generated |
| quote | String | Content of the quote | 
| author | String | author of the quote | 
| likes | Array of objects | {userId} |

### Place Model

| Column Name | Data Type | Notes | 
| --------------- | ------------- | ------------------------------ | 
| _id | Object_id | Auto-generated |
| City | String | City |
| State | String | State |
| Poi | String | Point of Interest |
| Lat | Number | Latitude |
| Lng | Number | Longitude |

## Routes

| Method | Path | Location | Purpose | Backend Used Only |
| ------ | ---------------- | -------------- | ------------------- | ----- |
| POST | api/users/register (Public) | users.js | Signup form | 
| POST | api/users/login (Public) | users.js | Login form |
| GET | api/users | users.js | Postman get all users | 🧰
| DELETE | api/users/id | users.js | Delete a user by id | 🧰
| GET | api/users/phoneNumber | users.js | Get volunteers' phone number for resource page 
|   |   |   |   |
| POST | api/affirmations | affirmation.js | Post a new quote |
| GET | api/affirmations | affirmations.js | Get all the quotes |
| GET | api/affirmations/id | affirmations.js | Get a quote by id |
| DELETE | api/affirmations/id | affirmations.js | Delete a quote by id | 🧰
| PUT | api/affirmations/id | affirmations.js | Edit a quote by id | 🧰
| PUT | api/affirmations/likes/id | affirmations.js | Add a like |
| PUT | api/affirmations/unlikes/id | affirmations.js | Remove a like |
|   |   |   |   |
| POST | api/resources | resources.js | Search a place and return lat & lng |
