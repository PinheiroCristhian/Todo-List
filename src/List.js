const lists = [
    {
        getListName: 'Default',
        tasks: [
            {
                task: 'Study',
                date: '2023-01-10',
                priority: 'High',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores perspiciatis magnam corrupti, placeat distinctio illum laudantium dolorem, facere, quae eos aperiam tenetur maiores libero officia qui. Architecto, fugiat magnam.',
            },
        ],
    },

    {
        getListName: 'Secondary',
        tasks: [
            {
                task: 'O romance',
                date: '2024-05-21',
                priority: 'Low',
                description: 'Ser ou não ser? o que será que serei? o que será o que eu vou ser?',
            }
        ]
    }
];

const list = (name) => {
    const getListName = name;
    const tasks = [];

    return {
        getListName,
        tasks
    }
};

function createList(listName) {
    const newList = list(listName);
    lists.push(newList);
}



export { lists, list, createList };