const lists = [
    {
        getListName: 'Default',
        tasks: [],
    }
];

const list = (name) => {
    const getListName = name;
    const tasks = [];

    return {
        getListName,
        tasks
    }
}

function createList(listName) {
    const newList = list(listName);
    lists.push(newList);
}

export { lists, list, createList };