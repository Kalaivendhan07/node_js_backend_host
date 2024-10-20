const mysql=require('mysql2');
const root=require("../path/root_path");
const path=require("path");
// console.log(root);
// require('dotenv').config({ path: "/home/pmt_User/Documents/Interview/projects/node_js_backend_host/.env" });
// console.log(path.join(root.rootDir,'.env'));
require('dotenv').config({ path: path.join(root.rootDir,'.env') });

// console.log(process.env.DB_HOST,process.env.DB_USER,process.env.DB_PASS,process.env.DB_Name);
const connection=mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_Name
});

// Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to the database:', err);
      return;
    }
    console.log('DB connected successfully');
});
  
  // Make sure to close the connection when done
//   connection.end();

module.exports=connection;