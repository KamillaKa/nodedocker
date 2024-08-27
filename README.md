# Simple Node.js Express App with MongoDB and Docker

## Project Overview

This project is a Dockerized Node.js application using Express and MongoDB. The application is set up to support live-reloading during development using `nodemon`.

## Features

- **Dockerized**: The app and MongoDB are fully containerized using Docker.
- **Live Reloading**: Integrated with `nodemon` for automatic server reloads during development.
- **MongoDB Integration**: MongoDB is used to store and retrieve data.

## Getting Started

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/simple-node-docker-app.git
   cd simple-node-docker-app

2. **Install Node.js dependencies**:
    ```bash
    npm install

## Running the Application

### Using Docker Compose

1. **Build and Run the Application**:
    ```bash
    docker-compose up --build

2. **Access the Application: Open your browser and go to 'http://localhost:3000'.**

## MongoDB
**MongoDB URI:** The app connects to MongoDB using the URI `mongodb://mongodb:27017/mydatabase.`
**Database and Collection:** The database used is `mydatabase`, and the collection is mycollection.

## Troubleshooting
**Port Conflicts:** Ensure that port `3000` for the app and `27017` for MongoDB are not being used by another application on your machine.
**MongoDB Connection:** If the app is unable to connect to MongoDB, ensure the service is running and accessible at `mongodb://mongodb:27017.`