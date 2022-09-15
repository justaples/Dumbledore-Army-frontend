# Dumbledore's Army - Spell Tracker

## Description

Based on the book **Harry Potter and the Order of the Phoenix** by J. K. Rowling, this is a magic project meant to track spells learned by all the D.A. members. User is able to **add new members** to the army, **new spells** to the spell book and add **meetings to schedule**.\
When user is logged in, they can see all the functionality in the app. Once the user logs out they can no longer see any spells or member or meetings, only the landing page asking to login or sign up with an "invisible" effect.

## Screenshots of the app

<img width="1415" alt="Screen Shot 2022-09-15 at 4 17 31 PM" src="https://user-images.githubusercontent.com/101436947/190500812-cbbd0875-d19d-427a-a99f-618e6b47b013.png">
<img width="1415" alt="Screen Shot 2022-09-15 at 4 16 25 PM" src="https://user-images.githubusercontent.com/101436947/190500827-640dce41-754d-4b26-a7ef-eb401e6239f6.png">
<img width="1415" alt="Screen Shot 2022-09-15 at 4 17 17 PM" src="https://user-images.githubusercontent.com/101436947/190500849-8e71756c-1fe3-4284-9f24-681e9503214a.png">
<img width="1415" alt="Screen Shot 2022-09-15 at 4 17 02 PM" src="https://user-images.githubusercontent.com/101436947/190500862-6fb94f28-ecb5-405b-a758-e4038214703d.png">
<img width="1415" alt="Screen Shot 2022-09-15 at 4 16 48 PM" src="https://user-images.githubusercontent.com/101436947/190500869-0934f0c4-5115-4003-8e2a-ee6ec91c02fa.png">

## User stories

- As a user I want to be able to sign up with user name, email and password
- As a user I want to be able to login with email and password
- As a user I want to be log out 
- As a user I want to be able to add new members to Dumbledore's Army
- As a user I want to see all members with their last name in alphabetical order
- As a user I want to be able to add new Spells 
- As a user I want to see all spells in alphabetical order
- As a user I want to be able to add new meetings to the schedule
- As a user I want to see all meetings in chronological order
- As a user I want to see the past meetings 
- As a user I want to see current and future meetings displayed on a Galleon
- As a user I want the Galleon to hide the date and subject of the meeting, only displaying the information when hovering over it

## Technologies and Concepts

- Backend was coded using Python, Django, Rest Frameworks, Virtual Enviroment
- Backend Database: PostgreSQL
- Frontend was coded using React.js, styled with CSS
- CORS Headers was installed and setup on the backend to connect React and allow it to pull information from the API
- JWT Token authorization was installed on the backend for user sign up and login and also being used on the frontent through the API

## General approach

  Django backend was coded first, seting up models for Members and Spells, as well as CRUD for both models, using serializers. Model for Meetings was introduced later along with its respective CRUD.\
  React app pulled all models and RESTful routes from the backend using fetch and axios. For styling, CSS was used through the package "Styled components" because it's easier to target specific components.

## Installation instructions
- For react, run: npm i

## Unsolved problems

The original idea was to use Django Relationships in order to connect both Members and Spells models, so a Spell could be connected to a member once the member learned how to  do it.\
I was able to connect them on the backend, I was also able to show the relation on the frontend, but I was unable perform CRUD on spells on the frontend. I changed the code so the models are separate and I plan on keep working on it so I can connect them on the frontend in the future.

