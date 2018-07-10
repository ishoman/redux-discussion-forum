export default (state = {}, action) => {
  const { title, image, content, id, timePosted } = action;
  switch(action.type){
  case 'ADD_POST':
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        image: image,
        content: content,
        id: id,
        timePosted: timePosted
      }
    });
    return newState;
  case 'UPDATE_TIME':
    let newState = state
  default:
    return state;
  }
};
