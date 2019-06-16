# smart_parking-cloud-
This project defines API for Smart Parking Solution which will gather local parking spot information and send it to cloud. On cloud we have API to store that data into a DB and user API which gets the free and occupied parking spots. User API's can be consumed by Mobile apps or web services.
Also the state of a parking spot can be any of the two : occupied and unoccupied


## API's
Currently there are 3 API to store and retrive information from the cloud

### /saveSlots
This API will be called by our edge device which will be present at the parking location. Data will be received in JSON format and will be added to mongoDB with the timestamp.

Edge Device : https://github.com/samteck/smart_parking

### /freeSlots
This API will send an int array of free slots available at the parking lot

### /occupiedSlots 
This API will send an int array of occupied slots at parking lot


## Getting Started
Here we will guide you thorugh the internal workings of the server application. Below are the technologies used to make this web application

### MVC
We will use MVC architecture to design our node application. Below is explanation of files in MVC

#### index.js
This is the main file of our project which will start the server and receives the requests and routes them to router

#### route.js
This file will get the requests and forward them to requested controller funciton

#### controller.js
This is the main file where logic of the API's is written. This will also perform DB CRUD operations.

#### model.js
This file defines the schema of our DB

<img src="https://github.com/samteck/smart_parking_cloud/blob/master/smart_parking_cloud_DFD.png" width="500">


## Technologies Used

### Node.JS
Node JS is an runtime environment for Javascript code which can be run outside browser. It is based on Google's V8 javascript engine.

### Express.JS
Express JS is a web development framework for Node.JS

### MongoDB
Mongo DB is a NOSQL database which is highly flexible and scalabe. We have created only one collection in this project named test.

### NPM
NPM is a node package manager which help us to start with writing our code easily. It also contains a package.json file which list all the dependencies and helps to get started with our code easily on a new machine.

### Mongoose
Mongoose is an object data modelling library which helps us to interect with mongoDB via our Node.js app.

### Body-Parser
Body-Parser is a module which helps us to parse the data sent in the body of a POST request.


## Deploying on AWS EC2 instance / Local Machine
Here we will discuss how to deploy this project on AWS EC2 instance (or local machine)

### Setup and EC2 instance with Linux AMI (default free tier)
Set up the basic EC2 instance and ssh into the machine using the pem file (make sure to chmod 400 for pem file). Also make sure to expose tcp port 3000.

Run below command to install Git, Node and MongoDB
```
sudo yum install git // install git

// install node via NVM 
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash // again login to console to activate
nvm install node
npm install nodemon

// install mongoDB
vi /etc/yum.repos.d/mongodb-org-3.0.repo

//add below content in file created above
[mongodb-org-3.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/3.0/x86_64/
gpgcheck=0
enabled=1

sudo yum install -y mongodb-org
sudo service mongod start       //start the mongo daemon
mongo   //open mongo shell
```

Now our installations are complete, we will begin with setting our project

```
//clone git repo
git clone https://github.com/samteck/smart_parking_cloud.git

//go into repo dir
npm install     //this will install all the dependencies from the package.json

//now you can start your application by
node index.js
```
We have included a Dummy function which imitates the hardware aspects of our project and encapsulates the inner working of the hardware. Run it by opening another ssh session for aws

```
python3 Dummy_Driver_Code.py
```

Now you can open your Browser/POSTMAN to test these API's.

##Future Addition
We will add more API to this app to different other fucntionalities.


