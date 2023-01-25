import DOM from "./DOM";
import { lists } from "./List";
import { listIndex } from "./Conditionals";

function displayLists() {
    lists.forEach(eachList => {
        const listDiv = document.createElement('div');
        const listName = document.createElement('span');

        /**Add Class */
        listDiv.classList.add('list');
        listName.classList.add('list-name');

        /**Insert Text*/
        listName.innerText = eachList.getListName;

        /**Display On Screen*/
        DOM().listContainer.append(listDiv);
        listDiv.append(listName);
    });  
}

function displayTasks(index) {
    const task = lists[index].tasks;
    const container = DOM().taskContainer;

    task.forEach(taskProperties => {
        //Creating HTML Elements
        const taskDiv = document.createElement('div');
        const detailsDiv = document.createElement('div');
        const actionsDiv = document.createElement('div');
        const expandDescriptionDiv = document.createElement('div');
        const descriptionDiv = document.createElement('div');
    
        //Creating Details elements
        const title = document.createElement('div');
        const date = document.createElement('div');
        const priority = document.createElement('div');
        const titleText = document.createElement('span');
        const dateText = document.createElement('span');
        const priorityText = document.createElement('span');
        
        //Creating Actions Elements
        const editDiv = document.createElement('div');
        const deleteDiv = document.createElement('div');
        const editBtn = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //Creating Expand Description Elements
        const expandBtn = document.createElement('a');

        //Creating Description Elements
        const descriptionText = document.createElement('p');

        //Adding Classes
        taskDiv.classList.add('task');
        detailsDiv.classList.add( 'details', 'task-informations', 'clearfix');
        actionsDiv.classList.add('actions', 'task-informations', 'clearfix');
        expandDescriptionDiv.classList.add('expand-description-btn', 'task-informations');
        descriptionDiv.classList.add('description', 'task-informations', 'hidden');
        title.classList.add('info-task', 'task-title');
        date.classList.add('info-div', 'task-date');
        priority.classList.add('info-div', 'task-priority');
        titleText.classList.add('title');
        dateText.classList.add('date');
        priorityText.classList.add('priority')
        editDiv.classList.add('info-div', 'edit-task');
        deleteDiv.classList.add('info-div', 'delete-task');
        editBtn.classList.add('edit-btn');
        deleteBtn.classList.add('delete-btn');
        expandBtn.classList.add('expand-btn');
        descriptionText.classList.add('description-text');

        //Adding Texts
        titleText.innerText = taskProperties.taskName;
        dateText.innerText = taskProperties.dueDate;
        priorityText.innerText = taskProperties.priority;
        editBtn.innerText = 'EDIT TASK';
        deleteBtn.innerText = 'DELETE TASK';
        expandBtn.innerText = 'SEE DESCRIPTION';
        descriptionText.innerText = taskProperties.description;

        //Inserting DOM to HTML
        container.append(taskDiv);
        taskDiv.append(detailsDiv);
        taskDiv.append(actionsDiv);
        taskDiv.append(expandDescriptionDiv);
        taskDiv.append(descriptionDiv);
        detailsDiv.append(title);
        detailsDiv.append(date);
        detailsDiv.append(priority);
        title.append(titleText);
        date.append(dateText);
        priority.append(priorityText);
        actionsDiv.append(editDiv);
        actionsDiv.append(deleteDiv);
        editDiv.append(editBtn);
        deleteDiv.append(deleteBtn);
        expandDescriptionDiv.append(expandBtn);
        descriptionDiv.append();
    });
}

function clearLists() {
    DOM().lists().forEach(eachList => {
        eachList.remove();
    });
}


function changeList() {
    const listsBtn = DOM().lists();
    listsBtn.forEach((list, index) => {
        list.addEventListener('click', () => {
            console.log(lists[index].tasks);
        });
    });
}

export { displayLists, changeList, clearLists, displayTasks };