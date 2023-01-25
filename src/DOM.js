const DOM = () => {
    const openListForm = document.querySelector('#open-form-btn');
    const cancelList = document.querySelector('#cancel-list-btn');
    const openTaskForm = document.querySelector('#open-create-task-btn');
    const cancelTask = document.querySelector('#cancel-task-btn');
    const backgroundList = document.querySelector('.background-form-list');
    const backgroundTask = document.querySelector('.background-form-task');
    const confirmListBtn = document.querySelector('#confirm-list-btn');
    const confirmTaskBtn = document.querySelector('#confirm-task-btn');
    const listName = () => document.querySelector('#list-name-value').value;
    const listContainer = document.querySelector('.lists');
    const lists = () => document.querySelectorAll('.list');
    const taskTitle = () => document.querySelector('.title-value').value;
    const taskDate = () => document.querySelector('.date-value').value;
    const taskPriority = () => document.querySelector('.priority-value').value;
    const taskDescription = () => document.querySelector('#task-description').value;
    const taskContainer = document.querySelector('.tasks');

    return {
        openListForm,
        cancelList,
        openTaskForm,
        cancelTask,
        backgroundList,
        backgroundTask,
        confirmListBtn,
        confirmTaskBtn,
        listName,
        listContainer,
        lists,
        taskTitle,
        taskDate,
        taskPriority,
        taskDescription,
        taskContainer,
    }
}

export default DOM;