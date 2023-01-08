
# React CRUD

Simple CRUD project created with:

- React (frontend)
    - React Toastify
        - To have messages displayed in a 'toast' way
    - Styled Components
        - To help style the components using CSS inside JS allowing modularity and componentization
    - Axios
        - To fetch content from the DB
- Node (API)
    - MySql
        - To allow the connection to MySQL database
    - Express
        - To controle the routes and listen to the necessary port
    - Nodemon
        - To reset the service automatically when needed
    - CORS
        - To prevent issues from handling the connection locally

    


## Installation

For the server, choose one:
- Install MySql Workbench so you will have a MySql server running;
- Use an already existing server with WAMP, XAMP, Laragon or etc.

Create a database, add a table 'users' and add the fields: 
- name;
- email; 
- phone; 
- birthdate.

Edit 'server.js' inside API folder
```bash
  app.listen(8800) //define the port to listen

```
Edit 'db.js' inside API folder

```bash
export const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "react_crud_01"
})
```
In the API folder, run
```bash
  yarn start
```
In the main folder, run
```bash
  yarn dev
```    
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)

