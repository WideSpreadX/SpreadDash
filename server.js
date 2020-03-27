const io = require("socket.io")(3000);

io.on("connection", socket => {
  console.log("New User Entered Chat");
  socket.emit("chat-message", "Hello Message");
  socket.on("send-chat-message", message => {
    console.log(message);
  });
});
