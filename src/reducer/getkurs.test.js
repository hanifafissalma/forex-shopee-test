import kursReducer from './getkurs.js';
import getKurs from '../action/getkurs';
describe('GET_KURS', () => {
    test('returns the correct state', () => {
      const action = { type: "GET_KURS", payload: "IDR" };
      const expectedState = { kurs:["IDR"] };
  
      expect(kursReducer(undefined, action)).toEqual(expectedState);
    });
});
describe('DELETE_KURS', () => {
  test('returns the correct state', () => {
    const action = { type: "DELETE_KURS", payload: "IDR" };
    const expectedState = { kurs:[] };

    expect(kursReducer(undefined, action)).toEqual(expectedState);
  });
});