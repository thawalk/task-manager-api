const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     // if (req.method === 'GET'){
//     //     res.send('GET requests are disabled')
//     // }
//     // else{
//     //     next()
//     // }
//     res.status(503).send("Maintenance")
// })

// const multer = require('multer')
// const upload = multer({
//     dest: "images",
//     limits:{
//         fileSize: 1000000
//     },
//     fileFilter(req, file, cb) {

//         if(!file.originalname.match(/\.(doc|docx)$/)) {
//             return cb(new Error('please upload a word document'))
//         }

//         cb(undefined, true)
//         // cb(new Error('File must be a pdf'))
//         // cb(undefined, true)
//         // cb(undefined, false)
//     }

// })

// const errorMiddleWare = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload',upload.single('upload'), (req, res) => {
//     res.send()
// }, (error, req, res, next) => {
//     res.status(400).send({error: error.message})
// })
app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5f1d8c4dea2c48aa0405ab46')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner);

//     const user = await User.findById('5f1d8a255c957a9d848c7e23')
//     //console.log(user)
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)

// }

// main()
// const pet = {
//     name: "hal"
// }

// pet.toJSON = function () {
//     console.log(this);
//     return this
// }

// console.log(JSON.stringify(pet))
//const jwt = require('jsonwebtoken');

// const myFunction = async () => {
//     const token  = jwt.sign({ _id: 'abc123'}, 'thisismynewcourse', {expiresIn: '20 seconds'})
//     console.log(token);

//     const data = jwt.verify(token, 'thisismynewcourse')
//     console.log(data);
// }

//const bcrypt = require('bcrypt');
// const myFunction = async () => {
//     const password = 'Red12345!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password);
//     console.log(hashedPassword);

//     const  isMatch  = await bcrypt.compare('Red12345!', hashedPassword)
//     console.log(isMatch);
// }

//myFunction();