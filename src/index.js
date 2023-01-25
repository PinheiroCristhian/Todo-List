import { events } from "./Events";
import { changeList, displayLists, displayTask, displayTasks } from "./UpdateScreen";
import { listIndex } from "./Conditionals";

(function initialSetup() {
    displayLists();
    displayTasks(listIndex);
    events()
})();

