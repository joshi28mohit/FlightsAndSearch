# Welcome to Flights Service

## Project Setup
- Clone the project on your local device
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variables 
    - `PORT=3000`
- Inside the `src/config` folder, create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you have added your db config as listed above go to the src folder from your terminal and execute `npx sequelize db:create`
and then execute

`npx squelize db:migrate`
```

## DB Design 
  - Airplane Table
  - Flight Table
  - Airport Table
  - City Table

  - A flight belongs to an airplane but one airplane can be used in multiple flights.
  - A city has many airports but one airport belongs to a city.
  - One airport can have many flights, but a flight belongs to an airport


  ## Tables

  ### City -> id, name, created_at, updated_at
  ### Airpost -> id, name, address, city_id, created_at, updated_at
      Relationship -> City has many airports and an airport belongs to only one city(one to many relationship)