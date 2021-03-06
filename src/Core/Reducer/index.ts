import { combineReducers } from 'redux';

import { IStore } from 'Core/Interfaces';

import Global from './Global';
import Ticker from './Ticker';

export default combineReducers<IStore>({
    global: Global,
    ticker: Ticker,
});
