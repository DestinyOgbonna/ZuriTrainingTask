const users = require('../new_user.json')
const fs = require('fs');
exports.deleteSingleFlight = (req, res) => {
    let id = req.params.id;

    let foundUser = users.pop(user => user.id == id)
    
    let stringedData = JSON.stringify(users, null, 2);  //null, 2 is for indentation

    fs.writeFile('new_user.json', stringedData, (err) => {
        if (err) {
            return res.status(500).json({ message: 'Internal Server Error' })
        }else{
            return res.status(200).json({ message: 'Success' })
        }
    })

    if (foundUser != id ) {
        return res.status(404).json({ message: 'User not found' })
    } else {
        return res.status(200).json({ succesfully_deleted: foundUser  })
    }

}