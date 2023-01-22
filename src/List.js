const lists = [];

const list = (listName) => {
    const getListName = listName;
    const tasks = [];
    
    return {
        getListName,
        tasks
    }
}