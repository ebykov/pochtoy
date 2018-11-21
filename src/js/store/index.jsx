import { createStore, combineReducers } from 'redux';
import Data from '../data';
import request from '../lib/request';

const initialTestState = {
  status: '',
  params: {},
  question: Data.questions[0],
  questionsCount: Data.questions.length,
  activeIndex: 0,
  answers: [],
  results: [],
};

const restartTestState = {
  status: 'START',
  activeIndex: 0,
  question: Data.questions[0],
  answers: [],
};

const testReducer = function(state = initialTestState, action) {
  switch (action.type) {
    case 'TEST_SET_RESULTS':
      return { ...state, results: action.results };
    case 'TEST_PARAMS':
      return { ...state, params: action.params };
    case 'TEST_STATUS':
      if (action.status === 'RESULT') {
        request('/special/pochtoy/addResult', 'POST', {result: JSON.stringify(state.answers)});
      }
      return { ...state, status: action.status };
    case 'TEST_ANSWER':
      return { ...state, answers: [...state.answers, action.answer] };
    case 'TEST_NEXT':
      let index = state.activeIndex + 1;
      return { ...state,
        ...{
          question: Data.questions[index],
          activeIndex: index,
        }
      };
    case 'TEST_RESTART':
      return { ...state, ...restartTestState };
  }
  return state;
};

const reducers = combineReducers({
  testState: testReducer,
});

export default createStore(reducers);