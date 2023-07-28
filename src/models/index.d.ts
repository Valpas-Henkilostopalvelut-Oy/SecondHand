import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem, AsyncCollection } from "@aws-amplify/datastore";

export enum StoreSettingsType {
  IS_PAID = "isPaid",
  IS_PREMIUM = "isPremium",
  IS_PROMOTED = "isPromoted"
}

type EagerLocation = {
  readonly city: string;
  readonly lat?: string | null;
  readonly lng?: string | null;
  readonly country?: string | null;
  readonly iso2?: string | null;
  readonly admin_name: string;
  readonly capital?: string | null;
  readonly population?: string | null;
  readonly population_proper?: string | null;
  readonly driveto?: string | null;
  readonly address?: string | null;
  readonly zip?: string | null;
  readonly iframe?: string | null;
}

type LazyLocation = {
  readonly city: string;
  readonly lat?: string | null;
  readonly lng?: string | null;
  readonly country?: string | null;
  readonly iso2?: string | null;
  readonly admin_name: string;
  readonly capital?: string | null;
  readonly population?: string | null;
  readonly population_proper?: string | null;
  readonly driveto?: string | null;
  readonly address?: string | null;
  readonly zip?: string | null;
  readonly iframe?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location)

type EagerContact = {
  readonly phone: string;
  readonly email: string;
  readonly website?: string | null;
}

type LazyContact = {
  readonly phone: string;
  readonly email: string;
  readonly website?: string | null;
}

export declare type Contact = LazyLoading extends LazyLoadingDisabled ? EagerContact : LazyContact

export declare const Contact: (new (init: ModelInit<Contact>) => Contact)

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

type EagerSocial = {
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
  readonly tiktok?: string | null;
}

type LazySocial = {
  readonly facebook?: string | null;
  readonly instagram?: string | null;
  readonly twitter?: string | null;
  readonly youtube?: string | null;
  readonly tiktok?: string | null;
}

export declare type Social = LazyLoading extends LazyLoadingDisabled ? EagerSocial : LazySocial

export declare const Social: (new (init: ModelInit<Social>) => Social)

type EagerSideButton = {
  readonly text: string;
  readonly link: string;
  readonly color?: string | null;
  readonly background?: string | null;
  readonly id?: string | null;
}

type LazySideButton = {
  readonly text: string;
  readonly link: string;
  readonly color?: string | null;
  readonly background?: string | null;
  readonly id?: string | null;
}

export declare type SideButton = LazyLoading extends LazyLoadingDisabled ? EagerSideButton : LazySideButton

export declare const SideButton: (new (init: ModelInit<SideButton>) => SideButton)

type EagerSide = {
  readonly image?: string | null;
  readonly title: string;
  readonly button?: SideButton | null;
}

type LazySide = {
  readonly image?: string | null;
  readonly title: string;
  readonly button?: SideButton | null;
}

export declare type Side = LazyLoading extends LazyLoadingDisabled ? EagerSide : LazySide

export declare const Side: (new (init: ModelInit<Side>) => Side)

type EagerStoreSettingsValidation = {
  readonly status: boolean;
  readonly message?: string | null;
  readonly from?: string | null;
  readonly to?: string | null;
}

type LazyStoreSettingsValidation = {
  readonly status: boolean;
  readonly message?: string | null;
  readonly from?: string | null;
  readonly to?: string | null;
}

export declare type StoreSettingsValidation = LazyLoading extends LazyLoadingDisabled ? EagerStoreSettingsValidation : LazyStoreSettingsValidation

export declare const StoreSettingsValidation: (new (init: ModelInit<StoreSettingsValidation>) => StoreSettingsValidation)

type EagerStoreSettings = {
  readonly isHidden?: StoreSettingsValidation | null;
  readonly isDone: StoreSettingsValidation;
  readonly isConfirmed: StoreSettingsValidation;
}

type LazyStoreSettings = {
  readonly isHidden?: StoreSettingsValidation | null;
  readonly isDone: StoreSettingsValidation;
  readonly isConfirmed: StoreSettingsValidation;
}

export declare type StoreSettings = LazyLoading extends LazyLoadingDisabled ? EagerStoreSettings : LazyStoreSettings

export declare const StoreSettings: (new (init: ModelInit<StoreSettings>) => StoreSettings)

type EagerOpentime = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Opentime, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day: number;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly isClosed?: boolean | null;
  readonly store?: Store | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeOpentimesId?: string | null;
}

type LazyOpentime = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Opentime, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly day: number;
  readonly start?: string | null;
  readonly end?: string | null;
  readonly isClosed?: boolean | null;
  readonly store: AsyncItem<Store | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeOpentimesId?: string | null;
}

