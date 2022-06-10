/*
* 1 : Create a node server with 5 steeps
* 1.1.Create folder
* 1.2.npm install
* 1.3.npm i express cors mongodb
* 1.4.start-dev:nodemon index.js in package.json file
* 1.5.Create index.js
* 1.6.use 5 steps to create a node server
*
*
*------------------
* Create Atlas Account 
*-----------------
* 1.sing up google access
* 2.Create cluster
* 3.Create user dbUser and password
* 4.Network access --> ip address : allow all
* 5.database > connect > code copy in paste in index.js
*---------------
*CRUD operation
*--------------
* 1.node mongodb CRUD > Fundamentals
* 2.Create async run function
*--------------------------------
* Integrate sending data from client side
*-------------------------------------
* 1. Client Side create from
* 2. on submit get form data and create user object
* 3.on server : create user post method to receive data on the backend
* 4. no client side : set fetch with post ,headers,bode 
* 5. make sure you return a json from the post API
*-----------------------------
*LOAD Data to The database of client side
* 1.create get API on the server
* 2.create a query object 
* 3. collection.find(query)
* 4.cursor.toArray()
* 5.return the result
*/