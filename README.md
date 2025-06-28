# React + Vite

Ths project covers the exercices 20 of the fullstack open course - PART 11.

The source code is based on the exercice of the Part 6 "Anecdotes"

The puprose of this exercice 11.20 "Build a similar CI/CD-pipeline for some of your own applications. Some of the good candidates are the phonebook app that was built in parts 2 and 3 of the course, or the blogapp built in parts 4 and 5, or the Redux anecdotes built in part 6. You may also use some app of your own for this exercise."

This project is deployed via a pipeline on two disctinct render webservices: one for the frontend and the other one for the "json-server" based backend.

The major issue was to be able to solve the cors problem resulting from this splitted déployment.
I started by§ deploying everything (front + back) in the same render Webservice but definitively, I didn't find a way to solve the communication between front and back.

I found on the internet that JSON-SERVER is not directly able to manage this kind of cors issue and it should be necessary ti build a small code around it (in the server.js file).
At that point, I spent a lot of time to find a way to execute the code (seeing runtime error). Finally, I discovered an Blog article mentionning that the last versions of json-server are not able to be encapsulated in that way.
I had to downgrade the JSON-SERVER to a former version (i.e 0.17.4) and bingo, I could manage that way the cors point.

That was a long and hard exercice but indeed very interesting in terms of practice and knowledge.

Eric
