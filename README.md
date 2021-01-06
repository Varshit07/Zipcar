# Group Project 202 Enigma

### Team Members

* Karan Patel
* Ronak Shah
* Samkit Sheth
* Varshit Shah

### Node-React App
* Frontend: React with Redux Hooks
* Backend: Node.js
* Database: Sql (rds)

Coding standards followed accoriding to ESLint Airbnb JavaScript style guide on front-end: [See configurations](https://github.com/Varshit07/Zipcar//blob/master/frontend/.eslintrc.json "Frontend ESLint Configurations")

Coding standards followed accoriding to ESLint Airbnb JavaScript style guide on back-end: [See configurations](https://github.com/Varshit07/Zipcar/blob/master/backend/.eslintrc.json "Backend ESLint Configurations")

We decided to use this tech-stack after careful consideration of the project requirements. React is a frontend library which is efficient and flexible. Considering the app of this size node was a better choice for fast and easy development and deployment. We decided to use SQL database.


#### Running - the easiest way is to run would be to run the docker image we build, the link to the docker repo is provided below. 
Ubuntu command to run: `sudo docker run -p 80:8080 -it image`

## [Docker Link](https://hub.docker.com/r/samkitsheth95/zipcardock)


## Deployment With Extra Credit

We Dockerizing our application for deployment. We utilized Elastic Beanstalk and deployed our docker to it. Then we configured the AWS Auto Scaleing Group and added it to the Load Balancer. Config Image of the deployed app shown below:-

#### Deployment Image
![Deployment Image](https://github.com/Varshit07/Zipcar/blob/master/Diagram/deployment_diagram.png)

#### Config
![AWS Config](https://github.com/Varshit07/Zipcar/blob/master/Diagram/awsconfig.png)


## Testing the Application

#### Front End testing with Enzyme
![Front End testing with Enzyme](https://github.com/Varshit07/Zipcar//blob/master/Diagram/front_end_testing_with_enzyme.png "Front End testing with Enzyme")

#### API testing with Mocha
![API testing with Mocha](https://github.com/Varshit07/Zipcar//blob/master/Diagram/API_testing_with_Mocha.png "API testing with Mocha")

#### Performance Testing on Production with 1000 users concurrent requests
![Performance Testing on Production with 1000 users concurrent requests](https://github.com/Varshit07/Zipcar//blob/master/Diagram/jmeter_testing_with_1000.png "Performance Testing on Production with 1000 users concurrent requests")

#### Performance Testing on Production with 2000 users concurrent requests
![Performance Testing on Production with 2000 users concurrent requests](https://github.com/Varshit07/Zipcar//blob/master/Diagram/jmeter_testing_with_2000.png "Performance Testing on Production with 2000 users concurrent requests")

### Performance Testing on Production with 3000 users concurrent requests
![Performance Testing on Production with 3000 users concurrent requests](https://github.com/Varshit07/Zipcar//blob/master/Diagram/jmeter_testing_with_3000.png "Performance Testing on Production with 3000 users concurrent requests")

## Wireframe for all pages(UI)
All wireframes are created with the [Pencil Project](https://pencil.evolus.vn/ "Pencil Project").
#### Login
![Login](https://github.com/Varshit07/Zipcar/blob/master/Diagram/login.png)
#### Register User
![Register](https://github.com/Varshit07/Zipcar/blob/master/Diagram/register_page_user.png)
#### Register Admin
![Register](https://github.com/Varshit07/Zipcar/blob/master/Diagram/register_page_admin.png)
#### Userhome
![Userhome](https://github.com/Varshit07/Zipcar/blob/master/Diagram/user_home.png)
#### User Search Vehicles
![User Search](https://github.com/Varshit07/Zipcar/blob/master/Diagram/user_search_vehicles.png)
#### User Booking
![User Booking](https://github.com/Varshit07/Zipcar/blob/master/Diagram/user_see_booking.png)
#### User Profile
![User](https://github.com/Varshit07/Zipcar/blob/master/Diagram/user_see_profile.png)
#### Admin Add Location
![Admin](https://github.com/Varshit07/Zipcar/blob/master/Diagram/admin_add_location.png)
#### Admin Add Vehicletype
![Admin Vehicletype](https://github.com/Varshit07/Zipcar/blob/master/Diagram/admin_add_vehicle_type.png)
#### Admin Add Vehicle
![Admin Vehicle](https://github.com/Varshit07/Zipcar/blob/master/Diagram/admin_add_vehicle.png)
#### Admin Booking
![Admin Booking](https://github.com/Varshit07/Zipcar/blob/master/Diagram/admin_see_booking.png)
#### Admin Members
![Admin Member](https://github.com/Varshit07/Zipcar/blob/master/Diagram/admin_see_members.png)

### Burndown
[Burndown](https://docs.google.com/spreadsheets/d/1WL5dxVLR9GMsYNqNbj2FRq8CIRHAC-omYwU8KmFcPrc/edit?usp=sharing
) 
![Burndown](https://github.com/Varshit07/Zipcar/blob/master/Diagram/chart.png
)
