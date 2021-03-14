export const CHANGE_SEARCH_WORD = 'CHANGE_SEARCH_WORD';

export const changeSearchWordAction = word => ({
  type: CHANGE_SEARCH_WORD,
  payload: word
});

const initialState = {
  searchWord: ''
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_WORD:
      return {
        ...state,
        searchWord: action.payload
      };
    default:
      return state;
  }
}
