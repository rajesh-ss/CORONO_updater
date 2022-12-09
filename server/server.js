const express = require('express');
const cors = require('cors');
const app = express();
const con = express();

app.use(cors());
app.use(express.json());


app.get('/message', (req, res) => {
    res.json({ message: "it's working!!" });
});

app.listen(8000, () => {
    console.log(`Server is running on port 8000.`);
  });
  
  
// con.connect(function(err) {
//     if (err) throw err;
  
//     con.query("create table Covid_details(State_Name varchar(50), Date_of_Record date, No_of_Samples int, No_of_Deaths int, No_of_Positive int, No_of_Negative int, No_of_Discharge int)", function (err, result) {
//       if (err) throw err;
//       console.log("create tables");
//       console.log(result);
  
//   });
  
//   });


// con.query("select * from Covid_details", function (err, result) {
//     if (err) throw err;
//     console.log("display tables");
//     console.log(result);

// });

//    con.query("show tables", function (err, result) {
//     if (err) throw err;
//     console.log("displaying tables");
//     console.log(result);

// });
  

// con.query("show tables", function (err, result) {
//     if (err) throw err;
//     console.log("display tables");
//     console.log(result);

// });



// con.query("insert into Covid_details values()", function (err, result) {
//     if (err) throw err;
//     console.log("displaying tables");
//     console.log(result);

// });

// con.query("select * from Covid_details", function (err, result) {
//     if (err) throw err;
//     console.log("display tables");
//     console.log(result);

// });

// con.query("insert into Covid_details values(tamil Nadu, 10/12/2020, 10, 30, 50, 60, 10)", function (err, result) {
//     if (err) throw err;
//     console.log("");
//     console.log(result);

// });
