import inputReducer from './inputkurs.js';
import getInputKurs from '../action/inputkurs';
describe('GET_INPUT_KURS', () => {
    test('returns the correct state', () => {
      const action = { type: "GET_INPUT_KURS", payload: "3" };
      const expectedState = { input_kurs:["1","3"] };
  
      expect(inputReducer(undefined, action)).toEqual(expectedState);
    });
});
