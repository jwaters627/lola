# lola
Project for Lola interview process

To Run:  Pull the project down and run "npm install" to install dependencies and then "npm start" to run the project with webpack-dev-server and navigate to localhost:8080 to view. 

Approach to designing:   To handle the data and make it easier to render the plane I will create functions to first organize the seats into rows by iterating through the seat objects and populating a new “plane” object with each row as a key and an array of each seat in that row as the value.  Next I will send that object of the seats organized into rows into a function to go through each row and order them based on the seat.  And finally I will send that “plane” object organized by row and seat into a final function to figure out where the missing seats are and put in an “aisle” object.  

To render the plane I will have a main container to represent the plane that will sit in the middle of the page.  Inside the main container I will create a “row” component that will be passed in the array of seats.  The row container will have a different color based on the class of seat and finally each seat with be passed into a “seat” component that will return a square that will be styled according to the attributes of the seat like whether it is occupied or not or overwing or premium.

With more time I would think more about design and try to make it look more like a plane.  I would maybe add a feature to allow selecting multiple seats if you are buying for more than one person.  Seek more relevant information like seat price to show on hover. Show where the emergency exits and bathrooms are.
