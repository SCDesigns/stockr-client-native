const initialState = {
  isFetching: false,
  data: null,
  hasError: false,
  errorMessage: null
}

export default function (state = initialState, action){
  return state
}

export default function(state = [], action) {
  switch (action.type) {

    case FETCHING_COIN_DATA:
      return (...state, {
        isFetching: true,
        data: null,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_SUCCESS:
      return (...state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_COIN_DATA_FAILURE:
      return (...state, {
        isFetching: false,
        data: null,
        hasError: true,
        errorMessage: action.payload
      });

    default:
      return state;
  }
}
