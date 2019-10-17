import {
    ON_CHANGE,
    RECEIVED_DATA_HEROES
} from './types';

const initialState = {
  heroes: [],
  inputValue: '',
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                loading: action.inputValue === '' ? false : true,
                inputValue: action.inputValue,
                heroes: action.inputValue === '' ? [] : [...state.heroes],
            }
        case RECEIVED_DATA_HEROES:
            return {
                ...state,
                loading: false,
                heroes: [...action.dataHeroes]
            }
        default:
        return state;
    }
};

export default reducer;