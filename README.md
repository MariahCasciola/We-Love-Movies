# We Love Movies API

## Description

Restful API for movie lovers to know when a movie is showing and when and where.

## Technologies
 ```
 JavaScript5, Node.js, Express.js PostgreSQL, Knex, and ElephantSQL. 
 ```

## RESTful API Routes

```
GET /movies
```

Lists of all movies.

```
GET /movies?is_showing=true
```

Lists all the movies that are currently showing in theaters

```
GET /movies/movieId
```

Lists one movie by it's id number, if the id number does not exist, a user should recieve:

```json
{ "error": "Movie cannot be found!"}
```
With a response of a `404`

```
GET /movies/movieId/theaters
```

Lists all of the theaters where the movie is playing

```
GET /movies/movieId/reviews
```

Lists all the reviews for the movie, including all the critic details added to a critic key of the review.

```
GET /theaters
```
Lists the theaters and, the movies playing at each theatre added to the movies key.
