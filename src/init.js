import "dotenv/config";
import "./db";
import "./models/Video";
import "./models/User";
import app from "./server";

const PORT = 3000;

app.listen(PORT, () => console.log(`✅ Listening!`));
