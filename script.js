const mongoose = require('mongoose');
const User = require('./models/userModel');//userModel
 
mongoose.connect('mongodb://127.0.0.1:27017/mongoosetest').then(()=>{
    console.log("Connected");
}).catch((err)=>{
    console.log("Not Connected",err);
})

// const user = new User({
//     name:"Darshan",
//     age:20
// });

// user.save().then(()=>{
//     console.log("user Saved");
// })
//inserting 

async function run() {
   
    try{
        const user = await User.findById('66ae41e39b0a9f03fbe026b9');
        //user.sayHi()
        user.name = 'Ravi';
        await user.save();
        console.log(user);    
        console.log(user.namedEmail);
        // const newUser = await User.create({
        //     name:"Darshan",
        //     // age:'afda', error
        //     age:13,
        //     email:'darshankumaravelk@gmail.com',
        //     createdAt:'2024-09-02',
        //     hobbies:['Sports',"music"],
        //     address:{
        //         street:'2nd street'
        //     }
        }// newUser is document type
    catch(e){
        console.log(e.message);//use e.erros for complete information
    }
        // newUser.name = "Ravi";
        // await newUser.save();

    // const newUser = await User.create({
    //         name:"Darshan",
    //         age:20,
    //         hobbies:['Sports',"music"],
    //         address:{
    //             street:'2nd street'                     Initially like this after try catch used that
    //         }
    //     });// newUser is document type

    //     // newUser.name = "Ravi";
    //     // await newUser.save();
    // console.log(newUser);    
}

run();