export declare type Opentime = LazyLoading extends LazyLoadingDisabled ? EagerOpentime : LazyOpentime

export declare const Opentime: (new (init: ModelInit<Opentime>) => Opentime) & {
  copyOf(source: Opentime, mutator: (draft: MutableModel<Opentime>) => MutableModel<Opentime> | void): Opentime;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly createdBy: string;
  readonly name: string;
  readonly updatedAt?: string | null;
  readonly storeCategoriesId?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly createdBy: string;
  readonly name: string;
  readonly updatedAt?: string | null;
  readonly storeCategoriesId?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly store?: Store | null;
  readonly notes: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeNotesId?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly store: AsyncItem<Store | undefined>;
  readonly notes: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeNotesId?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}

type EagerOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly store?: Store | null;
  readonly type: StoreSettingsType | keyof typeof StoreSettingsType;
  readonly status: string;
  readonly from: string;
  readonly to: string;
  readonly price?: number | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeOrdersId?: string | null;
}

type LazyOrders = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Orders, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly store: AsyncItem<Store | undefined>;
  readonly type: StoreSettingsType | keyof typeof StoreSettingsType;
  readonly status: string;
  readonly from: string;
  readonly to: string;
  readonly price?: number | null;
  readonly message?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly storeOrdersId?: string | null;
}

export declare type Orders = LazyLoading extends LazyLoadingDisabled ? EagerOrders : LazyOrders

export declare const Orders: (new (init: ModelInit<Orders>) => Orders) & {
  copyOf(source: Orders, mutator: (draft: MutableModel<Orders>) => MutableModel<Orders> | void): Orders;
}

type EagerAds = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firm: string;
  readonly site?: string | null;
  readonly backgroundColor?: string | null;
  readonly left: Side;
  readonly right?: Side | null;
  readonly isHidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyAds = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Ads, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly firm: string;
  readonly site?: string | null;
  readonly backgroundColor?: string | null;
  readonly left: Side;
  readonly right?: Side | null;
  readonly isHidden?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ads = LazyLoading extends LazyLoadingDisabled ? EagerAds : LazyAds

export declare const Ads: (new (init: ModelInit<Ads>) => Ads) & {
  copyOf(source: Ads, mutator: (draft: MutableModel<Ads>) => MutableModel<Ads> | void): Ads;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly stores?: (Store | null)[] | null;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly email?: string | null;
  readonly stores: AsyncCollection<Store>;
  readonly role?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly type: string;
  readonly name: string;
  readonly description?: string | null;
  readonly opentimes?: (Opentime | null)[] | null;
  readonly contact: Contact;
  readonly location: Location;
  readonly imgs?: string[] | null;
  readonly social?: Social | null;
  readonly settings: StoreSettings;
  readonly logo?: string | null;
  readonly categories?: (Categories | null)[] | null;
  readonly notes?: (Notes | null)[] | null;
  readonly orders?: (Orders | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyStore = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Store, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly username: string;
  readonly type: string;
  readonly name: string;
  readonly description?: string | null;
  readonly opentimes: AsyncCollection<Opentime>;
  readonly contact: Contact;
  readonly location: Location;
  readonly imgs?: string[] | null;
  readonly social?: Social | null;
  readonly settings: StoreSettings;
  readonly logo?: string | null;
  readonly categories: AsyncCollection<Categories>;
  readonly notes: AsyncCollection<Notes>;
  readonly orders: AsyncCollection<Orders>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Store = LazyLoading extends LazyLoadingDisabled ? EagerStore : LazyStore

export declare const Store: (new (init: ModelInit<Store>) => Store) & {
  copyOf(source: Store, mutator: (draft: MutableModel<Store>) => MutableModel<Store> | void): Store;
}

type EagerEvaluation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evaluation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evaluationNum: number;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly description: string;
  readonly category: string;
  readonly type: string;
  readonly images: (string | null)[];
  readonly isConfirmed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEvaluation = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Evaluation, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly evaluationNum: number;
  readonly name: string;
  readonly email: string;
  readonly phone: string;
  readonly description: string;
  readonly category: string;
  readonly type: string;
  readonly images: (string | null)[];
  readonly isConfirmed?: boolean | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Evaluation = LazyLoading extends LazyLoadingDisabled ? EagerEvaluation : LazyEvaluation

export declare const Evaluation: (new (init: ModelInit<Evaluation>) => Evaluation) & {
  copyOf(source: Evaluation, mutator: (draft: MutableModel<Evaluation>) => MutableModel<Evaluation> | void): Evaluation;
}