import { observable, action } from 'mobx';

export class RouterStore {
    @observable location = null;

    history = null;

    @action
    _updateLocation(newState) {
        this.location = newState;
    }

    push = (location, state) => {
        this.history.push(location, state);
    };

    replace = (location, state) => {
        this.history.replace(location, state);
    };

    go = (n) => {
        this.history.go(n);
    };

    goBack = () => {
        this.history.goBack();
    };

    goForward = () => {
        this.history.goForward();
    };
}
