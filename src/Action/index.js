export const addItemList = (arr) => ({ type: 'ADD_LIST_ITEMS', payload: arr });
export const addListItems = () => async (dispatch) => {
  await fetch('https://jsonplaceholder.cypress.io/todos')
    .then((response) => response.json())
    .then((data) => {
      dispatch(addItemList(data));
    });
};

export const addPage = (page) => ({ type: 'ADD_PAGE', payload: page });
export const searchTitle = (value) => ({ type: 'SEARCH', payload: value });
export const filterTitle = (toggle) => ({ type: 'FILTER', payload: toggle });
