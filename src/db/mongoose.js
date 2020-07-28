const mongoose = require('mongoose')
//const validator = require('validator')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false    
})

// const User = mongoose.model('User', {
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     email: {
//         type: String,
//         required: true,
//         trim: true,
//         lowercase: true,
//         validate(value) {
//             if (!validator.isEmail(value)) {
//                 throw new Error('Email is invalid')
//             }
//         }
//     },
//     age: {
//         type: Number,
//         default: 0,
//         validate(value) {
//             if (value < 0) {
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password:{
//         type: String,
        
//         required: true,
//         trim: true,
//         validate(value){
//             if(value.length <= 6){
//                 throw new Error('Password length must be more than 6')
//             }
//             if(value.toLowerCase().includes("password")){
//                 throw new Error('Password should not contain the word password')
//             }
//         }
        
//     }
// })

// const me = new User({
//     name: '   Thawalk    ',
//     email: 'My@gmail.com    ',
//     password: 'hello123'
// })

// me.save().then(() => {

//     console.log(me);
// }).catch((error) => {
//     console.log('Error', error);
// })


// const Task = mongoose.model('Task', {
//     description: {
//         type: String,
//         trim: true,
//         required: true
//     },
//     completed:{
//         type: Boolean,
//         default: false
//     }
// })

// const firstTask = new Task({
//     description: 'This is the second task',
//     completed: true
// })

// firstTask.save().then(()=>{
//     console.log(firstTask)
// }).catch((error) => {
//     console.log('Error', error);
// })