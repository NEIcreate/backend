const express = require('express')
const Task = require('../Model/taskmodel');
const { createTask, getAllTask, getSingleTask, deleteTaskById, myUpdate } = require('../Controller/taskController');
const router = express.Router()



// router.post('/api/tasks', async (req, res) =>{
//     res.send('Task created !!!')
// })


router.post('/api/tasks', createTask)
router.get('/api/tasks', getAllTask)
router.get('/api/tasks/:id', getSingleTask)
router.delete('/api/tasks/:id', deleteTaskById)
router.patch('/api/tasks/:id', myUpdate)

// async (req, res) =>{
//     try {
//         const task = await Task.create(re.body)
//         res.status(200).json(task)

//     } catch (error) {
//         res.status(500).json({msg:error.message})
//     }
// } )
module.exports = router