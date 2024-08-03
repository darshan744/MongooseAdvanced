const mongoose = require('mongoose');
const addressSchema  = mongoose.Schema({
    city:String,
    street:String
});

const userSchema = mongoose.Schema({
    name:String,
    age:{
        type:Number,
        validate:{
            validator: v => v%2===0,
            message:props =>`${props.value} is no a number`
        }
    },
    // email:String,
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    createdAt:{
        type:Date,
        default: ()=>Date.now()
    },
    updatedAt:Date,
    bestFriend:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:'user'
    },
    hobbies:[String],
    // address:{
    //     city:String,
    //     street:String
    // }
    address:addressSchema
});

userSchema.methods.sayHi = function() {
    console.log(`Hi ${this.name}`);
}

userSchema.statics.findByName = function (name){
    return this.find({name:name});
}

userSchema.query.byName = function (name){
    return this.where({name:name});
}//for sub function i.e chain function 

userSchema.virtual('namedEmail').get(function(){
    return `${this.name} <${this.email}>`
})

userSchema.pre('save',function(next){
    this.name = `Mr.${this.name}`;
    next();
})

userSchema.post('save',function(doc,next){
    doc.name = `${doc.name} modified`;
    next();
})
const userModel = mongoose.model('user',userSchema);



module.exports = userModel;