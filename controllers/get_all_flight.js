const users = require('../new_user.json')

exports.getAllFlights = (req, res) => {
    res.json({users})
}