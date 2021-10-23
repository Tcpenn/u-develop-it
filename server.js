//dependencies
const express = require('express');

//ports
const PORT = process.env.PORT || 3001;
const app = express();

//Express middleware
app.use(express.urlencoded({ extended: false}));
app.use(express.json);

//get route to test connection
app.get('/', (req, res) => {
    res.join({
        message: 'Hello World'
    });
});

//Default response for any other request (not found)
app.use((req, res) => {
    res.status(404).end();
});

// connection function to show connection to port 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});