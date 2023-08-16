const Task = require('../Model/taskmodel');
const createTask = async (req, res) =>{
    try{
        const task = await Task.create(req.body)
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({msg:error.message})
    }
}

//above function is to create task
//try and catch block are to handle errors
//task is a mongoose term

const getAllTask = async (req, res) =>{
    try{
        const task = await Task.find()
        res.status(200).json(task)
    } catch(error) {
        res.status(500).json({msg:error.message})
    }
}




const getSingleTask = async (req, res) =>{
    try{
        const {id} = req.params
        const task = await Task.findById(id)
        res.status(200).json(task)
     if(!task) {
            res.send(404).json('no task with that id')
        }
    } 
    catch(error) {
        res.status(500).json({msg:error.message})
    }
}
// delete task 
const deleteTaskById = async (req, res) =>{
    try{
        const {id} = req.params
        const task = await Task.findByIdAndDelete(id)
       
        if(!task) {
            res.send(404).json(`no task with that id:${id}`)
        }
        res.status(200).json(task)
    } 
    catch(error) {
        res.status(500).json({msg:error.message})
    }
}

const myUpdate = async (req, res) =>{
    try{
        const {id} = req.params
        const task = await Task.findByIdAndUpdate({_id:id}, req.body,{new:true,runValidation:true});
       
        if(!task) {
            res.send(404).json(`no task with that id:${id}`)
        }
        res.status(200).json(task)
    } 
    catch(error) {
        res.status(500).json({msg:error.message})
    }
}

module.exports = {createTask, getAllTask, getSingleTask, deleteTaskById, myUpdate}

//write function for different tasks, create, get, delete, update

//cors allows a server to indicate any origin as in front end and back end
//require it
//cors and axio downloaded
