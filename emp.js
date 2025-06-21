let express = require("express");
let bodyParser = require("body-parser");
let path = require("path");
let mysql = require("mysql2");

let app = express();

// MySQL connection setup
let conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",  
    database: "augsep"
});


conn.connect((err) => {
    if (err) {
        console.log("Connection failed: " + err);
    } else {
        console.log("Database is connected");
    }
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve emp.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "emp.html"));
});


app.post("/save", (req, res) => {
    let { name, email, contact, sal } = req.body;

    conn.query(
        "INSERT INTO employee VALUES ('0', ?, ?, ?, ?)",
        [name, email, contact, sal],
        (err, result) => {
            if (err) {
                console.log("Not inserted: " + err);
                res.send("Error occurred");
            } else {
                if (result.affectedRows > 0) {
                    res.send("Employee added");
                } else {
                    res.send("Employee not added");
                }
            }
        }
    );
});

// Start the server
app.listen(4000, () => {
    console.log("Server started at http://localhost:4000");
});
