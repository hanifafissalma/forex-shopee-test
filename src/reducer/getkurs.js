const initialState = {
    kurs: []
  }
  
const kursReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GET_KURS':
            return {
                ...state,
                kurs: [...state.kurs, action.payload],
            }
        case 'DELETE_KURS':
            return {
                ...state,
                kurs: state.kurs.filter(item => item !== action.payload),
            }
        default:
            return state
    }
}

export default kursReducer
