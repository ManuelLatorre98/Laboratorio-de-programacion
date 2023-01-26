const pool= require('../config/dbConection.js')

module.exports = {
  async createCategory(category_name){
    await pool.query(
      `INSERT INTO category (category_name) 
      VALUES ('${category_name}')`
    )
    return {category_name}
  },

  async getCategories(from, amount){
    const [rows] = await pool.query(
      `SELECT *
      FROM category
      LIMIT ${from},${amount}`
      
    )
    return rows
  },
  async getCategory(category_name){
    const [rows] = await pool.query(
      `SELECT *
      FROM category
      WHERE category_name='${category_name}'`
    )
    return rows;
  },
  async deleteCategory(category_name){
    await pool.query(
      `DELETE FROM category
      WHERE category_name='${category_name}'
      `
    )
  },

  async updateCategory(dataId, data){
    const {category_newname} = data
    await pool.query(
      `UPDATE category
      SET category_name='${category_newname}'
      WHERE category_name='${dataId.category_name}'
      `
    )
  }
}