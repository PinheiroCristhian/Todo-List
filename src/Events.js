import DOM from "./DOM";
import { checkListName, checkTaskInputs, whichList, checkListIndex } from "./Conditionals"
import { list, lists, createList } from "./List";
import { changeList, clearLists, displayLists } from "./UpdateScreen";
import { Task } from "./Tasks";

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
                console.log({
                    taskName,
                    dueDate,
                    priority,
                    description
                });

                const newTask = Task(taskName, dueDate, priority, description);
                DOM().backgroundTask.classList.add('hidden');
                alert('Task Created Successfully');
                console.table(newTask);
                
            } else {
                return 'nothing';
            }
        });
    })();

    /**Change List*/
    
  

})();

export { events };