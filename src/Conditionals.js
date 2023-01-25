import DOM from "./DOM";


let listIndex = 0;

const checkListName = () => {
    const listName = DOM().listName() ? true : false;
    return listName;
}

const checkTaskInputs = () => {
    const taskName = DOM().taskTitle() ? true : false;
    const taskDate = DOM().taskDate() ? true : false;  
    const taskPriority = DOM().taskPriority() ? true : false;
    const taskDescription = DOM().taskDescription() ? true : false;

    if (taskName && taskDate && taskPriority && taskDescription) {
        return true;
    } else {
        return false;
    }
}


export {
    checkListName,
    checkTaskInputs,
    listIndex
};