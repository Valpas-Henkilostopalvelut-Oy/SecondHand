/**
type Businesses @model @auth(rules: [{allow: private}]) {
  id: ID!
  customersID: ID! @index(name: "byCustomers")
  name: String!
  description: String
  websiteUrl: String
  logo: String
  images: [String]
  openHours: OpenHours
  contacts: [Contact]
  Notes: [Notes] @hasMany(indexName: "byBusinesses", fields: ["id"])
  social: Social
  locations: [Location]
  categoriess: [Categories] @manyToMany(relationName: "CategoriesBusinesses")
  ordersID: ID! @index(name: "byOrders")
}

type OpenHours {
  openNow: Boolean
  period: [Periods]
  specialDays: [SpecialDay]
}

type SpecialDay {
  date: Date!
}

type Periods {
  open: TimeOfDay!
  close: TimeOfDay!
}

type Date {
  year: Int!
  month: Int!
  day: Int!
}

type TimeOfDay {
  day: Int!
  hour: Int!
  minute: Int!
  date: Date!
}

type Contact {
  name: String!
  phone: String
  email: String
}

type Social {
  facebook: String
  twitter: String
  instagram: String
  youtube: String
  tiktok: String
}

type Location {
  name: String!
  driveto: String
  iframe: String
  zipcode: String!
  address: String!
  city: String!
  adminName: String!
  country: String!
}
*/

import { Businesses } from "../models";

export interface BusinessState {
  businesses: Businesses[] | null;
  businessesShort: BusinessShort[] | null;
  isLoading: boolean;
  previouseBusinesses: Businesses | null;
}

export interface BusinessShort {
  id: string;
  name: string;
  openNow: boolean | null | undefined;
  description: string | null | undefined;
  typeId: string;
  categories?: string[] | null;
  image: string | null | undefined;
  locationId: string;
  cityId: string;
}

export interface Business {
  locationsID: string;
  name: string;
  address: string;
  iframe?: string | null;
  dirrection?: string | null;
  description?: string | null;
  websiteUrl?: string | null;
  logo?: string | null;
  images?: (string | null)[] | null;
  openHours?: OpenHours | null;
  contacts?: (Contact | null)[] | null;
  social?: Social | null;
  typesID: string;
  citiesID: string;
}

export interface OpenHours {
  openNow: boolean;
  period?: Periods[] | null;
  specialDays?: SpecialDay[] | null;
}

export interface SpecialDay {
  date: Date;
}

export interface Periods {
  open: TimeOfDay;
  close: TimeOfDay;
}

export interface Date {
  year: number;
  month: number;
  day: number;
}

export interface TimeOfDay {
  day: number;
  hours: number;
  minute: number;
  date: Date;
}

export interface Contact {
  name: string;
  phone?: string | null | undefined;
  email?: string | null | undefined;
}

export interface Social {
  facebook: string;
  twitter: string;
  instagram: string;
  tiktok: string;
}
