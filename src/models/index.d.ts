import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";



type EagerSocial = {
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly tiktok?: string | null;
}

type LazySocial = {
  readonly facebook?: string | null;
  readonly twitter?: string | null;
  readonly instagram?: string | null;
  readonly tiktok?: string | null;
}

export declare type Social = LazyLoading extends LazyLoadingDisabled ? EagerSocial : LazySocial

export declare const Social: (new (init: ModelInit<Social>) => Social)

type EagerContacts = {
  readonly name: string;
  readonly phone?: string | null;
  readonly email?: string | null;
}

type LazyContacts = {
  readonly name: string;
  readonly phone?: string | null;
  readonly email?: string | null;
}

export declare type Contacts = LazyLoading extends LazyLoadingDisabled ? EagerContacts : LazyContacts

export declare const Contacts: (new (init: ModelInit<Contacts>) => Contacts)

type EagerSpecialDay = {
  readonly date: Date;
}

type LazySpecialDay = {
  readonly date: Date;
}

export declare type SpecialDay = LazyLoading extends LazyLoadingDisabled ? EagerSpecialDay : LazySpecialDay

export declare const SpecialDay: (new (init: ModelInit<SpecialDay>) => SpecialDay)

type EagerDate = {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}

type LazyDate = {
  readonly year: number;
  readonly month: number;
  readonly day: number;
}

export declare type Date = LazyLoading extends LazyLoadingDisabled ? EagerDate : LazyDate

export declare const Date: (new (init: ModelInit<Date>) => Date)

type EagerTimeOfDay = {
  readonly day: number;
  readonly hours: number;
  readonly minute: number;
  readonly date: Date;
}

type LazyTimeOfDay = {
  readonly day: number;
  readonly hours: number;
  readonly minute: number;
  readonly date: Date;
}

export declare type TimeOfDay = LazyLoading extends LazyLoadingDisabled ? EagerTimeOfDay : LazyTimeOfDay

export declare const TimeOfDay: (new (init: ModelInit<TimeOfDay>) => TimeOfDay)

type EagerPeriods = {
  readonly open: TimeOfDay;
  readonly close: TimeOfDay;
}

type LazyPeriods = {
  readonly open: TimeOfDay;
  readonly close: TimeOfDay;
}

export declare type Periods = LazyLoading extends LazyLoadingDisabled ? EagerPeriods : LazyPeriods

export declare const Periods: (new (init: ModelInit<Periods>) => Periods)

type EagerOpenHours = {
  readonly openNow: boolean;
  readonly period?: (Periods | null)[] | null;
  readonly specialDays?: (SpecialDay | null)[] | null;
}

type LazyOpenHours = {
  readonly openNow: boolean;
  readonly period?: (Periods | null)[] | null;
  readonly specialDays?: (SpecialDay | null)[] | null;
}

export declare type OpenHours = LazyLoading extends LazyLoadingDisabled ? EagerOpenHours : LazyOpenHours

export declare const OpenHours: (new (init: ModelInit<OpenHours>) => OpenHours)

