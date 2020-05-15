import { RouterStore } from 'mobx-react-router';
import { LibraryStore } from './libraryStore';

export default class Stores {
    routerStore = new RouterStore();
    libraryStore = new LibraryStore();
}
