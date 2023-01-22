import DOM from "./DOM";
import { checkListName } from "./Conditionals"
import { list, lists, createList } from "./List";
import { displayLists } from "./UpdateScreen";

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
                console.log(lists);
                DOM().backgroundList.classList.add('hidden');
                alert('List Created Successfully');
                displayLists();
            } else {
                return;
            }
        });
    })();

})();

export { events };