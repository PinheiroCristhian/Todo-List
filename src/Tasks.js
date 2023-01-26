import { lists } from "./List";
import { listIndex } from "./Conditionals";
import { displayTasks } from "./UpdateScreen";

const Task = (task, date, priority, description) => {
    const getTaskName = () => {
        return task;
    };

    const getTaskDate = () => {
        return date;
    };

    const getTaskPriority = () => {
        return priority;
    };

    const getTaskDescription = () => {
        return description;
    }

    return {
        getTaskName,
        getTaskDate,
        getTaskPriority,
        getTaskDescription,
    }
}

function createTask(name, date, taskPriority, taskDescription) {
    const newTask = Task(name, date, taskPriority, taskDescription);
    lists[listIndex].tasks.push(newTask);
    //console.log(lists[listIndex].tasks)
    displayTasks(listIndex);
}

export { Task, createTask }