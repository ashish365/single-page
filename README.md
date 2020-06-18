# SINGLE-PAGE

It's a Single page web application having login/logout functionality built using React.JS

# Installation
1. Downloaded **Node.JS**
2. Install **Create-React-app** by using command in your terminal or cmd:  
`npm init react-app my-app` as **npm** is availabe to us when we download Node.JS.
3. You can also  use command:  `yarn create react-app my-app` but for that you'll have to install **Yarn** first. Yarn is  ust faster compared to npm when it comes to creation.
4. Install React-router-dom using command: 
`npm install --save react-router-dom`  It contains the **DOM** bindings for **React Router**. In other words, the **router** components for websites.
5. Install **Styled Components** for styling your webpage  by running command:
 `npm install --save styled-components` 

## Project Folder Structure

 - [**Note**: The folder tree does not include sub-directories for common/generated folders. For example - `node_modules`.] 
 

> --single-page
>  |------>node_modules 
>  |------>public 
>  |------>src
> |------|------->Components 
> |---------------|------->Login.js
> |---------------|------->Logout.js 
> |---------------|------->User.js
> |------|------->App.js 
> |------|------->App.test.js
> |------|------->Config.js 
> |------|------->index.js
> |------|------->index.css 
> |------|------->serviceWorker.js
> |------|------->setupTest.js 
> |------>.gitignore 
> |------>package.Json
> |------>package-lock.Json 
> |------>README.md

## WORK-FLOW

 1. Creating 3 different components that are Login.js, User.js and Admin.js
 2. We have to implement them in a single  page web-app.
 3. Importing them into our App.js after their creation is  done.
 4. So basically if the user logs in, if he's Admin he will be welcomed into the Admin.js page and users other than admin into the User.js
 5. After Logging Out,  user will be taken back to the  login page. 


## Username Validation

The person who is logging in has to see the username and password from the `Config.js` file where a normal user and admin is declared in an array with there usernames and passwords and that would only work if someone wants to log In as it's hardcoded for right now.
## Connecting your DataBase
    By database we mean SQL/NoSQL database, then roughly what we need:

 1. Install chosen database server
 2. Get database binding/driver library and import it in your node.js application.
 3. Connect to database and fetch / insert / update data.
