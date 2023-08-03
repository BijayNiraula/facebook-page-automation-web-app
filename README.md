# Facebook Page Post Automation Web App

## Introduction
This is a full-stack web application built with React, Bootstrap, HTML, React Redux Toolkit, Express.js, MongoDB, and Facebook Graph API. The app allows users to automate Facebook page posts, schedule posts with images and text, perform CRUD operations, implement login/logout functionality, utilize JWT token for authorization, and support file upload and deletion.

## Live Url 
 [Click Here](https://postpilot.netlify.app/)

   
## Demo Video
[Watch the demo video here](https://youtu.be/Y_BqWPhXVE0)

## Features
- Schedule posts for a specific Facebook page.
- Support for both images and text in the posts.
- Complete CRUD operations for managing posts.
- User authentication with login/logout functionality.
- Secure JWT token implementation for authorization.
- File upload and deletion for post attachments.
- Utilizes Facebook Graph API for interacting with Facebook pages.

## Setup Instructions
To run the project locally, follow these steps:

1. Clone the repository to your local machine.
2. Install Node.js and npm (Node Package Manager) if not already installed.
3. Navigate to the root directory of the project and run `npm install` to install the required dependencies.
4. Create a `.env` file in the root directory and add the necessary environment variables:
   - `MONGODB_URI`: MongoDB connection string
   - `JWT_SECRET`: Secret key for JWT token generation
   - `FACEBOOK_APP_ID`: Your Facebook App ID
   - `FACEBOOK_APP_SECRET`: Your Facebook App Secret
5. Start the server by running `npm run server` command.
6. Change directory to the `client` folder and run `npm install` to install frontend dependencies.
7. Start the frontend development server with `npm start`.
8. The application should now be running locally. Access it by visiting `http://localhost:3000` in your web browser.

## Usage
- Log in using your page id and page access token ( for demo used below credentials for login ) :
   - page url: https://www.facebook.com/profile.php?id=100093334774206
   - Page ID: 103537282765848
   - Page Access Token: EAAx2ZCpFWZCdIBOyTQ3cqLUG2g9OmvSkUQ5w4o70JpK1ZARqoaXxrYlPi6uVAIPnZA246eGZASqZA3x8ZBJWrwJoa5Yu2yxlpZBVga0lJvz1iKKWmZBtQYoqnTZCiz3dSu8PorxFZCGU54qeZApVDyhiZAxPZBBjPbur7Jr8kslJorSgZBKggSyxdVP0AyM7VJBmZA4ZCWZCfAKpmQZCWMZD
- Navigate to the post scheduling page and fill in the necessary details.
- Upload an image or provide text for the post content.
- Click the "save" button to add the post to the queue.
- edit, or delete scheduled posts by click edit button or delete button.
- Log out when finished using the application.

## Technologies Used
- Html
- Css
- Bootstrap
- React
- Redux toolkit
- Node.js
- JWT Token
- Express js
- MongoDB
- Facebook Graph API

## Credits
Developed by [Bijay niraula](https://github.com/BijayNiraula)



## Acknowledgments
- Thank you to the developers of the libraries and frameworks used in this project.
- Special thanks to the open-source community for their continuous support and contributions.
