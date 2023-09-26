const AbstractManager = require("./AbstractManager");

class CategoryManager extends AbstractManager {
  constructor() {
    super({ table: "Category" });
  }

  async create(category) {
    try {
      const [result] = await this.database.query(
        `INSERT INTO ${this.table} (name, description) VALUES (?, ?)`,
        [category.name, category.description]
      );

      return result.insertId;
    } catch (error) {
      throw new Error(`Error creating category: ${error.message}`);
    }
  }

  async read(id) {
    try {
      const [rows] = await this.database.query(
        `SELECT * FROM ${this.table} WHERE id = ?`,
        [id]
      );

      return rows[0];
    } catch (error) {
      throw new Error(`Error reading category: ${error.message}`);
    }
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of items
    return rows;
  }

  async update(category) {
    try {
      await this.database.query(
        `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
        [category.name, category.description, category.id]
      );

      return "Category updated successfully";
    } catch (error) {
      throw new Error(`Error updating category: ${error.message}`);
    }
  }

  async delete(id) {
    try {
      await this.database.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
      return "Category deleted successfully";
    } catch (error) {
      throw new Error(`Error deleting category: ${error.message}`);
    }
  }
}

module.exports = CategoryManager;
