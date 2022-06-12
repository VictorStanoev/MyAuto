# 🕶️ **Project Introduction**
 **MyAuto** is my defense project for Angular course at SoftUni (March 2022). The project is a car sales platform.

# ✏️ **Overview**
With **MyAuto** users can create and publish ads with the information of their car/s (detailed description and technical parameters, photos, location, price, ets.). The users can edit their ads at any time, change conditions, photos, price. Non registered users can search cars by diferent criteria : brand, model, price, ets. and to view ads.

# 🚧 **Application Structure**
The application have:
* public part (accessible without authentication)
* private part (available for registered users)

### Public Part

The public part of project is visible without authentication. This public part is the application start page, the user login and user registration forms, as well as the public data of the user ads. The non registered user can use search form to view all available ads

### Private Part (User Area)

Registered users have personal area in the app accessible after successful login. This area holds the user's profiles management functionality. The user can edit his login credentials. The user also can access section with all his ads and to make changes on them. Only registered users can create new ads.

# 🔨 **Built With** 
#### Front-end
* Angular 13
* TypeScript
* Bootstrap
#### MyAuto Server 👇[download](https://github.com/VictorStanoev/MyAuto-Server)
* Node.js 
* Mongoose

#### Database
* MongoDB (required) 👇[download](https://www.mongodb.com/atlas/database)
