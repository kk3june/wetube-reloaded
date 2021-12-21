import "dotenv/config";
import "./db.js";
import "./models/Video.js";
import "./models/User.js";
import app from "./server.js";

const PORT = 3000;

app.listen(PORT, () => console.log(`✅ Listening!`));
