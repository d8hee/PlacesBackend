# Places App

Backend repo for my 'Places' app, for builder users to create and manage an inventory of their property listings for sale. This app uses PostgreSQL for it's database with Sequelize. Express is used as the backend framework with packages: Cors, Method-override...

## API Link
This APi can be accessed with: "https://placesappbackend-12a451d9f048.herokuapp.com/places/"

## Endpoints
Below is a list of methods and endpoints which can be used to access the data in the API  
GET /places/projects (all projects)  
GET /project/:id (show 1 project) 
GET /project/new (form page to create a new project)  
POST /project (create a new project)  
GET /project/:id/edit (edit form to edit a project)  
PUT /project/:id (edit a project)  
DELETE /project/:id (delete a project)  

Routes for Listings  
GET /listings (all listings)  
GET /listings/:id (show 1 listing)  
GET /listings/new (form page to create a new listing)
POST /listings/ (create a new listing)  
GET /listings/:id/edit (edit form to edit a listing)  
PUT /listings/:id (edit a listing)  
DELETE /listings/:id (delete a listing)
