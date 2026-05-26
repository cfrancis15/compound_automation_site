const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3001;
const clientBuildPath = path.join(__dirname, "..", "client", "build");

if (process.env.NODE_ENV === "production") {
  app.use(express.static(clientBuildPath));

  app.get("*", function handleSpaRequest(request, response) {
    response.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

app.listen(PORT, function onListen() {
  console.log("Server running on port " + PORT);
});
