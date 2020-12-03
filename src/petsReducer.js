const petsReducer = (state, action) => {
  function updateFavorite(favoriteValue) {
    return state.petList.map((item, index) => {
      if (item.id === action.id) {
        return { ...item, favorite: favoriteValue };
      }
      return item;
    });
  }
  switch (action.type) {
    case 'setPetList': {
      return {
        ...state,
        petList: action.data,
        isLoading: false,
        hasErrored: false,
      };
    }
    case 'favorite': {
      return { ...state, petList: updateFavorite(true) };
    }
    case 'unfavorite': {
      return { ...state, petList: updateFavorite(false) };
    }
    case 'errored': {
      return { ...state, hasErrored: true, error: action.error };
    }
    default:
      return state;
  }
};
export default petsReducer;
