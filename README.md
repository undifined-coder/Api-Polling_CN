# Api-Polling_CN

Polling Api an API where anyone can create questions with options and also add votes to it

Tech Stack:
Node js , Express, Mongodb,Mongoose

**** Features***************

- Create a question (you can add as many questions as you want)
- Add options to a question
- Add a vote to an option of question
- Delete a question → (optional: A question can’t be deleted if one of it’s options has votes)
- Delete an option → (optional: An option can’t be deleted if it has even one vote given to it)
- View a question with it’s options and all the votes given to it
- Required Routes (Remember, in a real test, you won’t be given routes mostly)
- /questions/create (To create a question)
- /questions/:id/options/create (To add options to a specific question)
- /questions/:id/delete (To delete a question)
- /options/:id/delete (To delete an option)
- /options/:id/add_vote (To increment the count of votes)
- /questions/:id (To view a question and it’s options)


Has-

Config 
           -Mongoose
Controllers
           -Question and Option
Model
          -Option And Question
Routes-
       -Api
           -V1
              -option
              -Question


index.js
