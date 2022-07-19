import './styles.css';
app.use(express.static("public"));

// Bring in the express server and create application
let express = require('express');
let app = express();

// Use the express Router object
let router = express.Router();

// Create GET to return weather
router.get('/', function (req, res, next) {
  res.send("Denver Colorado");
});

// Configure router so all routes are prefixed with /api/v1
app.use('/api/', router);

// Create server to listen on port 5000
var server = app.listen(5000, function () {
  console.log('Node server is running on http://localhost:5000..');
});

//test code
const express = require('express');

app.use(express.static('public'));

app.post('/api/single-file', (req, res) => {
  const f = req.files.interestForm;
  res.set('Content-Type', 'text/html');
  f.mv('/uploads/' + f.name);
});

//

