import {
    ON_CHANGE,
    RECEIVED_DATA_HEROES,
    GET_HERO_BY_ID,
    REMOVE_HERO
} from './types';

export const onChange = inputValue => ({
    type: ON_CHANGE,
    inputValue
});

export const receivedDataHeroes = dataHeroes => ({
    type: RECEIVED_DATA_HEROES,
    dataHeroes
});

export const getHeroById = heroId => ({
    type: GET_HERO_BY_ID,
    heroId
});

export const removeHero = () => ({
    type: REMOVE_HERO,
});