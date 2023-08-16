const { default: mongoose } = require("mongoose");
const taskschema = mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, 'please add a task']
        }
    },
    {
        timestamps:true
    }
)

 const Task = mongoose.model('Task', taskschema)
module.exports = Task;
