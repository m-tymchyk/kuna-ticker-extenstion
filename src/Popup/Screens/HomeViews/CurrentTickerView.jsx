import React from 'react';
import Numeral from 'numeral';

export default class CurrentTickerView extends React.Component {

    render() {
        const {ticker = null} = this.props;

        if (!ticker) {
            return <div className="loading">Wait...</div>;
        }

        return (
            <div className="current-ticker">
                <label className="current-ticker__price">
                    {Numeral(ticker.price).format(ticker.format)}
                    <span className="current-ticker__price-currency">{ticker.quoteCurrency}</span>
                </label>

                <div className="current-ticker__title">Volume 24h</div>

                <label className="current-ticker__vol">
                    <span className="current-ticker__vol-currency">{ticker.baseCurrency}</span>
                    <span className="current-ticker__vol-value">
                            {Numeral(ticker.volume_base).format("0,0.[00]")}
                            </span>
                </label>

                <label className="current-ticker__vol">
                    <span className="current-ticker__vol-currency">{ticker.quoteCurrency}</span>
                    <span className="current-ticker__vol-value">
                            {Numeral(ticker.volume_quote).format("0,0.[00]")}
                        </span>
                </label>
            </div>
        );
    }
}