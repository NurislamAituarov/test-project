const initialState = {
  listItems: [],
  pageActive: 1,
  filterItems: [],
  value: '',
};

export default function Reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_LIST_ITEMS':
      return {
        ...state,
        listItems: action.payload,
        filterItems: action.payload,
      };
    case 'ADD_PAGE':
      return {
        ...state,
        pageActive: action.payload,
      };

    case 'SEARCH':
      const newArr = state.listItems.filter((el) => {
        return el.title.includes(action.payload);
      });
      return {
        ...state,
        value: action.payload,
        filterItems: action.payload ? newArr : state.listItems,
      };
    case 'FILTER':
      return {
        ...state,
        filterItems: state.filterItems.sort(
          (a, b) => a.title.split('').length - b.title.split('').length,
        ),
      };
    default:
      return state;
  }
}
