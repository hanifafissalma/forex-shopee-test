const initialState = {
    input_kurs:["1"]
  }
  
const inputReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_INPUT_KURS':
            return {
            ...state,
            input_kurs: [...state.input_kurs, action.payload],
            
            }

        default:
            return state
    }
}

export default inputReducer
