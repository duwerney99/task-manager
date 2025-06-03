const TaskRespository = require("../../domain/repositories/taskRepository");
const db = require("../config/firebase");


class TaskRespositoryFirestore extends TaskRespository {
    constructor() {
        super();
        this.collection = db.collection("tasks");
    }

    async registerTask(taskData){
        const task = {
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
        };

        const docRef = await this.collection.add(task);
        return { id: docRef.id, ...task };
    }
}


module.exports = TaskRespositoryFirestore;