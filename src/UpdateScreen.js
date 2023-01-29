import DOM from "./DOM";
import { deleteList, lists } from "./List";
import { listIndex, taskIndex } from "./Conditionals";
import { deleteTask } from "./Tasks";

function displayLists() {
    clearLists();
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
    clearTasks(); //Removes the currently task to avoid duplicating another task that has been removed
    const task = lists[index].tasks; //This const is storing the tasks according to the list Index, the index is gonna be the currently list index
    const container = DOM().taskContainer;

    task.forEach(taskProperties => { //Loop the the task object and getting the property values
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
        titleText.innerText = taskProperties.task;
        dateText.innerText = `Date: ${taskProperties.date}`;
        priorityText.innerText = `Priority: ${taskProperties.priority}`;
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
        descriptionDiv.append(descriptionText);
    });
    openEditForm();
    showDescription();
    deleteTask();
}

function clearTasks() {
    const task = document.querySelectorAll('.task');
    task.forEach(eachTask => {
        eachTask.remove();
    });
}

function clearTaskInputs() {
    document.querySelector('.date-value').value = '';
    document.querySelector('.title-value').value = '';
    document.querySelector('.priority-value').value = 'High';
    document.querySelector('#task-description').value = '';

}

function clearLists() {
    DOM().lists().forEach(eachList => {
        eachList.remove();
    });
}

function changeList() {
    const listsBtn = DOM().lists();
    listsBtn.forEach((list, newListIndex) => {
        list.addEventListener('click', () => {
            listIndex = newListIndex;
            displayTasks(listIndex);
        });
    });
}

function openEditForm() {
    const editBtn = DOM().editBtn();
    const confirmEdit = DOM().confirmEditBtn;
    const confirmTaskBtn = DOM().confirmTaskBtn;
    const editForm = DOM().backgroundTask;

    editBtn.forEach((task, newTaskIndex) => {
        task.addEventListener('click', () => {
            editForm.classList.remove('hidden');
            confirmEdit.classList.remove('hidden');
            confirmTaskBtn.classList.add('hidden');
            taskIndex = newTaskIndex;

        });
    });
}

function closeEditForm() {
    const confirmEdit = DOM().confirmEditBtn;
    const confirmTaskBtn = DOM().confirmTaskBtn;
    const editForm = DOM().backgroundTask;

    editForm.classList.add('hidden');
    confirmEdit.classList.add('hidden');
    confirmTaskBtn.classList.remove('hidden');
}

function showDescription() {
    const expandBtn = document.querySelectorAll('.expand-btn');
    const description = document.querySelectorAll('.description');
    expandBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
        description[index].classList.toggle('hidden');
        });
    })
}


export { displayLists,changeList, clearLists, displayTasks, openEditForm, clearTaskInputs, closeEditForm };