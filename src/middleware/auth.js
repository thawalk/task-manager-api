// const jwt = require('jsonwebtoken')
// const User = require('../models/user')

// const auth = async (req, res, next) => {
//     try {
//         print('hello')
//         const token = req.header('Authorization').replace('Bearer ', '')
//         print('before hello')
//         const decode = jwt.verify(token, 'thisismynewcourse')
//         print('hello')
//         const user = await User.findById({_id: decoded._id, 'tokens.token': token})

//         if(!user){
//             throw new Error()
//         }

//         req.user = user
//         next()
//     } catch (e) {
//         res.status(401).send({error: "please authenticate"})
//     }
// }

// module.exports = auth

const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.token = token
        req.user = user
        next()
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' })
    }
}

module.exports = auth