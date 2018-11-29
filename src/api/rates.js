import axios from 'axios';

export const fetchRates = () => {
    return (dispatch) => {
      axios.get('https://api.exchangeratesapi.io/latest?base=USD')
        .then(response => {
          const rates = response.data.rates
          dispatch({
            type: 'FETCH_RATES',
            payload: {
                rates: rates
            }
          })
        }).catch(
            (err)=>{
              console.log(err)
            }
          )
    }
  }