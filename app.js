let express = require('express')  // importing module express

let mysql = require('mysql') //importing module mysql

const PORT = 3000 // defining port to 3000 so server would start at port 3000

var db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodemysql'
}); // db details

db.connect((err)=>{
	if(err){
		throw err;
	}
	console.log("Mysql is connected....")
}) // connecting to database

var app = new express()


// creating users table
app.get('/createusertable', (req, res) => {
	let sql = "CREATE TABLE users (id int(11) AUTO_INCREMENT, firstname VARCHAR(45), lastname VARCHAR(45), email VARCHAR(55), PRIMARY KEY (id))"
	db.query(sql, (err, result) => {
			if(err)
				throw err
			else
				console.log(result)
			res.send("Table user created...")
	})
})

// inserting data to db(user 1)
app.get('/insertuserdata1', (req, res) => {
	let userData = {
		firstname: "Naveen",
		lastname: "Gupta",
		email: "nvngupta1992@gmail.com"
	}
	let sql = "INSERT INTO users SET ?"
	db.query(sql, userData, (err, result) => {
			if(err)
				throw err
			else
				console.log(result)
			res.send("Data inserted successfully...")
	})
})

// inserting data to db(user 2)
app.get('/insertuserdata2', (req, res) => {
	let userData = {
		firstname: "Praveen",
		lastname: "Gupta",
		email: "praveen.gupta@mailinator.com"
	}
	let sql = "INSERT INTO users SET ?"
	db.query(sql, userData, (err, result) => {
			if(err)
				throw err
			else
				console.log(result)
			res.send("Data inserted successfully...")
	})
})

// fetching all users data
app.get('/fetchuserdata', (req, res) => {
	let sql = "SELECT * FROM users"
	db.query(sql, (err, results) => {
			if(err)
				throw err
			else
				console.log(results)
			res.send("Data fetched successfully...")
	})
})


// fetching user data
app.get('/fetchuserdata/:id', (req, res) => {
	let sql = `SELECT * FROM users WHERE id =${req.params.id}`
	db.query(sql, (err, result) => {
			if(err)
				throw err
			else
				console.log(result)
			res.send("Data fetched successfully...")
	})
})

// starting server at port 3000
app.listen(PORT, () =>{
	console.log("Server started at port: ", PORT)
})


