import postListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {
  let action;
  const samplePostData = {
    title: 'Sample Post Title',
    image: null,
    content: 'Sample Post Content for test',
    id: 0,
    timePosted: 1500000000000
  }
  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test('Should add new ticket to masterPostList', () => {
    const { title, image, content, id, timePosted } = samplePostData;
    action = {
      type: 'ADD_POST',
      title: title,
      image: image,
      content: content,
      id: id,
      timePosted: timePosted
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        image: image,
        content: content,
        id: id,
        timePosted: timePosted
      }
    });
  });
});
