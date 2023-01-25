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

export { Task }