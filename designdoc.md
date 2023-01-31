# Unicorn Backend Bootcamp Design Process

This is my submission for the Unicorn Backend Project for Web Development at Berkeley (WDB). This was created in 5 hours with minimal background knowledge in creating APIs but maximum determination to learn the ropes.


# Background Knowledge

The prior skills I had to work with before starting this project:
1) Basic Knowledge of React (built a web app over Winter Break)
2) Basic Knowledge of Firebase Firestore DBs (built a web app over Winter Break)
3) Intermediate Knowledge of getting data from APIs (useful in my Discord Bots)

# Initial Thought Process

I broke down the tasks into a couple of parts

1. Creating a NoSQL Database
    * Let's try **MongoDB** as it was recommended by WDB
2. Choose a JS Framework to Work With
    * Let's use **NextJS** over **ExpressJS** due to **NextJS** being a meta-framework for **React**, something I knew decently well
3. Create functions for GET and POST requests for each API route

# Actual Process

1. Creating a NoSQL Database
    * Tried installing **MongoDB Compass** and creating a database for unicorns and rides
    * The setup took quite a long time and ended up being buggy, so I decided to switch to **Firebase** Firestore (something I'm more comfortable with)
2. Working with **NextJS** to Create the API
    * Created a **NextJS** starter app and created the `unicorns` and `ride` API routes, with their respective GET and POST handling functionalities
    * Created two functions (`getAllDataFromDB()` and `addDataToDB()`) that were supposed to deal with reading/writing to the database
    * However, my initial implementation didn't account for asynchronicity and thus the GET request was returning an empty collection
    * The biggest bug (one that took an hour of skimming the **Firebase** docs for) occured with `.onSnapshot()`, which is supposed to query all the data from the **Firestore** database, but had issues with synchronicity (as this method was meant to be used WITHIN **React** components). 
    * Ultimately, I found another method that is less commonly used, .get(), to asynchronously get all the data and awaited the request
3. Cleaning Up
    * Instead of repeating the same functions, I created a helper library with customizable parameters to allow all the API routes to use the same method
    * Formatted the code nicely and removed further redundancies 
4. Testing with **Postman**
    * Created an account and tested all Bootcamp Tasks
    * Everything worked except for the POST request hanging 
    * Realized that I forgot to close the request using `req.end()` for POST requests and fixed the issue, causing all tests to work

# Future Progress

I only had Monday after class to work on this (from 5-11 PM), and was barely able to finish the Bootcamp tasks due to time issues. However, I feel confident in my ability to solve the Industry Tasks and will get to some of them before my interview. 
