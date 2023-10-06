# Users-API
This API collection provides a set of of endpoints and functionalities for user management, profile updates, and movie reviews. Designed to be user-friendly and secure, the collection allows developers to seamlessly integrate these features into their applications. Each API endpoint is documented with clear description for response handling for ease of use.

### KEY FEATURES:

### 1. User Signup and Login

    /users/signup : Allows users to create new accounts by providing their user details.
   
    /users/login : Enables users to log into their accounts by providing their email and password.

### 2. Profile Management
    /users/change-password : Allows user to update their passwords securely.
    
    /users/:user/ID/update-profile : Enables users to modify their profile.
    
    /users/update-contact/:email : Allows users to update their contact details, including phone number and address.

### 3. User Managerment
    /users/phone/:phoneNumber : Allows users to search for other users by phone number.

### 4. Movie rating and reviews.
    /movies/:movieID/rating : Allows users to submit ratings and reviews for movies.
    
    /movies/:movieID/reviews : Enables users to fetch movie reviews with associated user details.



