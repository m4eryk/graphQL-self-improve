import { observe } from 'mobx';

export const syncHistoryWithStore = (history, store) => {
    store.history = history;

    const handleLocationChange = (location) => {
        store._updateLocation(location);
    };

    const unsubscribeFromHistory = history.listen(handleLocationChange);
    handleLocationChange(history.location);

    history.subscribe = (listener) => {
        const onStoreChange = () => {
            const rawLocation = {...store.location};
            listener(rawLocation, history.action);
        };

        const unsubscribeFromStore = observe(store, 'location', onStoreChange);

        listener(store.location, history.action);

        return unsubscribeFromStore;
    };

    history.unsubscribe = unsubscribeFromHistory;

    return history;
};