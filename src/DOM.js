const DOM = () => {
    const openListForm = document.querySelector('#open-form-btn');
    const cancelList = document.querySelector('#cancel-list-btn');
    const openTaskForm = document.querySelector('#open-create-task-btn');
    const cancelTask = document.querySelector('#cancel-task-btn');
    const backgroundList = document.querySelector('.background-form-list');
    const backgroundTask = document.querySelector('.background-form-task');

    return {
        openListForm,
        cancelList,
        openTaskForm,
        cancelTask,
        backgroundList,
        backgroundTask,
    }
}

export default DOM;