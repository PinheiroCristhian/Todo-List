const lists = [
    {
        getListName: 'Default',
        tasks: [
            {
                taskName: 'Study',
                dueDate: '2023-01-10',
                priority: 'high',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum asperiores perspiciatis magnam corrupti, placeat distinctio illum laudantium dolorem, facere, quae eos aperiam tenetur maiores libero officia qui. Architecto, fugiat magnam.',
            },
        ],
    },
    
    {
        getListName: 'Secondary',
        tasks: [
            {
                taskName: 'O romance da universitária otária',
                dueDate: '2023-01-10',
                priority: 'high',
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