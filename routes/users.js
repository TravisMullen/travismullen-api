var express = require('express');
var router = express.Router();

// db.createUser({ user: 'jsmith', pwd: 'some-initial-password', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
// Successfully added user: {
//     "user" : "jsmith",
//     "roles" : [
//         {
//             "role" : "userAdminAnyDatabase",
//             "db" : "admin"
//         }
//     ]
// }

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user!');
});

module.exports = router;