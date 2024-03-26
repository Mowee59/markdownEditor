// Action types
export const SET_INITIAL_STATE = 'SET_INITIAL_STATE';
export const EDIT_CURRENT_FILECONTENT = 'EDIT_CURRENT_FILECONTENT';
export const EDIT_CURRENT_FILENAME = 'EDIT_CURRENT_FILE';
export const TEMP_CURRFILE = 'welcome.md';


function markdownReducer(state, action){


  // Making a depp clone of the current state
  let newState = structuredClone(state);
  



  switch(action.type){

    // Getting the file, changing the content, putting it back into the Map
    case EDIT_CURRENT_FILECONTENT:
      const file = newState.get(TEMP_CURRFILE);
      file.content = action.payload;
      newState.set(TEMP_CURRFILE, file);
      return newState;

    case 'edit_current_fileName':
      // newState.currentFile.fileName = action.content;
      // console.log(newState.currentFile.fileName)
      return newState;

    case SET_INITIAL_STATE:
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
