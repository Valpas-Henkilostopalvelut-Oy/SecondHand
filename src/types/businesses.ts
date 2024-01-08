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

import BaseType from "./basetype";
import { BusinessType } from "./businessType";
import { Categories } from "./categories";

export interface BusinessShort {
  id: string;
  name: string;
  openNow: boolean | null | undefined;
  description: string | null | undefined;
  type: BusinessType;
  categories?: string[] | null;
  location?: LocationShort[] | null;
  image: string;
}

interface LocationShort {
  adminName: string | null | undefined;
  city: string | null | undefined;
}

export interface Businesses extends BaseType {
  customersID: string | null | undefined;
  name: string;
  description: string | null | undefined;
  websiteUrl: string | null | undefined;
  logo: string | null | undefined;
  images: string[] | null | undefined;
  openHours: OpenHours | null | undefined;
  contacts: Contact[] | null | undefined;
  notes: Notes[] | null | undefined;
  social: Social | null | undefined;
  locations: Location[] | null | undefined;
  type: BusinessType | null | undefined;
  categories: Categories[] | null | undefined;
  orderID: string | null | undefined;
}

interface Notes {
  id: string;
  note: string;
}

export interface OpenHours {
  openNow: boolean;
  period: Periods[];
  specialDays: SpecialDay[];
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
  hour: number;
  minute: number;
  date: Date;
}

export interface Contact {
  name: string;
  phone: string | null | undefined;
  email: string | null | undefined;
}

export interface Social {
  facebook: string;
  twitter: string;
  instagram: string;
  youtube: string;
  tiktok: string;
}

export interface Location {
  name: string;
  driveto: string | null | undefined;
  iframe: string | null | undefined;
  zipcode: string;
  address: string;
  city: string;
  adminName: string;
  country: string;
}
