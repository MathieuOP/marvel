import axios from 'axios';
import {
  ON_CHANGE,
  GET_HERO_BY_ID
} from './types';
import { receivedDataHeroes } from './actions';

const CancelToken = axios.CancelToken;
let cancel;

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case ON_CHANGE:
      next(action);
      if (action.inputValue === '') return;

      cancel && cancel();
      return axios.get('https://gateway.marvel.com/v1/public/characters',
        {
          cancelToken: new CancelToken(function executor(c) {
            cancel = c;
          }),
          params: {
            apikey: '001ac6c73378bbfff488a36141458af2',
            ts: 'thesoer',
            hash: '72e5ed53d1398abb831c3ceec263f18b',
            nameStartsWith: action.inputValue,
            limit: 20
          },
        }
      )
      .then(({data}) => {
        const arrDataHeroes = data.data.results;
        store.dispatch(receivedDataHeroes(arrDataHeroes));
      })
      .catch(err => {
        if (axios.isCancel(err)) {
          // console.log('Request canceled');
        } else {
          console.log('err');
        }
      });
    case GET_HERO_BY_ID:
      return axios.get(`https://gateway.marvel.com/v1/public/characters/${action.heroId}`,
        {
          params: {
            apikey: '001ac6c73378bbfff488a36141458af2',
            ts: 'thesoer',
            hash: '72e5ed53d1398abb831c3ceec263f18b',
          },
        }
      )
      .then(({data}) => {
        const dataHero = data.data.results.find(data => data.id === Number(action.heroId));
        next({
          ...action,
          dataHero,
        })
      })
      .catch(err => {
          console.log('err');
      });
    default:
      return next(action);
  }
};

export default ajaxMiddleware;