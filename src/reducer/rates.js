const initialState = {
    rates:[],
  }
  
  const ratesReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_RATES':
        return {
          ...state,
          rates: action.payload.rates
        }
      default:
        return state
    }
  }
  
  export default ratesReducer
