const DOM = () => {
    const openListForm = document.querySelector('#open-form-btn');
    const cancelList = document.querySelector('#cancel-list-btn');
    const openTaskForm = document.querySelector('#open-create-task-btn');
    const cancelTask = document.querySelector('#cancel-task-btn');
    const backgroundList = document.querySelector('.background-form-list');
    const backgroundTask = document.querySelector('.background-form-task');
    const confirmListBtn = document.querySelector('#confirm-list-btn');
    const listName = () => document.querySelector('#list-name-value').value;
    const listContainer = document.querySelector('.lists');
    const lists = () => document.querySelectorAll('.list');

    return {
        openListForm,
        cancelList,
        openTaskForm,
        cancelTask,
        backgroundList,
        backgroundTask,
        confirmListBtn,
        listName,
        listContainer,
        lists,
    }
}

export default DOM;