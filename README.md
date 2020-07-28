# [Nspect](https://n-spect.herokuapp.com/#/)

An app Academy full stack project: iNaturalist clone

## Overview

Nspect is social media and citizen science website where users can upload, view, and interact with each other's observations of plants, animals or any other living organism through comments and a agree disagree system. It was built utlizing a Rails backend with a React/Redux frontend.

This project was created within an approximately 10 day timeframe, but will have additional features added in the future.

## Backend Technologies

- PostgresSQL
- AWS
- Rails
- JBuilder
- Heroku

## Frontend Technologies

- React
- Redux
- CSS (and eventually Sass)
- Webpack
- Node Package Manager

## Features

- BCrypt encrypted user authentication from frontend to backend
  - Demo login
- Logged in users can upload observations with an attached photo and associated data about that observation.
  - Once uploaded, users can edit all the information of their observations, or delete the observations entirely.
- Account holders have their own profile page.
  - User's profile page will display information about that user (e.g. number of observations made)
- Navigation of the app can be done through a nav bar or through links on each pages
- A search map is availble that has all the observations marked with clickable markers using Google Maps API.
  - Clicked markers will send the user to that observation's page.
- Observation's page has individual map that is zoomed to the local area of the observation's location.
- Users can view all observations or account holder's profile through index pages (no account needed).
  - Users' index page shows a lists of random users to pick from

### Observation Upload/Edit

Once logged in, users can click on the upload button in the header/nav bar that will take them the the upload form

<!-- add img of the form here -->

Users can optionally select image files from their local machine to upload by clicking on the 'add image' button. If the user does not specify a datetime for when the observation occured the form will auto fill the date time with the datetime when the form was opened on submition.

Clicking on the location field will open up a modal that contains a map. Clicking anywhere on the map will take the coordinates of that location and populate the location field with the latitude and longitude of that clicked location. 

The user also has the option to add a description to the observation before submitting it. After submitting thier observation they will be sent to the home page which holds all of their observations.

If a user goes to own of their own observation's page they will have access to an edit and delete button. Pressing the delete button will delete that observation and send the user back to their home page. Pressing the edit button will take the user to an edit form, similar in look at an upload observation form. The edit form will have the data slots prefilled with it's previous information. After submitting an edit the user will be sent back to the observation's page where they can see their changes.

### Add Identification/Comments

For each observation, users can add identifications or comments. Both identifications and comments have a body where users can write their thoughts, however only the identification contains an addition field where users can suggest the species of the organism observed.

Identifications are used to contribute to the identiy of the observation. Comments will not alter the identity of the observation and are used to contribute only to the discussion of the observation. 

### Identity of Observation

At the top of each observation page will be a name of the community agreed species. The name that has the most identifications will be the community agreed species. If there are no identifications for the observation, the observation will be named "Life". At least one identification is necessary for the observation to be listed as something other than "Life". If there are multiple identifications have have equal number of counts, the community agreed species will default to the identification made first out of the possible top identifications.

### Search

A search bar is located in the nav bar. This search bar is used to filter observations by top identifications and navigate the user to the page that contains a map of the world showing all observations matching the filter in the search bar. The filter is default to none and can be reset by searching with no filter.

## Upcomming Features

- Users may make more than one identification per observation but only the latest observation counts (one valid identification per user).
- Logged in users can agree or disagree with identifications (Agreeing to an indentification submits the same identification to that observation. Submitting a different identification is disagreeing).
- Users can use the search bar at the top of the screen to filter all the observations by location, username, or taxa
- Users will have access to edit their information through their profile page (including profile picture, username, name, description, and more).
