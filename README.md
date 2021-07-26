
# storeAPI


 A project created for the end of module 4 of Resília Educação, it was made to simulate a system of stores in a dental companies.


## Project start

> ```
> At the terminal type the command `npm install` to download the dependencies of this project. After downloading, use the `npm start` command to start.
> ```

## Routes

   The project was built following the rest pattern with the 4 necessary HTTP verbs: Get,Post,Put and Delete, with that the CRUD system was applied, to read, create, update and delete.

### Method GET (Read)

- To query all system stores, with a request tester in the get method use the route :`http://localhost:3000/store` .

![](https://i.imgur.com/dcTrVLB.png)

​                                    <!--example done in insommnia program.-->

- To find a specific store in the system, use the route with the same method in the program : `http://localhost:3000/store/:cnpj` ,replace `:cnpj` with the cnpj of the store you want to find.

​                        ![](https://i.imgur.com/bDguoFy.png)

​                                    <!--example done in insommnia program.-->

### Method POST (Create)

- To insert a new store, now using the POST method in the program, use the route : `localhost:3000/store` route with the following data as in the example below.

  ​               ![](https://i.imgur.com/DyzJshH.png)

​                                    <!--example done in insommnia program.-->

### Method PUT (Update)

- To update data from a store, now with the PUT method use the route `localhost:3000/:cnpj` replace `:cnpj` with the cnpj of the store and with the fields you want to update.

  ![](https://i.imgur.com/lznNZqk.png)

​                                     <!--example done in insommnia program.-->

### Method DELETE (Delete)

- Finally, to delete a store from the system, use the route `localhost:3000/:cnpj`,replace the `:cnpj `with the cnpj of the store you want to delete

​                           ![](https://i.imgur.com/FKZAVgY.png)



## Tests

- to test the model or the routes, type in the terminal:

  ```
  npm test
  ```

  

## Tools Used 

- NodeJs

- Express

- Sequelize

- Mocha.js and Chai.js

  

