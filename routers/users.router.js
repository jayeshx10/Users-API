const express = require('express');
const usersRouter = express.Router();

const { signup, login, changePassword, updateProfilePicture, updateContactDetails, findUserByPhoneNumber } = require('../functions/users.functions');

usersRouter.post('/signup', async (req, res) => {
  const userDetails = req.body;
  if (!userDetails) {
    res.status(400).json({ status: 400, message: 'Please provide user details.' })
  }

  try {
    const newUser = await signup(userDetails);
    res.status(201).json({ status: 201, message: 'User created successfully.', userDetails: userDetails })
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error' })
  }
})

usersRouter.post('/login', async (req, res) => {
  const userDetails = req.body;
  if (!userDetails) {
    res.status(400).json({ status: 400, message: 'Please provide user details.' })
  }

  try {
    const foundUser = await login(userDetails);
    res.status(200).json({ status: 200, message: 'User authentication successful.', userDetails: userDetails })
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error' })
  }
})

usersRouter.post('/:userID/change-password', async (req, res) => {
  const { userID } = req.params;
  const userDetails = req.body;
  if (!userID || !userDetails) {
    res.status(400).json({ status: 400, message: 'Please provide User ID and the User Details.' })
  }

  try {
    const userWithUpdatedPassword = await changePassword(userID, userDetails);
    res.status(201).json({ status: 201, message: 'Password changed successfully.', userDetails: userWithUpdatedPassword })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error.' })
  }
})

usersRouter.post('/:userID/update-profile', async (req, res) => {
  const { userID } = req.params;
  const { newProfilePicture } = req.body;
  if (!newProfilePicture) {
    res.status(400).json({ status: 400, message: 'Please provide the new profile picture.' })
  }

  try {
    const userWithUpdatedProfilePicture = await updateProfilePicture(userID, newProfilePicture);
    res.status(201).json({ status: 201, message: 'Profile picture updated successfully.', userDetails: userWithUpdatedProfilePicture })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error.' })
  }
})

usersRouter.post('/update-contact/:email', async (req, res) => {
  const { email } = req.params;
  const userDetails = req.body;

  if (!userDetails) {
    res.status(400).json({ status: 400, message: 'Please provide the user details.' })
  }

  try {
    const updatedUserDetails = await updateContactDetails(email, userDetails);
    res.status(201).json({ status: 201, message: 'Contact informartion updated successfully.', userDetails: updatedUserDetails })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error.' })
  }
})

usersRouter.get('/phone/:phoneNumber', async (req, res) => {
  const { phoneNumber } = req.params;

  if (!phoneNumber) {
    res.status(400).json({ status: 400, message: 'Please provide the phone number.' })
  }

  try {
    const foundUser = await findUserByPhoneNumber(phoneNumber);
    res.status(200).json({ status: 201, message: 'User found.', userDetails: foundUser })
  }
  catch (error) {
    res.status(500).json({ status: 500, message: 'Internal server error.' })
  }
})

module.exports = usersRouter;