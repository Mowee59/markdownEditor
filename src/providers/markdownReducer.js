// Action types
export const Actions = {
  SET_INITIAL_STATE: 'SET_INITIAL_STATE',
  EDIT_FILECONTENT: 'EDIT_FILECONTENT',
  EDIT_FILENAME: 'EDIT_FILENAME',
};

function markdownReducer(state, action){

  // Making a depp clone of the current state
  let newState = structuredClone(state);

  switch(action.type){

    // Update the content of a specific file
    case Actions.EDIT_FILECONTENT:
      // Getting the file, changing the content, putting it back into the Map
      const fileName = action.payload.fileName;
      const fileToEdit = newState.get(fileName);
      fileToEdit.content = action.payload.content;
      newState.set(fileName, fileToEdit);
      return newState;

      // Change the name of a specific file
      case Actions.EDIT_FILENAME:
        // Getting the file, remove it from the map, add it again with new name
        const oldName = action.payload.oldName;
        const newName = action.payload.newName;
        let fileToRename = newState.get(oldName);
        newState.delete(oldName);
        newState.set(newName, fileToRename);
        return newState;


      case Actions.SET_INITIAL_STATE:
        // Converting the json Object to a map with fileName as Key
        newState = new Map(Object.entries(data));
        console.log(newState);
        return newState;


    default:
      console.log('something went wrong');
      return state;
  }

}

export default markdownReducer;
