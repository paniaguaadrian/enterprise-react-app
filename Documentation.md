## Folder Structure

## SRC - Root

- index.tsx => Root file, stater point and where the store of redux, ReactDom etc... lives.

## SRC / api

- axios.ts => Where we create a rehusable component to make calls to our external api

### Note about the api

- Is created with "json-server" & "json-server-auth" as -D dependencies.
- Created a script on package.json to execute the BE.
- Script => "backend": "json-server --watch db.json --port 3001"

### More about the api

- It creates a db.json in the root of the project. We can change this data at our wish.
- Also, we need to create a sale-type.ts file (inside src/models) to create a new type of sale. Meaning we're building a model/type (for TS) of the data comming from the DB, on that case, with a name: string, and a data: as an array of numbers.
- Finally we need to create a salesService.ts file (inside src/services) to create a api call (atm just .get()) with the endpoint created on the axios.ts and using the model of sale-type.ts

## SRC / app

- index.tsx => This is like the app.js file on my apps. It handles the mainLayout, global Styles, React Helmet and BrowserRouter to handle the Routes of the project.

- routes.tsx => This is where we create the routes of the project.

## SRC / app / components

- Little and rehusable components to use on layouts and views "screens".

## SRC / app / layouts

- ATM here we can see the 2 navbars that we are using, one for the pages like Home, About... and another one for the Dashboard.
- Both layouts has a index.tsx file to handle them with the props and ReactNode components.

## SRC / app / views

- Here we will find the "screens", "pages", "views", the last component that shows the FE to the user.
