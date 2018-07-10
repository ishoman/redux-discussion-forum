import ticketListReducer from './../../src/reducers/post-list-reducer';

describe('postListReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });
});
