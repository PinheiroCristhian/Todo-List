import DOM from "./DOM";

const events = (function () {
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

})();

export { events };