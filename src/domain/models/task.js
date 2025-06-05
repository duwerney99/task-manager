class Task {
  constructor({ id, title, description, status = 'pendiente' }) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
  }
}
module.exports = Task;
