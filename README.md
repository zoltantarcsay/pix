# Pix

> Upload your stuff

## Build and Start Locally

- Make sure Node.js is installed (recommended at least version 6.x).
- Install the dependencies by running `npm install`
- To build locally, run `npm run build`
- To start, run `npm start`

## Develop

Once the dependencies have are installed, run `npm run start:dev` 
to start dev servers for both the server and the client.
The client can be accessed on port `4200`.

## Docker

Requires at least Docker 17.05.

### Build

To build the app in Docker, jus run `docker build .` as normal. 
This will build the client and server apps in the first stage 
and copy the artifacts to the production container in the second stage.

This method runs everything in Docker, which means that Node.js or dependencies 
are not required locally.

### Run

To start the container, run `docker run --name pix --rm -d -p 3000:3000 pix` 
