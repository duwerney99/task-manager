const TaskRespository = require("../../domain/repositories/taskRepository");
const db = require("../config/firebase");


class TaskRespositoryFirestore extends TaskRespository {
    constructor() {
        super();
        this.collection = db.collection("tasks");
    }

    async registerTask(taskData) {
        const task = {
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
        };

        const docRef = await this.collection.add(task);
        return { id: docRef.id, ...task };
    }

    async findAll() {
        const snapshot = await this.collection.get();
        const tasks = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return tasks;
    }

    async updateStatus(id, status) {
        const docRef = this.collection.doc(id);
        await docRef.update({ status });
        const updated = await docRef.get();
        return { id: updated.id, ...updated.data() };
    }

    async deleteTask(id) {
        const docRef = this.collection.doc(id);
        await docRef.delete();
        return { id };
    }

    async findById(id) {
        const doc = await this.collection.doc(id).get();
        if (!doc.exists) return null;
        return { id: doc.id, ...doc.data() };
    }

}


module.exports = TaskRespositoryFirestore;