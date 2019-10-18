import {
    ON_CHANGE,
    RECEIVED_DATA_HEROES,
    GET_HERO_BY_ID,
    REMOVE_HERO
} from './types';

const initialState = {
  heroes: [],
  hero: {},
  inputValue: '',
  loadingSearch: false,
  loadedHero: false,
  searchIsActive: false,
};

const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case ON_CHANGE:
            return {
                ...state,
                loadingSearch: action.inputValue === '' ? false : true,
                inputValue: action.inputValue,
                heroes: action.inputValue === '' ? [] : [...state.heroes],
                searchIsActive: action.inputValue === '' ? false : true,
            }
        case RECEIVED_DATA_HEROES:
            return {
                ...state,
                loadingSearch: false,
                heroes: state.searchIsActive === false ? [] : [...action.dataHeroes],
            }
        case GET_HERO_BY_ID:
            return {
                ...state,
                loadedHero: true,
                hero: {...action.dataHero},
            }
        case REMOVE_HERO:
            return {
                ...state,
                loadedHero: false,
                hero: {},
            }
        default:
        return state;
    }
};

export default reducer;