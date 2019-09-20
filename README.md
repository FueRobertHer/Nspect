# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

Discussion of technologies used
Delve deep into ~2 features that show off your technical abilities. Discuss both the challenges faced and your brilliant solutions.
Code snippets to highlight your best code (markdown code snippets, NOT screenshots)

# Nspect
app Academy full stack project iNaturalist clone

[Nspect](https://n-spect.herokuapp.com/#/)


## Overview
Nspect is social media and citizen science website where users can upload, view, and interact with each other's observations of plants, animals or any other living organism through comments and a agree disagree system. It was built utlizing a Rails backend with a React/Redux frontend.

This project will be created within an approximately 10 day timeframe, but will have additional features added in the future.

## Features
- Rails 5.2 session-based user-authentication / Demo login
- Seach map that filters observations to the current boundaries of the map
- Form page to only allow users to add or edit observations
  - Form has a modal containing a map that will allow the user to select location based on where you click
  - Form allows you to upload images from your local drive and previews the image before submiting
- 

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

## Upcomming Features
- BCrypt encrypted user authentication from frontend to backend
- Logged in users can post observations and their taxa hypothesis with additional information such as a description, gps location, media (images or audio) files as supporting evidence.
  - Once posted, users can edit their taxa hypothesis, description, location, and/or media files of the observation.
- Logged in users can agree or disagree with the observation once.
  - Each observation's display taxa is the highest agreed taxa or the most common denominator taxa if no leading taxa.
- Logged in users can also comment on a video.
- Users can use the search bar at the top of the screen to filter all the observations by location, username, or taxa
- Users have access to a nav bar that can assist them in navigating to key locations of the site.
