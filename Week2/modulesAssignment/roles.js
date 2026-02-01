const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};

// Get all role names
let roleNames = Object.keys(roles);
console.log(roleNames);

// Check if student can delete
let canStudentDelete = roles.student.includes("delete");
console.log(canStudentDelete);

// Create a flat list of all unique permissions
let allPermissions = Object.values(roles).flat();
let uniquePermissions = [...new Set(allPermissions)];
console.log(uniquePermissions);

// Add new role moderator immutably
let newRoles = {
  ...roles,
  moderator: ["update", "view"]
};
console.log(newRoles);
