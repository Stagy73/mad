// Load the express module to create a web application
const express = require("express");

const cors = require("cors"); // Import the cors module

const app = express();

// Configure it

/* ************************************************************************* */

// CORS Handling: Enable CORS and define allowed origins for production
app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL, // Keep this one, after checking the value in `backend/.env`
      "http://localhost:3000",
      "http://127.0.0.1:3000", // Add your frontend URL here
    ],
  })
);

/* ************************************************************************* */

// Request Parsing: Uncomment the parsing options you need for your application
app.use(express.json());

app.use(express.text());
app.use(express.raw());

/* ************************************************************************* */

// Cookies: If you plan to use cookies, uncomment the following lines
// const cookieParser = require("cookie-parser");
// app.use(cookieParser());

/* ************************************************************************* */

// Import and mount API routes
const router = require("./router");

app.use("/api/categories", router);

/* ************************************************************************* */

// Production-ready setup: Enable these sections for production

// 1. Uncomment the lines related to serving static files and redirecting unhandled requests.
// 2. Ensure that the `reactBuildPath` points to the correct directory where your frontend's build artifacts are located.

// const reactBuildPath = `${__dirname}/../../frontend/dist`;

// Serve React resources (uncomment this for production)
// app.use(express.static(reactBuildPath));

// Redirect unhandled requests to the React index file (uncomment this for production)
/*
app.get("*", (req, res) => {
  res.sendFile(`${reactBuildPath}/index.html`);
});
*/

/* ************************************************************************* */

module.exports = app;
