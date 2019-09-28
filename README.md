# Tamkeen Besmart Coding Assignment

## Run Instructions


### Populate MongoDB (optional):
The database connected to the application is already populated with country and city data but if you wish to populate a new one you can use the Python script as follows:

1. Install dependencies (you can use a `virtualenv` to avoid installing them systemwide)
-  Python 3.7.4
- `dnspython==1.16.0`
- `pymongo==3.9.0`
2. Navigate to the `data` directory
3. In the python script, `prepare_data.py`, remove the `mongodb+srv://user:useruser@tamkeen-besmart-assignment-c8sua.mongodb.net/test?retryWrites=true&w=majority` URL and replace it with the URL of the DB you wish to populate.
4. Run the script:

  ```$ python prepare_data.py```


### Web Application
The repository contains two different Javascript applications, `frontend` and `backend`.

#### Install Dependencies
To run the web application you need to have the following installed:
- `node v12.9.0`
- `npm 6.10.2`


#### Running the Application
1. To install the dependencies of the `React` application, navigate to the `frontend` directory in the root directory of the repository and run:

  ```$ npm install```

2. To install the dependencies of the `Node` application, navigate to the `backend` directory in the root directory of the repository and run:

  ```$ npm install```

3. Navigate to the root directory of the repository and run:

  ```$ npm install```

4. Finally, in the root directory of the repository, run the following command to run the web application:

  ```$ npm start```

  A browser window should start where the application is served. The frontend application address is `http://localhost:3000/`. The backend application REST API address is `http://localhost:8080/`.
