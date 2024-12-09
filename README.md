# ChefIT - 2024

## Tech stack
* MongoDB
* Express
* Svelte & SvelteKit
* NodeJS

## How to run
1. Clone this repository:
```bash
git clone https://github.com/Ropler6/Proba-IT-2024
cd Proba-IT-2024x
```

2. Install the frontend dependencies and start the frontend:
```bash
cd frontend
npm install
npm run dev
```

3. Make sure you have MongoDB installed on your system;

4. Install the backend dependencies and start the backend:
```bash
cd ..
cd backend
npm install
npm run backend-start
```
* The backend can be stopped using `npm run backend-stop`;
* Note: the `backend-start` and `backend-stop` commands were designed to work on Linux;

5. Go to `http://localhost:5173` in the browser of your preference;

6. Enjoy!

## Completed tasks
* in short: virtually all mandatory task have been completed
* homepage
    * top-rated recipes: fetched from the database and displayed from best to worst rated
        * note: if there are no recipes, the "Top rated" section will be empty
        * note 2: currently there is no way to change the rating of a recipe through the website
        * note 3: a recipe with a custom rating can be created by sending an HTTP `POST` request to 
`localhost:3000/recipes` with the `body` property (x-www-form-urlencoded in Postman) containing:
            * `email`: the email of a registered user
            * `name`: the name of the recipe
            * `rating`: the rating of the recipe
            * `description`: the description of the recipe
    * database & endpoint: stores user-created recipes and returns requested recipes
* profile page
    * view user data
    * logout button
* register & login pages
    * register/login the user
    * save/fetch data to/from the database
    * save a cookie to keep track of the user
* recipes page
    * view recipes in the database
    * sort recipes in ascending/descending order
    * filter recipes based on their rating
* addrecipes page
    * adding recipes to the database (with a confirmation message)

## What I learned from this project
* working with MongoDB and Express
    * setting up a database locally
    * creating API endpoints for said database
    * backend-frontend interaction
* HTTP status codes meaning & usage
* working with Postman
