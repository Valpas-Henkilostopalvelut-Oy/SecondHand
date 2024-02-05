/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTypesInput = {
  id?: string | null,
  name: string,
  image?: string | null,
  _version?: number | null,
};

export type ModelTypesConditionInput = {
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTypesConditionInput | null > | null,
  or?: Array< ModelTypesConditionInput | null > | null,
  not?: ModelTypesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Types = {
  __typename: "Types",
  id: string,
  name: string,
  image?: string | null,
  Businesses?: ModelBusinessesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBusinessesConnection = {
  __typename: "ModelBusinessesConnection",
  items:  Array<Businesses | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Businesses = {
  __typename: "Businesses",
  id: string,
  Categoriess?: ModelBusinessesCategoriesConnection | null,
  Notes?: ModelNotesConnection | null,
  locationsID: string,
  address: string,
  dirrection?: string | null,
  iframe?: string | null,
  name: string,
  description?: string | null,
  websiteUrl?: string | null,
  logo?: string | null,
  images?: Array< string | null > | null,
  openHours?: OpenHours | null,
  contacts?:  Array<Contacts | null > | null,
  social?: Social | null,
  typesID: string,
  citiesID: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelBusinessesCategoriesConnection = {
  __typename: "ModelBusinessesCategoriesConnection",
  items:  Array<BusinessesCategories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type BusinessesCategories = {
  __typename: "BusinessesCategories",
  id: string,
  businessesId: string,
  categoriesId: string,
  businesses: Businesses,
  categories: Categories,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Categories = {
  __typename: "Categories",
  id: string,
  name: string,
  description?: string | null,
  image?: string | null,
  Businesses?: ModelBusinessesCategoriesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelNotesConnection = {
  __typename: "ModelNotesConnection",
  items:  Array<Notes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Notes = {
  __typename: "Notes",
  id: string,
  customersID: string,
  businessesID: string,
  text: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type OpenHours = {
  __typename: "OpenHours",
  openNow: boolean,
  period?:  Array<Periods | null > | null,
  specialDays?:  Array<SpecialDay | null > | null,
};

export type Periods = {
  __typename: "Periods",
  open: TimeOfDay,
  close: TimeOfDay,
};

export type TimeOfDay = {
  __typename: "TimeOfDay",
  day: number,
  hours: number,
  minute: number,
  date: Date,
};

export type Date = {
  __typename: "Date",
  year: number,
  month: number,
  day: number,
};

export type SpecialDay = {
  __typename: "SpecialDay",
  date: Date,
};

export type Contacts = {
  __typename: "Contacts",
  name: string,
  phone?: string | null,
  email?: string | null,
};

export type Social = {
  __typename: "Social",
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  tiktok?: string | null,
};

export type UpdateTypesInput = {
  id: string,
  name?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteTypesInput = {
  id: string,
  _version?: number | null,
};

export type CreateLocationsInput = {
  id?: string | null,
  adminName: string,
  country: string,
  image?: string | null,
  _version?: number | null,
};

export type ModelLocationsConditionInput = {
  adminName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelLocationsConditionInput | null > | null,
  or?: Array< ModelLocationsConditionInput | null > | null,
  not?: ModelLocationsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Locations = {
  __typename: "Locations",
  id: string,
  Businesses?: ModelBusinessesConnection | null,
  Cities?: ModelCitiesConnection | null,
  adminName: string,
  country: string,
  image?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelCitiesConnection = {
  __typename: "ModelCitiesConnection",
  items:  Array<Cities | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Cities = {
  __typename: "Cities",
  id: string,
  locationId: string,
  name: string,
  zipcode?: string | null,
  Businesses?: ModelBusinessesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateLocationsInput = {
  id: string,
  adminName?: string | null,
  country?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteLocationsInput = {
  id: string,
  _version?: number | null,
};

export type CreateCitiesInput = {
  id?: string | null,
  locationId: string,
  name: string,
  zipcode?: string | null,
  _version?: number | null,
};

export type ModelCitiesConditionInput = {
  locationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  and?: Array< ModelCitiesConditionInput | null > | null,
  or?: Array< ModelCitiesConditionInput | null > | null,
  not?: ModelCitiesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateCitiesInput = {
  id: string,
  locationId?: string | null,
  name?: string | null,
  zipcode?: string | null,
  _version?: number | null,
};

export type DeleteCitiesInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotesInput = {
  id?: string | null,
  customersID: string,
  businessesID: string,
  text: string,
  _version?: number | null,
};

export type ModelNotesConditionInput = {
  customersID?: ModelIDInput | null,
  businessesID?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelNotesConditionInput | null > | null,
  or?: Array< ModelNotesConditionInput | null > | null,
  not?: ModelNotesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateNotesInput = {
  id: string,
  customersID?: string | null,
  businessesID?: string | null,
  text?: string | null,
  _version?: number | null,
};

export type DeleteNotesInput = {
  id: string,
  _version?: number | null,
};

export type CreateCustomersInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelCustomersConditionInput = {
  and?: Array< ModelCustomersConditionInput | null > | null,
  or?: Array< ModelCustomersConditionInput | null > | null,
  not?: ModelCustomersConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Customers = {
  __typename: "Customers",
  id: string,
  Notes?: ModelNotesConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCustomersInput = {
  id: string,
  _version?: number | null,
};

export type DeleteCustomersInput = {
  id: string,
  _version?: number | null,
};

export type CreateBusinessesInput = {
  id?: string | null,
  locationsID: string,
  address: string,
  dirrection?: string | null,
  iframe?: string | null,
  name: string,
  description?: string | null,
  websiteUrl?: string | null,
  logo?: string | null,
  images?: Array< string | null > | null,
  openHours?: OpenHoursInput | null,
  contacts?: Array< ContactsInput | null > | null,
  social?: SocialInput | null,
  typesID: string,
  citiesID: string,
  _version?: number | null,
};

export type OpenHoursInput = {
  openNow: boolean,
  period?: Array< PeriodsInput | null > | null,
  specialDays?: Array< SpecialDayInput | null > | null,
};

export type PeriodsInput = {
  open: TimeOfDayInput,
  close: TimeOfDayInput,
};

export type TimeOfDayInput = {
  day: number,
  hours: number,
  minute: number,
  date: DateInput,
};

export type DateInput = {
  year: number,
  month: number,
  day: number,
};

export type SpecialDayInput = {
  date: DateInput,
};

export type ContactsInput = {
  name: string,
  phone?: string | null,
  email?: string | null,
};

export type SocialInput = {
  facebook?: string | null,
  twitter?: string | null,
  instagram?: string | null,
  tiktok?: string | null,
};

export type ModelBusinessesConditionInput = {
  locationsID?: ModelIDInput | null,
  address?: ModelStringInput | null,
  dirrection?: ModelStringInput | null,
  iframe?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  images?: ModelStringInput | null,
  typesID?: ModelIDInput | null,
  citiesID?: ModelIDInput | null,
  and?: Array< ModelBusinessesConditionInput | null > | null,
  or?: Array< ModelBusinessesConditionInput | null > | null,
  not?: ModelBusinessesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateBusinessesInput = {
  id: string,
  locationsID?: string | null,
  address?: string | null,
  dirrection?: string | null,
  iframe?: string | null,
  name?: string | null,
  description?: string | null,
  websiteUrl?: string | null,
  logo?: string | null,
  images?: Array< string | null > | null,
  openHours?: OpenHoursInput | null,
  contacts?: Array< ContactsInput | null > | null,
  social?: SocialInput | null,
  typesID?: string | null,
  citiesID?: string | null,
  _version?: number | null,
};

export type DeleteBusinessesInput = {
  id: string,
  _version?: number | null,
};

export type CreateCategoriesInput = {
  id?: string | null,
  name: string,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type ModelCategoriesConditionInput = {
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoriesConditionInput | null > | null,
  or?: Array< ModelCategoriesConditionInput | null > | null,
  not?: ModelCategoriesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateCategoriesInput = {
  id: string,
  name?: string | null,
  description?: string | null,
  image?: string | null,
  _version?: number | null,
};

export type DeleteCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type CreateBusinessesCategoriesInput = {
  id?: string | null,
  businessesId: string,
  categoriesId: string,
  _version?: number | null,
};

export type ModelBusinessesCategoriesConditionInput = {
  businessesId?: ModelIDInput | null,
  categoriesId?: ModelIDInput | null,
  and?: Array< ModelBusinessesCategoriesConditionInput | null > | null,
  or?: Array< ModelBusinessesCategoriesConditionInput | null > | null,
  not?: ModelBusinessesCategoriesConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateBusinessesCategoriesInput = {
  id: string,
  businessesId?: string | null,
  categoriesId?: string | null,
  _version?: number | null,
};

export type DeleteBusinessesCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type ModelTypesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelTypesFilterInput | null > | null,
  or?: Array< ModelTypesFilterInput | null > | null,
  not?: ModelTypesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelTypesConnection = {
  __typename: "ModelTypesConnection",
  items:  Array<Types | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelLocationsFilterInput = {
  id?: ModelIDInput | null,
  adminName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelLocationsFilterInput | null > | null,
  or?: Array< ModelLocationsFilterInput | null > | null,
  not?: ModelLocationsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelLocationsConnection = {
  __typename: "ModelLocationsConnection",
  items:  Array<Locations | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCitiesFilterInput = {
  id?: ModelIDInput | null,
  locationId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  zipcode?: ModelStringInput | null,
  and?: Array< ModelCitiesFilterInput | null > | null,
  or?: Array< ModelCitiesFilterInput | null > | null,
  not?: ModelCitiesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelNotesFilterInput = {
  id?: ModelIDInput | null,
  customersID?: ModelIDInput | null,
  businessesID?: ModelIDInput | null,
  text?: ModelStringInput | null,
  and?: Array< ModelNotesFilterInput | null > | null,
  or?: Array< ModelNotesFilterInput | null > | null,
  not?: ModelNotesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCustomersFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelCustomersFilterInput | null > | null,
  or?: Array< ModelCustomersFilterInput | null > | null,
  not?: ModelCustomersFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCustomersConnection = {
  __typename: "ModelCustomersConnection",
  items:  Array<Customers | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBusinessesFilterInput = {
  id?: ModelIDInput | null,
  locationsID?: ModelIDInput | null,
  address?: ModelStringInput | null,
  dirrection?: ModelStringInput | null,
  iframe?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  websiteUrl?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  images?: ModelStringInput | null,
  typesID?: ModelIDInput | null,
  citiesID?: ModelIDInput | null,
  and?: Array< ModelBusinessesFilterInput | null > | null,
  or?: Array< ModelBusinessesFilterInput | null > | null,
  not?: ModelBusinessesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  image?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<Categories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelBusinessesCategoriesFilterInput = {
  id?: ModelIDInput | null,
  businessesId?: ModelIDInput | null,
  categoriesId?: ModelIDInput | null,
  and?: Array< ModelBusinessesCategoriesFilterInput | null > | null,
  or?: Array< ModelBusinessesCategoriesFilterInput | null > | null,
  not?: ModelBusinessesCategoriesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelSubscriptionTypesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionTypesFilterInput | null > | null,
  or?: Array< ModelSubscriptionTypesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionLocationsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  adminName?: ModelSubscriptionStringInput | null,
  country?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionLocationsFilterInput | null > | null,
  or?: Array< ModelSubscriptionLocationsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCitiesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  locationId?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  zipcode?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCitiesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCitiesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  customersID?: ModelSubscriptionIDInput | null,
  businessesID?: ModelSubscriptionIDInput | null,
  text?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCustomersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionCustomersFilterInput | null > | null,
  or?: Array< ModelSubscriptionCustomersFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBusinessesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  locationsID?: ModelSubscriptionIDInput | null,
  address?: ModelSubscriptionStringInput | null,
  dirrection?: ModelSubscriptionStringInput | null,
  iframe?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  websiteUrl?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  typesID?: ModelSubscriptionIDInput | null,
  citiesID?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBusinessesFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  image?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBusinessesCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  businessesId?: ModelSubscriptionIDInput | null,
  categoriesId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionBusinessesCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionBusinessesCategoriesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateTypesMutationVariables = {
  input: CreateTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type CreateTypesMutation = {
  createTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateTypesMutationVariables = {
  input: UpdateTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type UpdateTypesMutation = {
  updateTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteTypesMutationVariables = {
  input: DeleteTypesInput,
  condition?: ModelTypesConditionInput | null,
};

export type DeleteTypesMutation = {
  deleteTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateLocationsMutationVariables = {
  input: CreateLocationsInput,
  condition?: ModelLocationsConditionInput | null,
};

export type CreateLocationsMutation = {
  createLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateLocationsMutationVariables = {
  input: UpdateLocationsInput,
  condition?: ModelLocationsConditionInput | null,
};

export type UpdateLocationsMutation = {
  updateLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteLocationsMutationVariables = {
  input: DeleteLocationsInput,
  condition?: ModelLocationsConditionInput | null,
};

export type DeleteLocationsMutation = {
  deleteLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCitiesMutationVariables = {
  input: CreateCitiesInput,
  condition?: ModelCitiesConditionInput | null,
};

export type CreateCitiesMutation = {
  createCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCitiesMutationVariables = {
  input: UpdateCitiesInput,
  condition?: ModelCitiesConditionInput | null,
};

export type UpdateCitiesMutation = {
  updateCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCitiesMutationVariables = {
  input: DeleteCitiesInput,
  condition?: ModelCitiesConditionInput | null,
};

export type DeleteCitiesMutation = {
  deleteCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateNotesMutationVariables = {
  input: CreateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type CreateNotesMutation = {
  createNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateNotesMutationVariables = {
  input: UpdateNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type UpdateNotesMutation = {
  updateNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteNotesMutationVariables = {
  input: DeleteNotesInput,
  condition?: ModelNotesConditionInput | null,
};

export type DeleteNotesMutation = {
  deleteNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCustomersMutationVariables = {
  input: CreateCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type CreateCustomersMutation = {
  createCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCustomersMutationVariables = {
  input: UpdateCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type UpdateCustomersMutation = {
  updateCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCustomersMutationVariables = {
  input: DeleteCustomersInput,
  condition?: ModelCustomersConditionInput | null,
};

export type DeleteCustomersMutation = {
  deleteCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBusinessesMutationVariables = {
  input: CreateBusinessesInput,
  condition?: ModelBusinessesConditionInput | null,
};

export type CreateBusinessesMutation = {
  createBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBusinessesMutationVariables = {
  input: UpdateBusinessesInput,
  condition?: ModelBusinessesConditionInput | null,
};

export type UpdateBusinessesMutation = {
  updateBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBusinessesMutationVariables = {
  input: DeleteBusinessesInput,
  condition?: ModelBusinessesConditionInput | null,
};

export type DeleteBusinessesMutation = {
  deleteBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateCategoriesMutationVariables = {
  input: CreateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type CreateCategoriesMutation = {
  createCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateCategoriesMutationVariables = {
  input: UpdateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type UpdateCategoriesMutation = {
  updateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteCategoriesMutationVariables = {
  input: DeleteCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type DeleteCategoriesMutation = {
  deleteCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateBusinessesCategoriesMutationVariables = {
  input: CreateBusinessesCategoriesInput,
  condition?: ModelBusinessesCategoriesConditionInput | null,
};

export type CreateBusinessesCategoriesMutation = {
  createBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateBusinessesCategoriesMutationVariables = {
  input: UpdateBusinessesCategoriesInput,
  condition?: ModelBusinessesCategoriesConditionInput | null,
};

export type UpdateBusinessesCategoriesMutation = {
  updateBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteBusinessesCategoriesMutationVariables = {
  input: DeleteBusinessesCategoriesInput,
  condition?: ModelBusinessesCategoriesConditionInput | null,
};

export type DeleteBusinessesCategoriesMutation = {
  deleteBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetTypesQueryVariables = {
  id: string,
};

export type GetTypesQuery = {
  getTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListTypesQueryVariables = {
  filter?: ModelTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypesQuery = {
  listTypes?:  {
    __typename: "ModelTypesConnection",
    items:  Array< {
      __typename: "Types",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTypesQueryVariables = {
  filter?: ModelTypesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTypesQuery = {
  syncTypes?:  {
    __typename: "ModelTypesConnection",
    items:  Array< {
      __typename: "Types",
      id: string,
      name: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetLocationsQueryVariables = {
  id: string,
};

export type GetLocationsQuery = {
  getLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListLocationsQueryVariables = {
  filter?: ModelLocationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLocationsQuery = {
  listLocations?:  {
    __typename: "ModelLocationsConnection",
    items:  Array< {
      __typename: "Locations",
      id: string,
      adminName: string,
      country: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncLocationsQueryVariables = {
  filter?: ModelLocationsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncLocationsQuery = {
  syncLocations?:  {
    __typename: "ModelLocationsConnection",
    items:  Array< {
      __typename: "Locations",
      id: string,
      adminName: string,
      country: string,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCitiesQueryVariables = {
  id: string,
};

export type GetCitiesQuery = {
  getCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCitiesQueryVariables = {
  filter?: ModelCitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCitiesQuery = {
  listCities?:  {
    __typename: "ModelCitiesConnection",
    items:  Array< {
      __typename: "Cities",
      id: string,
      locationId: string,
      name: string,
      zipcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCitiesQueryVariables = {
  filter?: ModelCitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCitiesQuery = {
  syncCities?:  {
    __typename: "ModelCitiesConnection",
    items:  Array< {
      __typename: "Cities",
      id: string,
      locationId: string,
      name: string,
      zipcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetNotesQueryVariables = {
  id: string,
};

export type GetNotesQuery = {
  getNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListNotesQueryVariables = {
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNotesQuery = {
  listNotes?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      customersID: string,
      businessesID: string,
      text: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncNotesQueryVariables = {
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncNotesQuery = {
  syncNotes?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      customersID: string,
      businessesID: string,
      text: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCustomersQueryVariables = {
  id: string,
};

export type GetCustomersQuery = {
  getCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCustomersQueryVariables = {
  filter?: ModelCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCustomersQuery = {
  listCustomers?:  {
    __typename: "ModelCustomersConnection",
    items:  Array< {
      __typename: "Customers",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCustomersQueryVariables = {
  filter?: ModelCustomersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCustomersQuery = {
  syncCustomers?:  {
    __typename: "ModelCustomersConnection",
    items:  Array< {
      __typename: "Customers",
      id: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBusinessesQueryVariables = {
  id: string,
};

export type GetBusinessesQuery = {
  getBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBusinessesQueryVariables = {
  filter?: ModelBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesQuery = {
  listBusinesses?:  {
    __typename: "ModelBusinessesConnection",
    items:  Array< {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBusinessesQueryVariables = {
  filter?: ModelBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBusinessesQuery = {
  syncBusinesses?:  {
    __typename: "ModelBusinessesConnection",
    items:  Array< {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoriesQueryVariables = {
  id: string,
};

export type GetCategoriesQuery = {
  getCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListCategoriesQueryVariables = {
  filter?: ModelCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategoriesQuery = {
  listCategories?:  {
    __typename: "ModelCategoriesConnection",
    items:  Array< {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoriesConnection",
    items:  Array< {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetBusinessesCategoriesQueryVariables = {
  id: string,
};

export type GetBusinessesCategoriesQuery = {
  getBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListBusinessesCategoriesQueryVariables = {
  filter?: ModelBusinessesCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinessesCategoriesQuery = {
  listBusinessesCategories?:  {
    __typename: "ModelBusinessesCategoriesConnection",
    items:  Array< {
      __typename: "BusinessesCategories",
      id: string,
      businessesId: string,
      categoriesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncBusinessesCategoriesQueryVariables = {
  filter?: ModelBusinessesCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBusinessesCategoriesQuery = {
  syncBusinessesCategories?:  {
    __typename: "ModelBusinessesCategoriesConnection",
    items:  Array< {
      __typename: "BusinessesCategories",
      id: string,
      businessesId: string,
      categoriesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type CitiesByLocationIdQueryVariables = {
  locationId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCitiesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CitiesByLocationIdQuery = {
  citiesByLocationId?:  {
    __typename: "ModelCitiesConnection",
    items:  Array< {
      __typename: "Cities",
      id: string,
      locationId: string,
      name: string,
      zipcode?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotesByCustomersIDQueryVariables = {
  customersID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByCustomersIDQuery = {
  notesByCustomersID?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      customersID: string,
      businessesID: string,
      text: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type NotesByBusinessesIDQueryVariables = {
  businessesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelNotesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type NotesByBusinessesIDQuery = {
  notesByBusinessesID?:  {
    __typename: "ModelNotesConnection",
    items:  Array< {
      __typename: "Notes",
      id: string,
      customersID: string,
      businessesID: string,
      text: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BusinessesByLocationsIDQueryVariables = {
  locationsID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesByLocationsIDQuery = {
  businessesByLocationsID?:  {
    __typename: "ModelBusinessesConnection",
    items:  Array< {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BusinessesByTypesIDQueryVariables = {
  typesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesByTypesIDQuery = {
  businessesByTypesID?:  {
    __typename: "ModelBusinessesConnection",
    items:  Array< {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BusinessesByCitiesIDQueryVariables = {
  citiesID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesByCitiesIDQuery = {
  businessesByCitiesID?:  {
    __typename: "ModelBusinessesConnection",
    items:  Array< {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BusinessesCategoriesByBusinessesIdQueryVariables = {
  businessesId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessesCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesCategoriesByBusinessesIdQuery = {
  businessesCategoriesByBusinessesId?:  {
    __typename: "ModelBusinessesCategoriesConnection",
    items:  Array< {
      __typename: "BusinessesCategories",
      id: string,
      businessesId: string,
      categoriesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type BusinessesCategoriesByCategoriesIdQueryVariables = {
  categoriesId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessesCategoriesFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BusinessesCategoriesByCategoriesIdQuery = {
  businessesCategoriesByCategoriesId?:  {
    __typename: "ModelBusinessesCategoriesConnection",
    items:  Array< {
      __typename: "BusinessesCategories",
      id: string,
      businessesId: string,
      categoriesId: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnCreateTypesSubscription = {
  onCreateTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnUpdateTypesSubscription = {
  onUpdateTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteTypesSubscriptionVariables = {
  filter?: ModelSubscriptionTypesFilterInput | null,
};

export type OnDeleteTypesSubscription = {
  onDeleteTypes?:  {
    __typename: "Types",
    id: string,
    name: string,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnCreateLocationsSubscription = {
  onCreateLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnUpdateLocationsSubscription = {
  onUpdateLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteLocationsSubscriptionVariables = {
  filter?: ModelSubscriptionLocationsFilterInput | null,
};

export type OnDeleteLocationsSubscription = {
  onDeleteLocations?:  {
    __typename: "Locations",
    id: string,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Cities?:  {
      __typename: "ModelCitiesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    adminName: string,
    country: string,
    image?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCitiesSubscriptionVariables = {
  filter?: ModelSubscriptionCitiesFilterInput | null,
};

export type OnCreateCitiesSubscription = {
  onCreateCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCitiesSubscriptionVariables = {
  filter?: ModelSubscriptionCitiesFilterInput | null,
};

export type OnUpdateCitiesSubscription = {
  onUpdateCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCitiesSubscriptionVariables = {
  filter?: ModelSubscriptionCitiesFilterInput | null,
};

export type OnDeleteCitiesSubscription = {
  onDeleteCities?:  {
    __typename: "Cities",
    id: string,
    locationId: string,
    name: string,
    zipcode?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnCreateNotesSubscription = {
  onCreateNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnUpdateNotesSubscription = {
  onUpdateNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteNotesSubscriptionVariables = {
  filter?: ModelSubscriptionNotesFilterInput | null,
};

export type OnDeleteNotesSubscription = {
  onDeleteNotes?:  {
    __typename: "Notes",
    id: string,
    customersID: string,
    businessesID: string,
    text: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnCreateCustomersSubscription = {
  onCreateCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnUpdateCustomersSubscription = {
  onUpdateCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCustomersSubscriptionVariables = {
  filter?: ModelSubscriptionCustomersFilterInput | null,
};

export type OnDeleteCustomersSubscription = {
  onDeleteCustomers?:  {
    __typename: "Customers",
    id: string,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBusinessesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesFilterInput | null,
};

export type OnCreateBusinessesSubscription = {
  onCreateBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBusinessesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesFilterInput | null,
};

export type OnUpdateBusinessesSubscription = {
  onUpdateBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBusinessesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesFilterInput | null,
};

export type OnDeleteBusinessesSubscription = {
  onDeleteBusinesses?:  {
    __typename: "Businesses",
    id: string,
    Categoriess?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    Notes?:  {
      __typename: "ModelNotesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    locationsID: string,
    address: string,
    dirrection?: string | null,
    iframe?: string | null,
    name: string,
    description?: string | null,
    websiteUrl?: string | null,
    logo?: string | null,
    images?: Array< string | null > | null,
    openHours?:  {
      __typename: "OpenHours",
      openNow: boolean,
    } | null,
    contacts?:  Array< {
      __typename: "Contacts",
      name: string,
      phone?: string | null,
      email?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      twitter?: string | null,
      instagram?: string | null,
      tiktok?: string | null,
    } | null,
    typesID: string,
    citiesID: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionCategoriesFilterInput | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionCategoriesFilterInput | null,
};

export type OnUpdateCategoriesSubscription = {
  onUpdateCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionCategoriesFilterInput | null,
};

export type OnDeleteCategoriesSubscription = {
  onDeleteCategories?:  {
    __typename: "Categories",
    id: string,
    name: string,
    description?: string | null,
    image?: string | null,
    Businesses?:  {
      __typename: "ModelBusinessesCategoriesConnection",
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateBusinessesCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesCategoriesFilterInput | null,
};

export type OnCreateBusinessesCategoriesSubscription = {
  onCreateBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateBusinessesCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesCategoriesFilterInput | null,
};

export type OnUpdateBusinessesCategoriesSubscription = {
  onUpdateBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteBusinessesCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionBusinessesCategoriesFilterInput | null,
};

export type OnDeleteBusinessesCategoriesSubscription = {
  onDeleteBusinessesCategories?:  {
    __typename: "BusinessesCategories",
    id: string,
    businessesId: string,
    categoriesId: string,
    businesses:  {
      __typename: "Businesses",
      id: string,
      locationsID: string,
      address: string,
      dirrection?: string | null,
      iframe?: string | null,
      name: string,
      description?: string | null,
      websiteUrl?: string | null,
      logo?: string | null,
      images?: Array< string | null > | null,
      typesID: string,
      citiesID: string,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    categories:  {
      __typename: "Categories",
      id: string,
      name: string,
      description?: string | null,
      image?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    },
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
