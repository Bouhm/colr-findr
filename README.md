# Colr Findr

Simple app for displaying color swatches and their respective shades.

# Built with

- React with TypeScript
- CSS-in-JS with Styled-Components
- Node.js + Express
- MongoDB

# Getting started

These instructions will get you a copy of the project up and running on your local machine for development.

## Development setup

Clone the repository to the local machine. In the root directory, the application is split into its client and server files. The server and client will both have to be running for the application to run in development.

### Server

The server will serve as the API endpoint for getting colors.
First, connect to your MongoDB account. Create a `.env` file in the root folder and fill in the respective environment variables.

```sh
MONGO_USER=
MONGO_PASSWORD=
DATABASE=
PORT=
```

Once the development database is hooked up to the MongoDB cluster, run this command to seed the database.

```sh
npm run seed
```

And then start the Express server in development mode. The application will be running on `localhost:8080`.

```sh
npm run dev
```

The API includes a compiled list of colors including hex codes and an approxmation of the hue group they belong to.

### Client

Install the dependencies for the app with the following command.

```sh
npm install
```

Then start the React app with this command. The app will be running on `localhost:3000` by default.

```sh
npm run start
```

For deployment, use the following command:

```sh
npm run build
```

# Usage

Click on a color card to get a detailed view of the color including its shades. You can also filter colors by using the search bar, or by category of hues using the side panel.
