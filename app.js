
// ---------------[ Step 01: Set up ]
const express = require ("express");
const fs = require ("fs") // --> import JSON
const app = express();
const PORT = process.env.PORT || "3000";

// ---------------[ MW ]
app.use(express.static("public"))

// ---------------[ Step 02: Read data ]
// Food
app.get("/food/data", (req, res) => {
    fs.readFile(__dirname+'/data/food.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

// drinks
app.get("/drinks/data", (req, res) => {
    fs.readFile(__dirname+'/data/drinks.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

// desserts
app.get("/desserts/data", (req, res) => {
    fs.readFile(__dirname+'/data/desserts.json', 'utf8', (err, data)=> {
        if (err) res.status(500).send("Server error! Check your server!")
        res.json(JSON.parse(data))
    })
});

// ---------------[ Step 03: Set up Route ]

app.get("/food", (req, res) => {
    res.sendFile(__dirname+'/public/food.html')
})

app.listen(PORT, () => {
    console.log(`Currently Listening on ${PORT}`);
  });
