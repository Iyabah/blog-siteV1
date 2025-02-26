const db = require("../config/db");

class User {
  static async createUser(username, email, hashedPassword) {
    const sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    return db.execute(sql, [username, email, hashedPassword]);
  }

  static async findUserByEmail(email) {
    const sql = "SELECT * FROM users WHERE email = ?";
    const [rows] = await db.execute(sql, [email]);
    return rows.length ? rows[0] : null;
  }
}

module.exports = User;
