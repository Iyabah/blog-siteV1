const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const postRoutes = require("./routes/postRoutes"); // Ensure this path is correct
const db = require("./config/db"); 


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json()); 
app.use('/uploads', express.static('uploads'));


db.raw("SELECT 1")
  .then(() => console.log("✅ MySQL Database Connected using Knex"))
  .catch((err) => console.error("❌ MySQL Connection Failed:", err));


app.use("/api/posts", postRoutes); 

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
