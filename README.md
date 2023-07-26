# We Love Movies API

## Description

Restful API for movie lovers to know when a movie is showing and when and where.

## Technologies
 ```
 JavaScript, Node.js, Express.js PostgreSQL, Knex, ElephantSQL, Render, Postman, JSON viewer, SuperTest, and VSCode. 
 ```

## RESTful API Routes
+ Lists all movies.
    ```
    GET /movies
    ```

+ Lists all the movies that are currently showing in theaters.

    ```
    GET /movies?is_showing=true
    ```

+ Lists one movie. If a movie does not exist, a user should recieve an error message saying the movie cannot be found with a response of a `404`.

    ```
    GET /movies/:movieId
    ```

    ```json
    {"error": "Movie cannot be found!"}
    ```

+ Lists all of the theaters where the movie is playing.

    ```
    GET /movies/:movieId/theaters
    ```

+ Lists all the reviews for the movie, including all the critic details added to a critic key of the review.

    ```
    GET /movies/:movieId/reviews
    ```

+ Lists the theaters and, the movies playing at each theatre.

    ```
    GET /theaters
    ```

+ Deletes a review based on it's id and resonds with a `204 No Content`.

    ```
    DELETE /reviews/:reviewId
    ```


+ If the given ID does not match an existing review, the server will respond with a 404 status code and this error message:

    ```json
    {"error": "Review cannot be found."}
    ```
+ Updates one review.

    ```
    PUT /reviews/:reviewId
    ```

+ Request with this body:

    ```json
    {"score": 3, "content": "New content..."}
    ```

+ Error message recieved when requesting a review that does not exist, responds with a 404 status code.

    ```json
    {"error": "Review cannot be found."}
    ```
+ Error message recieved when requesting with missing `score` field in body:

    ```json
    {"error": "A 'score' property is required."}
    ```

+ Error message recieved when requesting with missing `content` field in body:

    ```json
    {"error": "A 'content' property is required."}
    ```
