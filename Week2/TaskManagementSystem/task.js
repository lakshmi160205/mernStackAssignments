// task.js
import {
  validateTitle,
  validatePriority,
  validateDueDate
} from './validator.js';

const tasks = [];
let idCounter = 1;

// 1. Add new task
export function addTask(title, priority, dueDate) {
  const titleCheck = validateTitle(title);
//   if (!titleCheck) return titleCheck;

  const priorityCheck = validatePriority(priority);
//   if (!priorityCheck) return priorityCheck;

  const dateCheck = validateDueDate(dueDate);
//   if (!dateCheck) return dateCheck;

  const task = {
    id: idCounter++,
    title,
    priority,
    dueDate,
    completed: false
  };

  tasks.push(task);
  return 'Task added successfully';
}

// 2. Get all tasks
export function getAllTasks() {
  return tasks;
}

// 3. Mark task as complete
export function completeTask(taskId) {
  const task = tasks.find(t => t.id === taskId);
  if (!task) return 'Task not found';

  task.completed = true;
  return 'Task marked as completed';
}
