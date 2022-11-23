const fs = require("fs");
const path = require("path");

const tasksFilePath = path.join(__dirname, "../data/tasks.json");

function readDB() {
    return JSON.parse(fs.readFileSync(tasksFilePath, "utf-8"));
};

const controller = {
    index: (req, res) => {
        const tasks = readDB();
        res.render("problem7", {tasks});     
    },

    addtask: (req, res) => {
        const tasks = readDB();
        const newTask = {
            id: tasks.length > 0 ? tasks[ tasks.length - 1 ].id + 1 : 1,
            ...req.body
        }        

        tasks.push(newTask);
        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks,  null, 2))

        return res.redirect("/problem7")     
    },

    delete: (req, res) => {
		const id = req.params.id;
		let tasks = readDB();
		const taskDelete = tasks.findIndex(task => task.id == id);
    
        tasks.splice(taskDelete,1);

        fs.writeFileSync(tasksFilePath, JSON.stringify(tasks, null, 2))
		return res.redirect("/problem7");
    } 
}

module.exports = controller;