# RentMo!: MERN App for Car, Motorcycle, and Boat Rentals


Welcome to the repository for our MERN (MongoDB, Express, React, Node.js) application for car, motorcycle, and boat rentals. This application provides a convenient platform for users to rent vehicles and enjoy their travel experiences.

## Features

-   **Vehicle Selection**: Browse through a wide range of cars, motorcycles, and boats available for rent. Filter and search based on specific preferences such as vehicle type, location, price range, and more.
    
-   **Booking and Reservation**: Reserve your preferred vehicle for a specified date and time. The booking process is simple and user-friendly, ensuring a seamless experience.
    
-   **User Authentication**: Securely create an account, log in, and manage your bookings. User authentication guarantees the safety and privacy of personal information.
    
-   **Ratings and Reviews**: Share your experience by leaving ratings and reviews for the rented vehicles. Help other users make informed decisions based on your feedback.
    
-   **Admin Dashboard**: An intuitive dashboard for admins to manage vehicles, bookings, and user information. Admins can easily add new vehicles, update existing listings, and track rental activities.
    

## Technologies Used

-   **MongoDB**: A NoSQL database used for storing and retrieving vehicle data, user information, and booking details.
    
-   **Express**: A lightweight and flexible web application framework for Node.js, used to build the backend API.
    
-   **React**: A popular JavaScript library for building user interfaces, used to develop the frontend of the application.
    
-   **Node.js**: A server-side JavaScript runtime environment that runs the backend logic and handles API requests.
    

## Installation

1.  Clone the repository:
    
    `git clone https://github.com/lavelliane/rent-mo.git` 
    
2.  Install the dependencies for the backend:

    `cd server`
    `npm install` 
    
3.  Install the dependencies for the frontend:
    
    `cd client`
    `npm install` 
    
4.  Start the development server:
    
    
    - Server: `npm run serve` 
    - Client: `npm run dev`
    
    The application will be accessible at `http://localhost:3000`.

## Environment

Reference for the actual .env file is on `server/.env.sample`
The following are needed for the application to work:

-   **MongoDB connection URL** : Connect a mongoDB atlas account with database
-   **JWT** : Secret using MD5 256-bit and Lifetime.
-   **Google Auth** : Client and Secret for the Sign-in with Google function
-   **Azure Blob Storage** : A connection string for an Azure Blob Container which will house listing assets

## Architecture

### Frontend

The frontend follows a component based pattern with Pages and Components playing the main role. Each page is in the pages directory and reusables
are in the Components folder.

*Important libraries and configurations*

-   The main UI library used is **Material UI**. Styling is done using **tailwindCSS**. 
-   Reverse proxy for the client to communicate with the server is setup in `vite.config`
-   Zustand for state management
-   Axios for HTTP requests

State Management is done only for the User object using *Zustand*. Zustand doesn't require any provider which means you can create your own hook for each state you want as a global context. In this case you can find the `useUser` hook under `client/hooks/zustand`

### Backend

The backend is an Express application that follows MVC. Rather than a web app structure that contains edge templates, the view in this case is handled by the react client application, separate from the server.

The Models contain the User and Listing schemas with their appropriate interface in TypeScript. The User schema also handles token generation, password salting and hashing, and password verification.

The Controllers are connected to the Routes. Once a route is set up, the appropriate function to handle that route endpoint lives inside the controllers folder. 

-   *authController.ts* : Responsible for authentication and registration
-   *listingController.ts* : Responsible for CRUD operations on the listing objects.

### Important Backend utils and middleware

1. `middleware/auth.ts` : Middleware responsible for protecting private routes against unauthorized access. This checks the session cookies and uses the jwt.verify function to validate the given token. If valid, this middleware proceeds to the next function. *please check routes folder for actual usage*

2. `utils/attachCookies.ts` : Utility function to attach cookies that are generated using JWT. This happens when a user logs in or registers for the first time. Check authController for more details.

3. `utils/azureStorageConfig.ts` : Utility function that exports the Blob Service Client. The service client is the object we'll refer to and call whenever we want to store images on the blob storage. Please check listingController.create and listingController.update

4. `utils/handleImageUpload.ts` : A supposedly modularized version for the file upload process in the listing controller. This function is not implemented since it isn't finished.

5. `utils/checkPermissions.ts` : Another layer of security for when a user wants to access a resource. This makes sure that only the user can access his/her own resource and he can't access resources of other users. Not implemented since it wasn't tested.

6. Errors directory : Use these custom error classes to make Error code in catch statements more readable.

7. `config/passport.ts` :  passport.js configuration file for Google Sign in. This is also where the function to store a user into the database when he/she signs in with Google is found. If the user does not sign in with Google, the code to store the user is found on the authController.

8. `dist` : This is where typeScript compiles everything. You don't need to do anything in this folder unless any merge conflicts arise.

    

## Contribution

Contributions to this project are welcome! If you find any bugs or have suggestions for new features, please submit an issue or create a pull request. Make sure to follow the established coding guidelines and maintain a respectful and collaborative environment.

## License

This project is licensed under the [MIT License](https://chat.openai.com/LICENSE). Feel free to use, modify, and distribute the code for both personal and commercial purposes.

----------

Thank you for showing interest in our MERN app for car, motorcycle, and boat rentals. We hope you find it helpful and enjoy exploring its features. Should you have any questions or feedback, please don't hesitate to reach out. Happy renting!
