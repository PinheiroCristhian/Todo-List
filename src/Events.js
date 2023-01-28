import DOM from "./DOM";
import { checkListName, checkTaskInputs, listIndex, taskIndex} from "./Conditionals"
import { list, lists, createList } from "./List";
import { changeList, clearLists, clearTaskInputs, displayLists, displayTasks } from "./UpdateScreen";
import { createTask, deleteTask, editTask, Task } from "./Tasks";

const events = (function () {
    /**Opening Functions */
    (function openListForm() {
        DOM().openListForm.addEventListener('click', () => {
            DOM().backgroundList.classList.remove('hidden')
        });
    })();
    
    (function openTaskForm() {
        DOM().openTaskForm.addEventListener('click', () => {
            DOM().backgroundTask.classList.remove('hidden');
        });
    })();
    /**Closing functions */
    (function closeListForm() {
        DOM().cancelList.addEventListener('click', () => {
            DOM().backgroundList.classList.add('hidden');
        });
    })();

    (function closeTaskForm() {
        DOM().cancelTask.addEventListener('click', () => {
            //If i have opened the Edit form before, when i cancel it, it's gonna hide de edit button and return the confirm task button
            DOM().confirmTaskBtn.classList.remove('hidden');
            DOM().confirmEditBtn.classList.add('hidden');
            DOM().backgroundTask.classList.add('hidden');
        });
    })();

   

    /**Creation Functions*/
    (function createListFunc() {
        DOM().confirmListBtn.addEventListener('click', () => {
            const isInputValid = checkListName();
            const listName = DOM().listName();

            if (isInputValid) {
                createList(listName);
                DOM().backgroundList.classList.add('hidden');
                alert('List Created Successfully');
                clearLists();
                displayLists();
                changeList();
            } else {
                return;
            }
        });
    })();

    (function createTasksFunc() {
        DOM().confirmTaskBtn.addEventListener('click', () => {
            const isTextValid = checkTaskInputs();
            const taskName = DOM().taskTitle();
            const dueDate = DOM().taskDate();
            const priority = DOM().taskPriority();
            const description = DOM().taskDescription();
            /**If inputs are not empty, then it's gonna create a task */

            if (isTextValid) {
                createTask(taskName, dueDate, priority, description);
                DOM().backgroundTask.classList.add('hidden');
                alert('Task Created Successfully');
                clearTaskInputs();
            } else {
                return;
            }
        });
    })();

    (function editTaskFunc() {
        DOM().confirmEditBtn.addEventListener('click', () => {
            const isTextValid = checkTaskInputs();
            const taskName = DOM().taskTitle();
            const dueDate = DOM().taskDate();
            const priority = DOM().taskPriority();
            const description = DOM().taskDescription();
            /**If inputs are not empty, then it's gonna create a task */

            if (isTextValid) {
                editTask(taskName, dueDate, priority, description, taskIndex);
                alert('Task Edited Successfully');
                clearTaskInputs();
            } else {
                return;
            }
        });
    })();

    (function deleteTaskFunc() {
        //deleteTask();
    })();
  

})();

export { events };