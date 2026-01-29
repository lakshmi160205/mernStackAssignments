// app.js
import {
  addTask,
  getAllTasks,
  completeTask
} from './task.js';

// Add tasks
console.log(addTask('Learn JS', 'high', '2026-02-10'));
console.log(addTask('Buy groceries', 'medium', '2026-02-05'));
console.log(addTask('Go', 'low', '2025-01-01')); // invalid

// View tasks
console.log('\nAll Tasks:');
console.log(getAllTasks());

// Complete a task
console.log('\nCompleting Task 1');
console.log(completeTask(1));

// View again
console.log('\nUpdated Tasks:');
console.log(getAllTasks());
