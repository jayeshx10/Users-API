# Users-API
This API collection provides a set of of endpoints and functionalities for user management, profile updates, and movie reviews. Designed to be user-friendly and secure, the collection allows developers to seamlessly integrate these features into their applications. Each API endpoint is documented with clear description for response handling for ease of use.

## Getting Started
### 1. Clone the repository:
    git clone https://github.com/jayeshx10/inventory-management-api.git
### 2. Install dependencies:
    cd inventory-management-api
    npm install
### Start the server:
    npm start

## Tech Stack
- Node.js: JavaScript runtime for server-side execution.
- Express.js: Minimal and flexible Node.js web application framework.
- Mongoose: Elegant MongoDB object modeling for Node.js.
- RESTful Architecture: Follows best practices for designing RESTful APIs.

## API endpoints: 
### 1. User Signup
- Endpoint: `/users/signup`
- Method: POST
- Description: Allows users to create new accounts by providing their user details.

### 2. User Login
- Endpoint: `/users/login`
- Method: GET
- Description: Enables users to log into their accounts by providing their email and password.

### 3. Change password
- Endpoint: `/users/change-password`
- Method: POST
- Description: Allows user to update their passwords securely.

### 4. Update profile
- Endpoint: `/users/:user/ID/update-profile`
- Method: POST
- Description: Enables users to modify their profile.

### 4. Update contact information
- Endpoint: `/users/update-contact/:email`
- Method: POST
- Description: Allows users to update their contact details, including phone number and address.

### 5. Search by phone number
- Endpoint: `/users/phone/:phoneNumber`
- Method: GET
- Description: Allows users to search for other users by phone number.

### 6. Add review and rating for a movie
- Endpoint: `/movies/:movieID/rating`
- Method: POST
- Description: Allows users to submit ratings and reviews for movies.

### 7. Fetch movie reviews
- Endpoint: `/movies/:movieID/reviews`
- Method: GET
- Description: Enables users to fetch movie reviews with associated user details.

## Documentation
[View the entire documentation here](https://documenter.getpostman.com/view/29099763/2s9YJdV2A8)
  
## Contributing
Contributions are welcome! Feel free to open an issue or create a pull request for any improvements or features you'd like to add.

*Happy coding folks 😄*
