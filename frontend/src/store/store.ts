import { Instance, types } from 'mobx-state-tree';
import { RouterModel } from 'mst-react-router';
import storesName from '../constant/storesName';
import LibraryStore from './libraryStore';
import RouterStore from './routerStore';

const Model: any = types.model(storesName.ROOT, {
    [storesName.LIBRARY]: types.optional(LibraryStore, {}),
    [storesName.ROUTER]: RouterModel
});

export interface IModelStore extends Instance<typeof Model> {
}

export const store = Model.create({
    [storesName.ROUTER]: RouterStore
});
