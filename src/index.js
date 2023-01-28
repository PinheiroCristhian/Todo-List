import { events } from "./Events";
import { changeList, displayLists, displayTask, displayTasks, editTask } from "./UpdateScreen";
import { listIndex } from "./Conditionals";

(function initialSetup() {
    displayLists();
    displayTasks(listIndex);
    changeList();

    events()
})();

