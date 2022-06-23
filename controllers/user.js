
const users = require('../new_user.json')
const fs = require('fs');
exports.newUser = (req, res) => {
    users.push(req.body)
    let stringedData = JSON.stringify(users, null, 2);  //null, 2 is for indentation

    fs.writeFile('new_user.json', stringedData, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }else{
            return res.status(200).json({ message: req.body })
        }
    })
} 