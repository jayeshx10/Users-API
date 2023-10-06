const User = require('../models/user.model');

const signup = async (userData) => {
  try {
    const newUser = new User(userData);
    const savedUser = await newUser.save();
    return savedUser;
  }
  catch (error) {
    throw error;
  }
}

const login = async (userData) => {
  const { email, password } = userData;
  try {
    const foundUser = await User.findOne({ email: email });

    if (foundUser) {
      foundUser.password === password ? foundUser : new Error("Password mismatch, try again.")
    } else {
      throw new Error("User does not exist. Please sign up.")
    }
  }
  catch (error) {
    throw error;
  }
}

const changePassword = async (userID, userDetails) => {
  const { email, oldPassword, newPassword } = userDetails;
  try {
    const foundUser = await User.findById(userID);

    if (foundUser) {
      if (foundUser.password === oldPassword) {
        foundUser.password = newPassword;
        const updatedUserData = await foundUser.save();
        return updatedUserData;
      } else {
        throw new Error("Current password is incorrect.")
      }
    } else {
      throw new Error("User does not exist. Please sign up.")
    }
  }
  catch (error) {
    throw error;
  }
}

const updateProfilePicture = async (userID, newProfilePicture) => {
  try {
    const foundUser = await User.findById(userID);

    if (foundUser) {
      foundUser.profilePicture = newProfilePicture;
      const updatedUserData = await foundUser.save();
      return updatedUserData;
    } else {
      throw new Error("User does not exist. Please sign up.")
    }
  }
  catch (error) {
    throw error;
  }
}

const updateContactDetails = async (email, userDetails) => {
  const { newContact, newAddress } = userDetails;
  try {
    const foundUser = await User.findOne({ email: email });
    if (foundUser) {
      foundUser.phoneNumber = newContact;
      foundUser.address = newAddress;
      const updatedUserDetails = foundUser.save();
      return updatedUserDetails;
    } else {
      throw new Error('User does not exist.');
    }
  }
  catch (error) {
    throw error;
  }
}

const findUserByPhoneNumber = async (phoneNumber) => {
  try {
    const foundUser = await User.findOne({ phoneNumber: phoneNumber });
    if (foundUser) {
      return foundUser
    } else {
      throw new Error('User not found.')
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { signup, login, changePassword, updateProfilePicture, updateContactDetails, findUserByPhoneNumber };