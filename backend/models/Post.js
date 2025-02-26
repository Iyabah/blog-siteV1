const db = require("../config/db");

class Post {
  static async createPost(title, content, userId) {
    const sql = "INSERT INTO posts (title, content, user_id) VALUES (?, ?, ?)";
    return db.execute(sql, [title, content, userId]);
  }

  static async getAllPosts() {
    const sql = "SELECT posts.*, users.username FROM posts JOIN users ON posts.user_id = users.id ORDER BY posts.created_at DESC";
    return db.execute(sql);
  }
}

module.exports = Post;
