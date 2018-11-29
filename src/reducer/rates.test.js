import ratesReducer from './rates.js';
import fetchRates from '../action/rates.js';
describe('FETCH_RATES', () => {
    test('returns the correct state', () => {
      const action = { type: "FETCH_RATES", payload:"IDR"};
      const expectedState = { rates:["IDR"] };
      expect(ratesReducer(undefined, action)).toEqual(expectedState);
    });
});
