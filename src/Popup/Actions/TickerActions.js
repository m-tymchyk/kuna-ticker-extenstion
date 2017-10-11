import * as Actions from './ActionTypes';

/**
 * @param ticker
 * @returns {{action, ticker: *}}
 */
export const updateTicker = (ticker) => {
    return {
        type: Actions.UPDATE_TICKER,
        ticker: ticker
    };
};

/**
 * @param tickerKey
 * @returns {{action, tickerKey: *}}
 */
export const setCurrentTickerKey = (tickerKey) => {
    return {
        type: Actions.SET_CURRENT_TICKER,
        tickerKey: tickerKey
    };
};


/**
 * @param tickers
 * @returns {{action, tickers: Array}}
 */
export const fetchTickers = (tickers = []) => {
    return {
        type: Actions.FETCH_TICKERS,
        tickers: tickers
    };
};