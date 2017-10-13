import store from 'Popup/Store/index';

import ExtensionPlatform from 'Library/Extension';
const ext = new ExtensionPlatform;

import {Events} from 'Library/EventProtocol/Events';

import {updateTicker} from 'Popup/Actions/TickerActions';

ext.getExtension().extension.onMessage.addListener((request, sender, sendResponse) => {
    let {event = null, ...payload} = request;

    if (!event) {
        throw Error("Event! Must be set");
    }

    switch (event) {
        case Events.UPDATE_TICKER: {
            if ('key' in payload) {
                store.dispatch(updateTicker(payload));
            }
            break;
        }

        default: {
            throw Error(`Not supported Event ${payload}`);
        }
    }
});