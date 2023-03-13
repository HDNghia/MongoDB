// Using Node.js `require()`
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1/k5-Nodemy');

const Schema = mongoose.Schema;

const account = new Schema({
    username: String,
    password: String,
    course: {
        type: String,
        ref: 'course'
    }
}, { collection: 'Account' });
const AccountModel = mongoose.model('account', account);

const course = new Schema({
    name: String,
    teacher: String,
    lesson: [],
    address: {}
}, { collection: 'course' });
const CourseModel = mongoose.model('course', course);

// populate ( dung de lien ket 2 bang)
AccountModel.find({ username: "populate" })
    .populate('course')
    .then(function (data) {
        console.log('data', data);
    })
    .catch(function (err) {
        console.log("loi", err);
    })

// CourseModel.find({})
//     .then(function (data) {
//         console.log('data', data);
//     })
//     .catch(function (err) {
//         console.log("loi", err);
//     })

//create
// AccountModel.create({
//     username: "create",
//     password: "123"
// })

//update
// AccountModel.updateMany({
//     username: "nghia",
//     password: "123"
// }, {
//     username: "nghiaUdpate",
//     password: "123Udpate"
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("that bai");
//     })
//delete
// AccountModel.deleteMany({
//     username: "nghiaUdpate"
// })
//     .then(data => {
//         console.log(data)
//     })
//     .catch(err => {
//         console.log("that bai")
//     })

