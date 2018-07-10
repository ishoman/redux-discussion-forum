export default (state = {}, action) => {
  switch(action.type){
  case 'ADD_POST':
    const { title, image, content, id } = action;
    let newState = Object.assign({}, state, {
      [id]: {
        title: title,
        image: image,
        content: content,
        id: id
      }
    });
    return newState;
  default:
    return state;
  }
};
