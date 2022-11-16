# Getting Started with Create React App

This backend Project works alongside with a frontend react app hosted at:
### https://github.com/spalduing/search_web
To Successfully run this project you have to create a local .env file and add the environment variables bellow
### TYPEORM_CONNECTION
### TYPEORM_HOST
### TYPEORM_USERNAME
### TYPEORM_PASSWORD
### TYPEORM_DATABASE
### TYPEORM_PORT
### TYPEORM_SYNCHRONIZE

## This api uses the a Mysql db provider
## you also take in count that both project use yarn for the dependencies management


# MIGRATIONS:
## - yarn run typeorm migration:run -d ./src/api/db/data-source.ts
## - yarn run typeorm migration:generate ./src/api/db/migrations/ObjectEnttiy -d ./src/api/db/data-source.ts
## - yarn run typeorm migration:run -d ./src/api/db/data-source.ts
## - yarn run typeorm migration:revert -d ./src/api/db/data-source.ts


## Available Scripts

In the project directory, you can run:

### `npm start`


The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm typeorm`



