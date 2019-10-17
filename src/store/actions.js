import {
    ON_CHANGE,
    RECEIVED_DATA_HEROES
} from './types';

export const onChange = inputValue => ({
    type: ON_CHANGE,
    inputValue
});

export const receivedDataHeroes = dataHeroes => ({
    type: RECEIVED_DATA_HEROES,
    dataHeroes
})