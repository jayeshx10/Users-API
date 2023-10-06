const express = require('express');
const moviesRouter = express.Router();

const { createMovie, addReview, getTopReviews, getBottomReviews, getFirstThreeReviews } = require('../functions/movies.functions');

moviesRouter.post('/', async (req, res) => {
  const movieDetails = req.body;
  if (!movieDetails) {
    res.status(400).json({ status: 400, message: 'Please provide the movie details.' })
  }
  try {
    const newMovie = await createMovie(movieDetails);
    res.status(201).json({ status: 201, message: 'New movie created.', data: newMovie })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error.' })
  }
})

moviesRouter.post('/:movieID/rating', async (req, res) => {
  const { movieID } = req.params;
  const reviewData = req.body;

  try {
    const updatedMovie = await addReview(movieID, reviewData);
    res.status(201).json({ status: 201, message: 'Review added successfully.', data: updatedMovie })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error' })
  }
})

moviesRouter.get('/:movieID/reviews', async (req, res) => {
  const { movieID } = req.params;
  try {
    const topThreeReviews = await getFirstThreeReviews(movieID);
    res.status(200).json({ status: 200, message: 'Reviews fetched successfully.', data: topThreeReviews })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error' })
  }
})

module.exports = moviesRouter;