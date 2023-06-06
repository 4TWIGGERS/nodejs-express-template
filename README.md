# Nodejs Express Template

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/) version 8.0.0


# Getting started
- Clone the repository
```
git clone https://github.com/4TWIGGERS/nodejs-express-template.git
```
- Add ".env" in .gitignore
```
node_modules
yarn.lock
package-lock.json
+ .env
```

- Install dependencies
```
cd nodejs-express-template
yarn
```
- Run the project
```
yarn start
```
  Navigate to `http://localhost:<PORT in .env file>`

## Project Structure
The folder structure of this app is explained below:

| Name | Description |
| ------------------------ | --------------------------------------------------------------------------------------------- |
| **/config**        | Database configuration
| **/controllers**      | Controllers define functions to serve various express routes. 
| **/middlewares**      | Express middlewares which process the incoming requests before handling them down to the routes
| **/routes**           | Contain all express routes, separated by module/area of application                       
| **/models**           | Models define schemas that will be used in storing and retrieving data from Application database  |
| **/index.js**         | Entry point to express app                                                               |
| **package.json**             | Contains npm dependencies as well as [Running scripts](#what-if-a-library-isnt-on-definitelytyped)   |
| **.env**             | Contains environment variables   |

### package.json
Some packages may become outdated so be sure to update them to the latest version
```json
{
  "name": "nodejs-express-template",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.20.2",
    "cors": "^2.8.5",
    "dotenv": "^16.1.4",
    "express": "^4.18.2",
    "express-pino-logger": "^7.0.0",
    "mongodb": "^5.6.0",
    "nodemon": "^2.0.22",
    "pino": "^8.14.1"
  }
}
```
