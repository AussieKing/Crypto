# Project-3-Crypto-Tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description:
This deployed React application is a full-stack crypto tracker that allows users to explore real-time data, trends, and price action related to various cryptocurrencies. It provides features for tracking portfolios and staying updated on the latest market developments.


## Table of Contents:
- [Overview](#Overview)
- [The task](#The-task)
- [Information](#Information)
- [Visuals](#Visuals)
- [Installation](#Installation)
- [Technologies Used](#Technologies-Used)
- [Folder Structure](#Folder-structure)
- [License](#License)
- [Author](#Author)
- [Acknowledgments](#Acknowledgments)

# Overview

## The task:
We aim to build a sophisticated full-stack application revolving around blockchain and cryptocurrency. The application will utilize React for the front end, MongoDB with Mongoose ODM for the database, and incorporate JWT authentication for secure user access. Users will be able to explore real-time cryptocurrency data, perform transactions, and stay informed about market trends.


## Information
## User Story:
```
AS A cryptocurrency enthusiast,
I WANT to track real-time data, trends, and news of various cryptocurrencies,
SO THAT I can make informed decisions about my investments and stay updated on the market.
```
## Acceptance Criteria:
```
GIVEN a cryptocurrency tracking application,
WHEN I log in,
THEN I can view a personalized dashboard with real-time cryptocurrency data and news.
WHEN I search for a specific cryptocurrency,
THEN I can see its current price and  historical data.
WHEN I explore trending coins,
THEN I can see a list of the most popular and actively traded cryptocurrencies.
```

## Visuals

### Walkthrough Video and Screenshots:
Here you will be able to see a walkthrough video of the application and screenshots of the deployed application.

## Video
[Walk-through Video](https://drive.google.com/file/d/1oYVzyGdZjqxCj_QQ859MVU4ZJ5Yk3Vto/view)

## Screenshots
### Homepage
![Screenshot 2023-08-29 at 11 05 08 pm](https://github.com/AussieKing/Crypto/assets/126050763/552c1c23-2849-4f90-8dbe-826230655a0e)

### Homepage (Responsive Design)
![Screenshot 2023-08-29 at 11 04 33 pm](https://github.com/AussieKing/Crypto/assets/126050763/d7413db1-624b-401b-8c64-0deeea8ec680)

### Single Coin page
![Screenshot 2023-08-29 at 11 06 05 pm](https://github.com/AussieKing/Crypto/assets/126050763/aaa9c9a7-ffc5-4791-a374-472bd7429400)

### Trending coins:
![Screenshot 2023-08-29 at 11 06 53 pm](https://github.com/AussieKing/Crypto/assets/126050763/d58bbf45-1c88-4329-8f09-3b24be09ffcd)

## Login
![Screenshot 2023-08-29 at 10 58 03 pm](https://github.com/AussieKing/Crypto/assets/126050763/e82a3086-8d51-466e-b209-0462903d2ece)

## Sign Up
![Screenshot 2023-08-29 at 10 58 10 pm](https://github.com/AussieKing/Crypto/assets/126050763/2ddbdff7-6d5f-4b45-b7dc-4c0e31656333)

## Firebase Authentication:
![Screenshot 2023-08-29 at 9 08 54 pm](https://github.com/AussieKing/Crypto/assets/126050763/26f9e0f9-1130-45c8-bf06-663e5bea856c)

## User Sidebar (Logged in)
![Screenshot 2023-08-29 at 10 57 05 pm](https://github.com/AussieKing/Crypto/assets/126050763/d45e0f06-3587-450f-8f81-0bcb25ce3e53)

## Database / MERN (Mongo Compass):
![Screenshot 2023-08-29 at 9 09 38 pm](https://github.com/AussieKing/Crypto/assets/126050763/e604a2e2-2afb-449f-a324-6a7ac3dd465a)

## API (Insomnia) calls:
![Screenshot 2023-08-29 at 10 55 46 pm](https://github.com/AussieKing/Crypto/assets/126050763/5901a5f5-96f9-4dfc-b355-bab6ff614b9c)


## Instructions:

## Deployed Application Link:
[Link](https://crypto-kings-app-7541d2cbc3bf.herokuapp.com/)

## GitHub Repository:
[Link](https://github.com/AussieKing/Crypto)


## Installation
1. Clone the [Git Repository](https://github.com/AussieKing/Crypto) locally on your machine.
2. In the root folder, open Terminal and type
```npm install && npm start```


## Technologies Used:
- React for the front end
- MongoDB with Mongoose ODM for the database
- JWT Authentication for secure user access
- Heroku for deployment
- React Router DOM : `npm i react-router-dom`;
- Material UI and the Lab : `npm install @mui/material @emotion/react @emotion/styled && npm install @mui/lab @mui/material` - (https://mui.com/material-ui/getting-started/installation/)
- Service Worker for offline functionality
- Web Manifest for installability
- FontAwesome [icons](https://fontawesome.com/icons)
- License Badge: [Shields.io](https://shields.io/)
- React Router DOM
- Chart JS (https://www.chartjs.org/)
- Material UI as React Library (https://mui.com/)
- GoogleFonts (https://fonts.google.com/specimen/Inconsolata) - 300, 400, 800
- Unsplash (Banner image by Javier Miranda https://unsplash.com/photos/MrWOCGKFVDg?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink )
- Coingecko API : (https://www.coingecko.com/en/api)
- Axios : to handle API requests (https://www.npmjs.com/package/axios)
- React Alice Carousel: `npm i react-alice-carousel` (https://www.npmjs.com/package/react-alice-carousel)
- html-react-parser : `npm i html-react-parser` (https://www.npmjs.com/package/html-react-parser)
- react-chartjs-2 : `npm i react-chartjs-2` (https://www.npmjs.com/package/react-chartjs-2)
- react google button : `npm i react-google-button` (https://www.npmjs.com/package/react-google-button)

## Folder structure
```
.
├── LICENSE
├── Procfile
├── README.md
├── build
│   ├── asset-manifest.json
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   ├── robots.txt
│   └── static
│       ├── css
│       │   ├── main.a89e7a8e.css
│       │   └── main.a89e7a8e.css.map
│       └── js
│           ├── 787.07ff5451.chunk.js
│           ├── 787.07ff5451.chunk.js.map
│           ├── main.91dd8c7e.js
│           ├── main.91dd8c7e.js.LICENSE.txt
│           └── main.91dd8c7e.js.map
├── client
│   └── build
├── gitignore
├── package-lock.json
├── package.json
├── public
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── server
│   ├── controllers
│   │   ├── userController.js
│   │   └── watchlistController.js
│   ├── models
│   │   ├── User.js
│   │   └── Watchlist.js
│   ├── routes
│   │   ├── userRoutes.js
│   │   └── watchlistRoutes.js
│   ├── server.js
│   └── utils
│       └── db.js
└── src
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── Pages
    │   ├── CoinPage.js
    │   ├── CryptoContext.js
    │   └── HomePage.js
    ├── axiosInstance.js
    ├── components
    │   ├── Alert.js
    │   ├── Authentication
    │   │   ├── AuthModal.js
    │   │   ├── Login.js
    │   │   ├── Signup.js
    │   │   └── UserSidebar.js
    │   ├── Banner
    │   │   ├── Banner.js
    │   │   └── Carousel.js
    │   ├── CoinInfo.js
    │   ├── CoinsTable.js
    │   ├── Header.js
    │   └── SelectButton.js
    ├── config
    │   ├── api.js
    │   ├── data.js
    │   └── firebaseConfig.js
    ├── firebase.js
    ├── index.css
    ├── index.js
    ├── logo.svg
    ├── reportWebVitals.js
    └── setupTests.js
```

## License & Copyright ©
  
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [Open Source Initiative Link](https://opensource.org/licenses/MIT)

### Copyright © 2023
```md
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
