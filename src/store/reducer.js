import {
    ON_CHANGE,
    RECEIVED_DATA_HEROES,
    GET_HERO_BY_ID,
    REMOVE_HERO,
    ERROR_404
} from './types';

const initialState = {
  heroes: [],
  hero: {},
  inputValue: '',
  loadingSearch: false,
  loadedHero: false,
  searchIsActive: false,
  error404: false
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
                error404: false,
            }
        case RECEIVED_DATA_HEROES:
            return {
                ...state,
                loadingSearch: false,
                heroes: state.searchIsActive === false ? [] : [...action.dataHeroes],
                error404: false,
            }
        case GET_HERO_BY_ID:
            return {
                ...state,
                loadedHero: true,
                hero: {...action.dataHero},
                error404: false,
            }
        case REMOVE_HERO:
            return {
                ...state,
                loadedHero: false,
                hero: {},
            }
        case ERROR_404:
            return {
                ...state,
                error404: true,
            }
        default:
            return state;
    }
};

export default reducer;