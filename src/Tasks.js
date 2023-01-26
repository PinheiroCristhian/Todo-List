import { lists } from "./List";
import { listIndex, taskIndex } from "./Conditionals";
import { displayTasks } from "./UpdateScreen";


const Task = (task, date, priority, description) => {
    let taskName = task;
    let taskDate = date;
    let taskPriority = priority;
    let taskDescription = description;

    /*const getTaskName = () => {
        return taskName;
    };
    const getTaskDate = () => {
        return taskDate;
    };
    const getTaskPriority = () => {
        return taskPriority;
    };
    const getTaskDescription = () => {
        return taskDescription;
    }

    const setTaskName = task => {
        taskName = task;
    }
    const setTaskDate = newTaskDate => {
        date = newTaskDate;
    }
    const setTaskPriority = newTaskPriority => {
        priority = newTaskPriority;
    }
    const setTaskDescription = newTaskDescription => {
        description = newTaskDescription;
    }*/

    return {
        get task() {
            return taskName;
        },
        set task(task) {
            taskName = task;
        },

        get date() {
            return taskDate;
        },
        set date(date) {
            taskDate = date;
        },

        get priority() {
            return taskPriority;
        },
        set priority(priority) {
            taskPriority = priority;
        },

        get description() {
            return taskDescription;
        },
        set description(description) {
            taskDescription = description;
        }

    }
}

function createTask(name, date, taskPriority, taskDescription) {
    const newTask = Task(name, date, taskPriority, taskDescription);
    lists[listIndex].tasks.push(newTask);
    //console.log(lists[listIndex].tasks)
    displayTasks(listIndex);
}

function editTask(newName, newDate, newPriority, newDescription, taskIndex) {
    console.log('================================================================');
    console.log('BEFORE');
    console.log(`${lists[listIndex].tasks[taskIndex].task}`);
    console.log(`${lists[listIndex].tasks[taskIndex].date}`);
    console.log(`${lists[listIndex].tasks[taskIndex].priority}`);
    console.log(`${lists[listIndex].tasks[taskIndex].description}`);
    console.log('================================================================');
    console.log('================================================================');
    console.log('AFTER');
    lists[listIndex].tasks[taskIndex].task = newName;
    lists[listIndex].tasks[taskIndex].date = newDate;
    lists[listIndex].tasks[taskIndex].priority = newPriority;
    lists[listIndex].tasks[taskIndex].description = newDescription;

    console.log(`${lists[listIndex].tasks[taskIndex].task}`);
    console.log(`${lists[listIndex].tasks[taskIndex].date}`);
    console.log(`${lists[listIndex].tasks[taskIndex].priority}`);
    console.log(`${lists[listIndex].tasks[taskIndex].description}`);



}
export { Task, createTask, editTask }