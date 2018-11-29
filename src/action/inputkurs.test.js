import configureStore from 'redux-mock-store';
import getInputKurs from './inputkurs.js';

const mockStore = configureStore();
const store = mockStore();
describe('select_actions', () => {
    beforeEach(() => { 
      store.clearActions();
    });
});

describe('getInputKurs', () => {
    test('Dispatches the correct action and payload', () => {
      const expectedActions = [
        {
          payload: "3",
          type: 'GET_INPUT_KURS',
        },
      ];
  
      store.dispatch(selectActions.getInputKurs("3"));
      expect(store.getActions()).toEqual(expectedActions);
    });
});