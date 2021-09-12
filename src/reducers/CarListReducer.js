const DefaultState = {
  loading: false,
  data: [],
  errorMsg: '',
};

const CarListReducer = (state = DefaultState, action) => {
  switch (action.type) {
    case 'CAR_LIST_LOADING':
      return {
        ...state,
        loading: true,
        errorMsg: '',
      };

    case 'CAR_LIST_FAIL':
      return {
        ...state,
        loading: false,
        errorMsg: 'unable to get list',
      };

    case 'CAR_LIST_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        errorMsg: '',
      };

    default:
      return state;
  }
};

export default CarListReducer;
