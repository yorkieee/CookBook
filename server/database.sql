CREATE DATABASE cookbook; 

CREATE TABLE recipes(
    recipe_id SERIAL PRIMARY KEY,
    title VARCHAR (255),
    ingredients VARCHAR (255),
    description VARCHAR (455)
)