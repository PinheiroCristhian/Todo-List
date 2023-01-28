import { lists } from "./List";
import { listIndex, taskIndex } from "./Conditionals";
import { closeEditForm, displayTasks } from "./UpdateScreen";


const Task = (task, date, priority, description) => {
    let taskName = task;
    let taskDate = date;
    let taskPriority = priority;
    let taskDescription = description;

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
    displayTasks(listIndex);
}

function editTask(newName, newDate, newPriority, newDescription, taskIndex) {
    lists[listIndex].tasks[taskIndex].task = newName;
    lists[listIndex].tasks[taskIndex].date = newDate;
    lists[listIndex].tasks[taskIndex].priority = newPriority;
    lists[listIndex].tasks[taskIndex].description = newDescription;
    displayTasks(listIndex);
    closeEditForm();
}

function deleteTask() {
    const deleteBtn = () => document.querySelectorAll('.delete-btn');

    deleteBtn().forEach((btn, index) => {
        btn.addEventListener('click', () => {
            let confirmDeletion = confirm('Do really want to delete this task?');
            if (confirmDeletion) {
                lists[listIndex].tasks.splice(index, 1)
                console.log(lists[listIndex].tasks[index]);
                displayTasks(listIndex);
            } else {
                return;
            }
        });
    });
}

export { Task, createTask, editTask, deleteTask }