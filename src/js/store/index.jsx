import { createStore, combineReducers } from 'redux';
import Data from '../data';

const results = [{
  80: 10,
  60: 15,
  40: 0,
  20: 10,
  0: 15
}, {
  80: 1,
  60: 10,
  40: 19,
  20: 8,
  0: 12
}, {
  80: 4,
  60: 15,
  40: 11,
  20: 8,
  0: 12
}, {
  80: 8,
  60: 11,
  40: 13,
  20: 17,
  0: 1
}, {
  80: 0,
  60: 10,
  40: 17,
  20: 21,
  0: 2
}, {
  80: 4,
  60: 0,
  40: 13,
  20: 9,
  0: 24
}, {
  80: 38,
  60: 6,
  40: 3,
  20: 2,
  0: 1
}, {
  80: 10,
  60: 10,
  40: 10,
  20: 10,
  0: 10
}];

const initialTestState = {
  status: '',
  params: {},
  question: Data.questions[0],
  questionsCount: Data.questions.length,
  activeIndex: 0,
  answers: [],
  results: results,
};

const restartTestState = {
  status: 'START',
  activeIndex: 0,
  question: Data.questions[0],
  answers: [],
};

const testReducer = function(state = initialTestState, action) {
  switch (action.type) {
    case 'TEST_PARAMS':
      return { ...state, params: action.params };
    case 'TEST_STATUS':
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