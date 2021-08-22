
# storeAPI


 A project created for the end of module 4 of Resília Educação, it was made to simulate a system of stores in a dental companies, 
the stores are composed by ID, CNPJ, ADDRESS, STORE EMAIL, STORE PHONE and the number of employees (HEADCOUNT).

To have a better view of how the api works, click on the link: https://still-atoll-05418.herokuapp.com/store

NOTE: put in the parameter at the end of the link  `/store` 


## Project start
First at the terminal type the command to download the dependencies of this project.
> ```
>  npm install
> ```
After downloading, use the npm start command to start.
> ```
>   npm start
> ```
## Routes

   The project was built following the rest pattern with the 4 necessary HTTP verbs: Get,Post,Put and Delete, with that the CRUD system was applied, to read, create, update and delete.

### Method GET (Read)

- To query all system stores, with a request tester in the get method use the route :`http://localhost:3000/store` .

![](https://i.imgur.com/dcTrVLB.png)

​                                    <!--example done in insommnia program.-->
- If the request is all right, it will receive this as an response, if it gives an error, it will be the answer containing the error.

![](https://i.imgur.com/9fG33zl.jpg)

​                                    <!--example done in insommnia program.-->

- To find a specific store in the system, use the route with the same method in the program : `http://localhost:3000/store/:id` ,replace `:id` with the cnpj of the store you want to find.

​                        ![](https://i.imgur.com/eVwjHK6.jpg)

​                       <!--example done in insommnia program.-->
- If the request is all right, it will receive this as an response, if it gives an error, it will be the answer containing the error.

![](https://i.imgur.com/lDwL1Gh.jpg)

​                                    <!--example done in insommnia program.-->

### Method POST (Create)

- To insert a new store, now using the POST method in the program, use the route : `localhost:3000/store` route with the following data as in the example below.

​              ![](https://i.imgur.com/OhndqpN.jpg)

​                                    <!--example done in insommnia program.-->

- If the request is all right, it will receive this as an response, if it gives an error, it will be the answer containing the error.

![](https://i.imgur.com/bXXH0fV.jpg)

​                                    <!--example done in insommnia program.-->


### Method PUT (Update)

- To update data from a store, now with the PUT method use the route `localhost:3000/:id` replace `:id` with the cnpj of the store and with the fields you want to update.

​             ![](https://i.imgur.com/St5PJy7.jpg) 
                                    <!--example done in insommnia program.-->
                                    

- If the request is all right, it will receive this as an response, if it gives an error, it will be the answer containing the error.

![](https://i.imgur.com/lL6I4ZA.jpg)

​                                    <!--example done in insommnia program.-->                                    

### Method DELETE (Delete)

- Finally, to delete a store from the system, use the route `localhost:3000/:id`,replace the `:id `with the cnpj of the store you want to delete

​                           ![](https://i.imgur.com/9qQciyQ.jpg)

- If the request is all right, it will receive this as an response, if it gives an error, it will be the answer containing the error.

![](https://i.imgur.com/ikMN4H7.jpg)

​                                    <!--example done in insommnia program.-->    



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

  

