import DOM from "./DOM";

const checkListName = () => {
    const listName = DOM().listName() ? true : false;
    return listName;
}

export { checkListName };