type EagerTypes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Types, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly Businesses?: (Businesses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyTypes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Types, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly image?: string | null;
  readonly Businesses: AsyncCollection<Businesses>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Types = LazyLoading extends LazyLoadingDisabled ? EagerTypes : LazyTypes

export declare const Types: (new (init: ModelInit<Types>) => Types) & {
  copyOf(source: Types, mutator: (draft: MutableModel<Types>) => MutableModel<Types> | void): Types;
}

type EagerLocations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Locations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Businesses?: (Businesses | null)[] | null;
  readonly Cities?: (Cities | null)[] | null;
  readonly adminName: string;
  readonly country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocations = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Locations, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Businesses: AsyncCollection<Businesses>;
  readonly Cities: AsyncCollection<Cities>;
  readonly adminName: string;
  readonly country: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Locations = LazyLoading extends LazyLoadingDisabled ? EagerLocations : LazyLocations

export declare const Locations: (new (init: ModelInit<Locations>) => Locations) & {
  copyOf(source: Locations, mutator: (draft: MutableModel<Locations>) => MutableModel<Locations> | void): Locations;
}

type EagerCities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationId: string;
  readonly name: string;
  readonly zipcode: string;
  readonly Businesses?: (Businesses | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCities = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Cities, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly locationId: string;
  readonly name: string;
  readonly zipcode: string;
  readonly Businesses: AsyncCollection<Businesses>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Cities = LazyLoading extends LazyLoadingDisabled ? EagerCities : LazyCities

export declare const Cities: (new (init: ModelInit<Cities>) => Cities) & {
  copyOf(source: Cities, mutator: (draft: MutableModel<Cities>) => MutableModel<Cities> | void): Cities;
}

type EagerNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customersID: string;
  readonly businessesID: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNotes = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notes, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly customersID: string;
  readonly businessesID: string;
  readonly text: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Notes = LazyLoading extends LazyLoadingDisabled ? EagerNotes : LazyNotes

export declare const Notes: (new (init: ModelInit<Notes>) => Notes) & {
  copyOf(source: Notes, mutator: (draft: MutableModel<Notes>) => MutableModel<Notes> | void): Notes;
}

type EagerCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Notes?: (Notes | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCustomers = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Customers, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Notes: AsyncCollection<Notes>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Customers = LazyLoading extends LazyLoadingDisabled ? EagerCustomers : LazyCustomers

export declare const Customers: (new (init: ModelInit<Customers>) => Customers) & {
  copyOf(source: Customers, mutator: (draft: MutableModel<Customers>) => MutableModel<Customers> | void): Customers;
}

type EagerBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoriess?: (BusinessesCategories | null)[] | null;
  readonly Notes?: (Notes | null)[] | null;
  readonly locationsID: string;
  readonly address: string;
  readonly name: string;
  readonly description?: string | null;
  readonly websiteUrl?: string | null;
  readonly logo?: string | null;
  readonly images?: (string | null)[] | null;
  readonly openHours?: OpenHours | null;
  readonly contacts?: (Contacts | null)[] | null;
  readonly social?: Social | null;
  readonly typesID: string;
  readonly citiesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinesses = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Businesses, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly Categoriess: AsyncCollection<BusinessesCategories>;
  readonly Notes: AsyncCollection<Notes>;
  readonly locationsID: string;
  readonly address: string;
  readonly name: string;
  readonly description?: string | null;
  readonly websiteUrl?: string | null;
  readonly logo?: string | null;
  readonly images?: (string | null)[] | null;
  readonly openHours?: OpenHours | null;
  readonly contacts?: (Contacts | null)[] | null;
  readonly social?: Social | null;
  readonly typesID: string;
  readonly citiesID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Businesses = LazyLoading extends LazyLoadingDisabled ? EagerBusinesses : LazyBusinesses

export declare const Businesses: (new (init: ModelInit<Businesses>) => Businesses) & {
  copyOf(source: Businesses, mutator: (draft: MutableModel<Businesses>) => MutableModel<Businesses> | void): Businesses;
}

type EagerCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly Businesses?: (BusinessesCategories | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Categories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly description?: string | null;
  readonly image?: string | null;
  readonly Businesses: AsyncCollection<BusinessesCategories>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Categories = LazyLoading extends LazyLoadingDisabled ? EagerCategories : LazyCategories

export declare const Categories: (new (init: ModelInit<Categories>) => Categories) & {
  copyOf(source: Categories, mutator: (draft: MutableModel<Categories>) => MutableModel<Categories> | void): Categories;
}

type EagerBusinessesCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessesCategories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessesId?: string | null;
  readonly categoriesId?: string | null;
  readonly businesses: Businesses;
  readonly categories: Categories;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBusinessesCategories = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BusinessesCategories, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly businessesId?: string | null;
  readonly categoriesId?: string | null;
  readonly businesses: AsyncItem<Businesses>;
  readonly categories: AsyncItem<Categories>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BusinessesCategories = LazyLoading extends LazyLoadingDisabled ? EagerBusinessesCategories : LazyBusinessesCategories

export declare const BusinessesCategories: (new (init: ModelInit<BusinessesCategories>) => BusinessesCategories) & {
  copyOf(source: BusinessesCategories, mutator: (draft: MutableModel<BusinessesCategories>) => MutableModel<BusinessesCategories> | void): BusinessesCategories;
}