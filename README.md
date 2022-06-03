# Movi Test
## _Readme_

It`s an TS architecture connected with mongoDB. This architecture was built with express and it has two endpoints.

## Features

- ## Register an user 
        -localhost:3000/user [POST]
    ```
            Body:
            {
                "name":"charly example",
                "apmat": "Bernabe",
                "appat": "Bernabe"
            }
    ```
- ## Get Users
        -localhost:3000/user [GET]
    ```
            ResponseExample:
           {
            "data": [
                {
                    "_id": "6299aa9804a396c46be86042",
                    "name": "char",
                    "appat": "Bernabe",
                    "apmat": "Bernabe",
                    "__v": 0
                },
                {
                    "_id": "6299b95affc99d1a239b2c7f",
                    "name": "charly",
                    "appat": "Bernabe",
                    "apmat": "Bernabe",
                    "__v": 0
                },
                {
                    "_id": "6299bbb046573ce17ebfaeab",
                    "name": "charly 2",
                    "appat": "Bernabe",
                    "apmat": "Bernabe",
                    "__v": 0
                }
            ],
            "message": "success"
    }
            ```

## Tech

Movi test used next technologies:

- [Typescript](https://www.typescriptlang.org/) - First tool to develop
- [Express] - Node.js web application framework 
- [Jest](https://jestjs.io/) - JavaScript testing framework
- [node.js] - evented I/O for the backend
- [mongoose](https://mongoosejs.com/) - elegant mongodb object modeling for node.js


## Installation

MoviTest requires [Node.js](https://nodejs.org/) v12+ to run.

Install the dependencies and devDependencies and start the server.

```sh
git clone https://github.com/charlt/testv1.git
cd testv1
npm i
npm run start || npm run serve
```

For run unit testing...

```sh
npm run test
```
