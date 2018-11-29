import {rates} from '../api/rates';

export function fetchRates(){
  return{
    type: "FETCH_RATES",
    payload: rates.fetchRates()
  }
}
