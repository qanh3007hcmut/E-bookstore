/* eslint-disable no-undef */
const db = require('../db/database');

async function find(username, password) {
  const query = "SELECT username, password FROM customer_account  WHERE username = ?"
  try {
    const [rows] = await db.query(query, [username]);
    const result = rows[0]
    if(result) {
      if(result.password === password) return 2;
      else return 1; 
    } else return 0;
  } catch (err) {
    console.error('Error executing query:', err);
  }
}

async function info(username) {
  const query = "SELECT * FROM customer_account WHERE username = ?"
  try {
    const [rows] = await db.query(query, [username]);
    const result = rows[0];
    if (result) return result;
    else return 0;
  } catch (err) {
    console.error('Error executing query:', err);
  }

}
// 0 la error hoac sai username, 1 la sai pass, 2 la successful

module.exports = {
    find,
    info
}; 