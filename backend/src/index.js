require("dotenv").config();
const app = require("./App");
require("./database");

async function init() {
  try {
    await app.listen(app.get("port"));
    console.log(`Server on port ${app.get("port")}`);
  } catch (error) {
    console.log(error.message);
  }
}

init();
