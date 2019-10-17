import axios from 'axios';
import {
  ON_CHANGE,
} from './types';
import { receivedDataHeroes } from './actions';

const CancelToken = axios.CancelToken;
let wj_cancel;

const ajaxMiddleware = store => next => action => {
  switch (action.type) {
    case ON_CHANGE:
      next(action);
      if (action.inputValue === '') return;
      wj_cancel && wj_cancel();

      return axios.get('https://gateway.marvel.com/v1/public/characters',
        {
          cancelToken: new CancelToken(function executor(c) {
            wj_cancel = c;
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
    default:
      return next(action);
  }
};

export default ajaxMiddleware;