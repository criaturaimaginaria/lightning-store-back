require('dotenv').config();
const express = require('express');
const port = process.env.PORT;
const cors = require('cors');
const app = express();

// CORS
app.use(
  cors({
    origin:"*",
  })
);


app.get("/partituras", (req, res) =>{
  res.json({"0":"https://drive.google.com/file/d/13H5qmUmHhvXeltGC5RugxEDKYE7nqjPU/view?usp=sharing",
    "1":"https://drive.google.com/file/d/1y3DJUFf1A9SN3NHg9sJ6QMbOvlIARAZK/view?usp=sharing",
    "2":"https://drive.google.com/file/d/1KC00wxaPx7lgsIPoQHa81FQgSPwBGrTy/view?usp=sharing",
    "3":"https://drive.google.com/file/d/1eBICEkqQ7VUG_tihwN35P5-d00bUGP0w/view?usp=sharing",
    "4":"https://drive.google.com/file/d/1Keopj_pNqOZ35R4gAn7HM7os4AYyDZPl/view?usp=sharing",
    "5":"https://drive.google.com/file/d/1gZ-X6elzmDZbWX3Tmlw4S2hai1YykWRd/view?usp=sharing",
    "6":"https://drive.google.com/file/d/1nHxNdoVYy5ZXBnAxjr1RtN8eU00P8Uja/view?usp=sharing",
    "7":"https://drive.google.com/file/d/1TgoMB6qwhtE8urXzkD2FYxBN22cMQrv2/view?usp=sharing",
    "8":"https://drive.google.com/file/d/1uTAFLe10mT824LtzO8arbs1uvNOyCpr_/view?usp=sharing",
    "9":"https://drive.google.com/file/d/1lC61V-SlE5jJGlNaSitT1c2HUCeWuCAx/view?usp=sharing"})
    })


app.listen(port, () => {
  console.log(`Listening at port ${port}`);
});

app.use(express.json());

// Routes

app.use('/', require('./routes/buda'));

// app.get("/api", (req, res) =>{
//   res.json({"users": ["user1", "user2", "user3"]})
// })
