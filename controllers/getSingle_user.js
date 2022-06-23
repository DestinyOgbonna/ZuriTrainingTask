const users = require('../new_user.json')

exports.getUserbyId = (req, res) => {
 
    let id = req.params.id;

    let foundUser = users.find(user => user.id == id)

    if (!foundUser) {
        return res.status(404).json({ message: 'User not found' })
    } else {
        return res.status(200).json({ user: foundUser })
    }
}