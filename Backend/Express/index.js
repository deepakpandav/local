const express = require("express");
const app = express();



let port =8080;

app.listen(port, () =>{
    console.log(`app is listening on port ${port}`);
});
// app.use((req, res) => {
//     // console.log(req);
//     console.log("request received");
//     // json respone
//     // res.send({
//     //     name: "apple",
//     // color: "red",
//     // });
//     // HTMl Response
//     let code = ("<h1> This my HTML Tag</h1> <ul><li>apple</li><li>orange</li></ul>");
//     res.send(code);
// });

// app.get("/apple", (req, res) =>{
//     res.send("you contacted apple path");
// })

// app.get("/orange", (req, res) =>{
//     res.send("you contacted orange path");
// })