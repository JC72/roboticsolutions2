# Robotic Solutions

This project was designed as a homework assignment for MSU's coding bootcamp. 

This application was created to emphasize the use of MERN (MongoDB/MySQL, Express, React & Node.js) Also, this project was introduced the class to how to work in a team enviroment and how to use create branches and submit branches back into the master file without causing breaks in the program. Plus the lesson on how to deploy the MERN application to Heroku.

This project has been deployed to my Personal GitHub Page and Heroku. To get this project up and running, you can follow the deployment links that have been included in the Link Section below.

# Table of Contents
1. [Links](#Links)
2. [Project Overview](#projectoverview)
3. [Demo](#demo)
4. [Main Languages & Styles Used](#mainlang)
5. [New Technologies Used](#newtech)
6. [Assignment](#assignment)
7. [Future Development](#future)
8. [File Structure](#filestructure)
9. [License](#license)
10. [Execution](Execution)
11. [Creators](#creators)


## Links

* [GitHub Repository](https://github.com/JC72/roboticsolutions2)
* [Groups Github Repository](https://github.com/JC72/RoboticSolutions)
* [Deployed Heroku IO](https://roboticsolutions2.herokuapp.com/) 

## Project Overview <a name="projectoverview"></a>

* A company application that allows the user to login with their credentials and add crucial data for their specific product to a database. The user can view all the information and it is displayed on a excel spreadsheet on the main page.  This sheet allows the user to sort by specific columns and also alows the user to add new items to the database and sheet.

## Demo:

![](https://github.com/JC72/roboticsolutions2/blob/master/assets/video/demovideo.gif)

## Main Languages & Styles Used <a name="mainlang"></a>

* MongoDB
* Express
* React
* Node.js
* CSS
* Bootstrap
* React Bootstrap

## New Technologies Used <a name="newtech"></a>

* React-Data-Table-Component
* React-Hook-Form
* dotenv
* bcrypt

## Assignment
### This assignment contains the following features:

* Login Page
    * Contains a header
    
    * A input section to enter username.
    
    * A input section to enter password.

    * A submit button to go to next page.

    ![Login Page 1](https://github.com/JC72/roboticsolutions2/blob/master/assets/screenshots/Login1.png)
    ![Login Page 2](https://github.com/JC72/roboticsolutions2/blob/master/assets/screenshots/Login2.png)


* Main Data Page
    * * A Header with a sign out button.
    
    * A spreadsheet using react-data-table-component to display all the data.

    * A update button (non-functional right now).

    * A New Line Item button to take user to add/update page.

    ![Main Data](https://github.com/JC72/roboticsolutions2/blob/master/assets/screenshots/MainPage.png)

* Add/Update Page
    * A Header with a sign out button.
    
    * A form with all the spreadsheets categories to add data to.

    * A add button to push the new data to the database.

    * A back button to take user back to main page.

    ![Add Update Page](![Montly Spending](https://github.com/JC72/roboticsolutions2/blob/master/assets/screenshots/AddPage.png)  


## Future Development <a name="future"></a>

1.  Make update button on main page functional to take user to add/update page and allow user to update information for current line items.

2.  Make a update button in add/update page that updates the new information for that specific line item to update the database.

3.  Fix password authentication to allow outside users to retrieve their specific information from the company.

4.  Create a way to generate a report for a specific company and export it to allow user to send the report out via email.

## File Structure <a name="filestructure"></a>

The following folders and what they contain are listed below:

```bash
  |-- RoboticSolutions2
    |-- assets
    |   |-- screenshots
    |   |   |-- AddPage.png
    |   |   |-- Login1.png
    |   |   |-- Login2.png
    |   |   |-- Mainpage.png
    |   |-- video
    |   |   |-- demovideo.gif
    |-- client
    |   |-- public
    |   |   |-- favicon.ico
    |   |   |-- index.html
    |   |   |-- logo192.png
    |   |   |-- logo512.png
    |   |   |-- manifest.json
    |   |   |-- robots.txt
    |   |-- src
    |   |   |-- components
    |   |   |   |-- AddInfo
    |   |   |   |   |-index.js
    |   |   |   |-- AddInfoFooter
    |   |   |   |   |-index.js
    |   |   |   |-- DataSheet
    |   |   |   |   |-index.js
    |   |   |   |-- MainFooter
    |   |   |   |   |-index.js
    |   |   |   |-- NavBar
    |   |   |   |   |-index.js
    |   |   |   |-- Notes
    |   |   |   |   |-index.js
    |   |   |   |-- Processes
    |   |   |   |   |-index.js
    |   |   |   |-- VersionInfo
    |   |   |   |   |-index.js
    |   |   |   |-- process.css
    |   |   |-- images
    |   |   |   |-- LeoniLogo.png
    |   |   |-- pages
    |   |   |   |-- Addinfo
    |   |   |   |   |-- index.js
    |   |   |   |-- Login
    |   |   |   |   |-- index.js
    |   |   |   |-- Main
    |   |   |   |   |-- index.js
    |   |   |   |-- NotFound
    |   |   |   |   |-- index.js (Not used)  
    |   |   |-- utils
    |   |   |   |-- API.js
    |   |-- App.css
    |   |-- App.js
    |   |-- App.test.js
    |   |-- config.js
    |   |-- index.css
    |   |-- index.js
    |   |-- logo.svg
    |   |-- reportWebVitals.js
    |   |-- .gitignore
    |   |-- package-lock.json
    |   |-- package.json
    |   |-- validation.js
    |-- controllers
    |   |-- inforController.js
    |-- models
    |   |-- index.js
    |   |-- info.js
    |   |-- review.js
    |   |-- user.js
    |-- routes
    |   |-- api
    |   |   |-- auth.js
    |   |   |-- create.js
    |   |   |-- index.js
    |   |   |-- info.js
    |   |   |-- mainpage.js
    |   |   |-- validate-token.js (non functional)
    |   |-- index.js
    |-- scripts
    |   |-- seedDB.js
    |-- .gitignore
    |-- README.md
    |-- package-lock.json
    |-- package.json
    |-- server.js
    |-- validation.js (non functional)
```

## License

This project is licensed under the MIT License License

![Badge for GitHub repo license](https://img.shields.io/github/license/JC72/roboticsolutions2?style=flat&logo=appveyor)

## Execution
### To Execute File:
> Just click on the Active site link in the link section or go to
https://roboticsolutions2.herokuapp.com/ in the web browser.

## Creators:

* **Jeff Clegg** - [Git Hub Profile](https://github.com/JC72)
* **Andy Dolen** - [Git Hub Profile](https://github.com/dolenand)
* **Christian Marcano** - [Git Hub Profile](https://github.com/Cmarcano7)
* **
* MSU BootCamp