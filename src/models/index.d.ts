import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";



type EagerCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
}

type LazyCategory = {
  readonly id?: string | null;
  readonly name?: string | null;
}

export declare type Category = LazyLoading extends LazyLoadingDisabled ? EagerCategory : LazyCategory

export declare const Category: (new (init: ModelInit<Category>) => Category)

type EagerCity = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly area?: string | null;
}

type LazyCity = {
  readonly id?: string | null;
  readonly name?: string | null;
  readonly area?: string | null;
}

export declare type City = LazyLoading extends LazyLoadingDisabled ? EagerCity : LazyCity

export declare const City: (new (init: ModelInit<City>) => City)

type EagerImage = {
  readonly key?: string | null;
  readonly id?: string | null;
}

type LazyImage = {
  readonly key?: string | null;
  readonly id?: string | null;
}

export declare type Image = LazyLoading extends LazyLoadingDisabled ? EagerImage : LazyImage

export declare const Image: (new (init: ModelInit<Image>) => Image)

type EagerLocation = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly zip?: string | null;
  readonly area?: string | null;
  readonly driveto?: string | null;
}

type LazyLocation = {
  readonly address?: string | null;
  readonly city?: string | null;
  readonly zip?: string | null;
  readonly area?: string | null;
  readonly driveto?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerContact = {
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
}

type LazyContact = {
  readonly phone?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact)

type EagerOpentime = {
  readonly day?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly id?: string | null;
}

type LazyOpentime = {
  readonly day?: string | null;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly id?: string | null;
}

export declare type Opentime = LazyLoading extends LazyLoadingDisabled ? EagerOpentime : LazyOpentime

export declare const Opentime: (new (init: ModelInit<Opentime>) => Opentime)

type EagerPriceitem = {
  readonly name?: string | null;
  readonly price?: number | null;
  readonly id?: number | null;
}

type LazyPriceitem = {
  readonly name?: string | null;
  readonly price?: number | null;
  readonly id?: number | null;
}

export declare type Priceitem = LazyLoading extends LazyLoadingDisabled ? EagerPriceitem : LazyPriceitem

export declare const Priceitem: (new (init: ModelInit<Priceitem>) => Priceitem)

type EagerSellplaces = {
  readonly all?: number | null;
  readonly free?: number | null;
}

type LazySellplaces = {
  readonly all?: number | null;
  readonly free?: number | null;
}

export declare type Sellplaces = LazyLoading extends LazyLoadingDisabled ? EagerSellplaces : LazySellplaces

export declare const Sellplaces: (new (init: ModelInit<Sellplaces>) => Sellplaces)

type EagerAreas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Areas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cities?: (City | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAreas = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Areas, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly cities?: (City | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Areas = LazyLoading extends LazyLoadingDisabled ? EagerAreas : LazyAreas

export declare const Areas: (new (init: ModelInit<Areas>) => Areas) & {
  copyOf(source: Areas, mutator: (draft: MutableModel<Areas>) => MutableModel<Areas> | void): Areas;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdBy?: string | null;
  readonly categories?: (Category | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly createdBy?: string | null;
  readonly categories?: (Category | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly categories?: (Category | null)[] | null;
  readonly services?: (number | null)[] | null;
  readonly clicked?: string | null;
  readonly sellplaces?: Sellplaces | null;
  readonly pricelist?: (Priceitem | null)[] | null;
  readonly embedmap?: string | null;
  readonly opentimes?: (Opentime | null)[] | null;
  readonly contact?: Contact | null;
  readonly location?: Location | null;
  readonly imgs?: (Image | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly categories?: (Category | null)[] | null;
  readonly services?: (number | null)[] | null;
  readonly clicked?: string | null;
  readonly sellplaces?: Sellplaces | null;
  readonly pricelist?: (Priceitem | null)[] | null;
  readonly embedmap?: string | null;
  readonly opentimes?: (Opentime | null)[] | null;
  readonly contact?: Contact | null;
  readonly location?: Location | null;
  readonly imgs?: (Image | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}