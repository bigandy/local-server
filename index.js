const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = 6767;

io.on("connection", socket => {
	console.log("connected to server");
  socket.emit("server-status", "CONNECTED TO SERVER");


  socket.on("message-from-frontend", message =>
    console.log("from front-end", message)
  );
});



http.listen(port, () => {
	console.log(`Socket io server up and running on port ${port}`);
});
