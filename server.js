//dependencies
const db = require ('./db/connection');
const express = require('express');
const inputCheck = require('./utils/inputCheck');
const apiRoutes = require('./routes/apiRoutes');

//ports
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//api route
app.use('/api', apiRoutes);

//Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// connection function to show connection to port 3001
// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });