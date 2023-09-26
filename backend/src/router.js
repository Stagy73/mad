const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const itemControllers = require("./controllers/itemControllers");
const categoryController = require("./controllers/categoryController");

// Route to get a list of items
router.get("/clouds", itemControllers.browse);
router.get("/api/categories", categoryController.browse);

// Route to get a specific item by ID
router.get("/clouds/:id", itemControllers.read);

// Route to add a new item
router.post("/clouds", itemControllers.add);

/* ************************************************************************* */

module.exports = router;
