import { RouterStore } from './routerStore';
import { LibraryStore } from './libraryStore';

export default class Stores {
    routerStore = new RouterStore();
    libraryStore = new LibraryStore();
}
