const { Movie } = require('../models/movie.model');

const createMovie = async (movieData) => {
  try {
    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();
    return savedMovie;
  }
  catch (error) {
    throw error;
  }
}

const addReview = async (movieID, reviewData) => {
  const { user, rating, reviewText } = reviewData;
  try {
    const foundMovie = await Movie.findById(movieID);
    if (foundMovie) {
      foundMovie.rating = rating;
      foundMovie.reviews.push({ user, reviewText });
      const updatedMovie = foundMovie.save();
      return updatedMovie;
    } else {
      throw new Error('Movie not found.')
    }
  }
  catch (error) {
    throw error;
  }
}

const getTopReviews = async (movieID) => {
  try {
    const foundMovie = await Movie.findById(movieID);
    if (foundMovie) {
      const topFiveReviews = foundMovie.reviews.map(review => review).limit(5);
      return topFiveReviews;
    } else {
      throw new Error('Movie not found.')
    }
  }
  catch (error) {
    throw error;
  }
}

const getBottomReviews = async (movieID) => {
  try {
    const foundMovie = await Movie.findById(movieID);
    if (foundMovie) {
      const bottomFiveReviews = foundMovie.reviews.reverse().map(review => review).limit(5);
      return bottomFiveReviews;
    } else {
      throw new Error('Movie not found.')
    }
  }
  catch (error) {
    throw error;
  }
}

const getFirstThreeReviews = async (movieID) => {
  try {
    const foundMovie = await Movie.findById(movieID);
    if (foundMovie) {
      const movieWithPopulatedUsers = await foundMovie.populate('reviews.user');
      const firstThreeReviews = movieWithPopulatedUsers.reviews.length > 3 ? movieWithPopulatedUsers.reviews.slice(0,3).map((review) => review) : movieWithPopulatedUsers.reviews.map((review) => review);
      return firstThreeReviews;
    } else {
      throw new Error('Movie not found.')
    }
  }
  catch (error) {
    throw error;
  }
}

module.exports = { createMovie, addReview, getTopReviews, getBottomReviews, getFirstThreeReviews };