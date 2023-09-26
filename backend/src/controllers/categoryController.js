const tables = require("../tables");

const browse = async (req, res) => {
  try {
    console.log(res);
    const categories = await tables.category.readAll();
    res.json(categories);
  } catch (error) {
    // Handle the error and respond with an appropriate status code and message
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const read = async (req, res) => {
  try {
    const category = await tables.category.read(req.params.id);
    if (category == null) {
      res.sendStatus(404); // Not Found
    } else {
      res.json(category);
    }
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const edit = async (req, res) => {
  try {
    const category = req.body;
    await tables.category.update(category);
    res.sendStatus(204); // No Content
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const add = async (req, res) => {
  try {
    const category = req.body;
    const insertId = await tables.category.create(category);
    res.status(201).json({ insertId });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const destroy = async (req, res) => {
  try {
    await tables.category.delete(req.params.id);
    res.sendStatus(204); // No Content
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
};
