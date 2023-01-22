import DOM from "./DOM";
import { lists } from "./List";

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

function clearLists() {
    DOM().lists().forEach(eachList => {
        eachList.remove();
    });
}


export { displayLists };