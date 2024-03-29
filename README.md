# We Love Movies API

## Technologies

 ```text
 JavaScript, Node.js, Express.js, PostgreSQL, Knex, ElephantSQL, Render, Postman, JSON viewer, SuperTest, and VSCode. 
 ```

## Description

This is a RESTful service that communicates with a PostgreSQL database.

Here is a link to a React UI utilizing the API: [React UI](https://we-love-movies-ui-9f0n.onrender.com) 

Here is a link to the API to list raw JSON: [RESTful Service](https://we-love-movies-1pzh.onrender.com). The paths are described below:

## RESTful API Routes

+ Lists all movies.

    ```text
    GET /movies
    ```

+ Lists all the movies that are currently showing in theaters.

    ```text
    GET /movies?is_showing=true
    ```

+ Lists one movie. If a movie does not exist, a user should receive an error message saying the movie cannot be found with a response of `404`.

    ```text
    GET /movies/:movieId
    ```

    ```json
    {"error": "Movie cannot be found!"}
    ```

+ Lists all of the theaters where the movie is playing.

    ```text
    GET /movies/:movieId/theaters
    ```

+ Lists all the reviews for the movie, including all the critic details added to a critic key of the review.

    ```text
    GET /movies/:movieId/reviews
    ```

+ Lists the theaters and the movies playing at each theatre.

    ```text
    GET /theaters
    ```

+ Deletes a review based on its ID and responses with a `204 No Content`.

    ```text
    DELETE /reviews/:reviewId
    ```

+ If the given ID does not match an existing review, the server will respond with a 404 status code and this error message:

    ```json
    {"error": "Review cannot be found."}
    ```

+ Updates one review.

    ```text
    PUT /reviews/:reviewId
    ```

+ Request with this body:

    ```json
    {"score": 3, "content": "New content..."}
    ```

+ Error message received when requesting a review that does not exist; responds with a 404 status code.

    ```json
    {"error": "Review cannot be found."}
    ```

+ Error message received when requesting with missing `score` field in the body:

    ```json
    {"error": "A 'score' property is required."}
    ```

+ Error message received when requesting with missing `content` field in the body:

    ```json
    {"error": "A 'content' property is required."}
    ```
