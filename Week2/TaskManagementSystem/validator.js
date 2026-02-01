// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title){
    if (title.length===0){
        return "empty title";
    }
    if(title.length<3){
        return "title should have min 3 characters";
    }
    else{
        return "valid title";
    }
}


// 2. Validate priority (low, medium, high)
function validatePriority(priority){
    if(priority==="low" || priority==="medium" || priority==="high"){
        return "valid priority";
    }
    else{
        return "invalid priority";
    }
}

//  3. Validate due date (future date)
function validateDueDate(date){
      const due = new Date(date);
  const today = new Date();

  if (due <= today) {
    return "not a valid due date";
  }
  else{
    return "valid due date";
  }
}
export {validateTitle,validatePriority,validateDueDate};