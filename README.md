# Haute Stuff

Live Link: https://hautestuff.herokuapp.com/home

Haute Stuff is a clone of Flickr. 
This website is for clothing brands to share their latest collections and updates. 

## Index 
| [API Routes](https://github.com/huyennguuyen/HauteStuff/wiki/API-Routes) | [Database Schema](https://github.com/huyennguuyen/HauteStuff/wiki/Database-Schema) | [Feature List](https://github.com/huyennguuyen/HauteStuff/wiki/Feature-List) |

## Technologies

- JavaScript
- Express
- VsCode
- React
- HTML
- CSS
- Sequelize


## Getting Started

1. Clone the repo.
     - `git clone https://github.com/huyennguuyen/HauteStuff.git`
2. Install dependencies in the root, frontend, and backend directories.
     - `npm install`
3. Create POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
     - `CREATE USER <name> WITH CREATEDB AND PASSWORD <’password’>`
4. Create a .env file in the backend. A .env.example was made for reference in the root directory. 
5. The user and database names can be auth_db or replaced with another. The password is set to a desired password. The JWT_SECRET should be generated securely and the port is on 5000 or can be of a different choice. 
6. A proxy should be added to the package.json of the frontend directory. The proxy can be kept the same or changed to the one set in the .env file. 
     - `“proxy” : “http://localhost:5000”`
7. To create a database, migrations, and seeders, run these commands in the terminal for the backend directory. 
     - `npx dotenv sequelize db:create`
     - `npx dotenv sequelize db:migrate`
8. npx dotenv sequelize db:seed:all
9. Run the application by starting the frontend as well as backend directory with the command.
     - `npm start`
10. The demo user can be used or create an account by signing up then logging in. 
 

## Features 

Logged in users can perform the following actions.

- Upload/View/Edit/Delete Photos
- Upload/View/Delete Comments



