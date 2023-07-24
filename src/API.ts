/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoriesInput = {
  id?: string | null,
  createdAt?: string | null,
  createdBy: string,
  name: string,
  _version?: number | null,
};

export type ModelCategoriesConditionInput = {
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesConditionInput | null > | null,
  or?: Array< ModelCategoriesConditionInput | null > | null,
  not?: ModelCategoriesConditionInput | null,
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

export type Categories = {
  __typename: "Categories",
  id: string,
  createdAt: string,
  createdBy: string,
  name: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoriesInput = {
  id: string,
  createdAt?: string | null,
  createdBy?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type CreateNotesInput = {
  id?: string | null,
  username: string,
  notes: string,
  _version?: number | null,
};

export type ModelNotesConditionInput = {
  username?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelNotesConditionInput | null > | null,
  or?: Array< ModelNotesConditionInput | null > | null,
  not?: ModelNotesConditionInput | null,
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

export type Notes = {
  __typename: "Notes",
  id: string,
  username: string,
  store?: Store | null,
  notes: string,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Store = {
  __typename: "Store",
  id: string,
  username: string,
  type: string,
  name: string,
  description?: string | null,
  clicked?: string | null,
  pricelist?:  Array<Priceitem | null > | null,
  opentimes?:  Array<Opentime > | null,
  contact: Contact,
  location: Location,
  imgs?: Array< string > | null,
  social?: Social | null,
  settings: StoreSettings,
  logo?: string | null,
  categories?: ModelCategoriesConnection | null,
  notes?: ModelNotesConnection | null,
  orders?: ModelOrdersConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Priceitem = {
  __typename: "Priceitem",
  name?: string | null,
  price?: number | null,
  id?: number | null,
};

export type Opentime = {
  __typename: "Opentime",
  day?: string | null,
  start?: string | null,
  end?: string | null,
  id?: string | null,
  isClosed?: boolean | null,
};

export type Contact = {
  __typename: "Contact",
  phone: string,
  email: string,
  website?: string | null,
};

export type Location = {
  __typename: "Location",
  city: string,
  lat?: string | null,
  lng?: string | null,
  country?: string | null,
  iso2?: string | null,
  admin_name: string,
  capital?: string | null,
  population?: string | null,
  population_proper?: string | null,
  driveto?: string | null,
  address?: string | null,
  zip?: string | null,
  iframe?: string | null,
};

export type Social = {
  __typename: "Social",
  facebook?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
};

export type StoreSettings = {
  __typename: "StoreSettings",
  isHidden?: StoreSettingsValidation | null,
  isConfirmed: StoreSettingsValidation,
};

export type StoreSettingsValidation = {
  __typename: "StoreSettingsValidation",
  status: boolean,
  message?: string | null,
  from?: string | null,
  to?: string | null,
};

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<Categories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelNotesConnection = {
  __typename: "ModelNotesConnection",
  items:  Array<Notes | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelOrdersConnection = {
  __typename: "ModelOrdersConnection",
  items:  Array<Orders | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Orders = {
  __typename: "Orders",
  id: string,
  username: string,
  store?: Store | null,
  type: StoreSettingsType,
  status: string,
  from: string,
  to: string,
  price?: number | null,
  message?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export enum StoreSettingsType {
  isPaid = "isPaid",
  isPremium = "isPremium",
  isPromoted = "isPromoted",
}


export type UpdateNotesInput = {
  id: string,
  username?: string | null,
  notes?: string | null,
  _version?: number | null,
};

export type DeleteNotesInput = {
  id: string,
  _version?: number | null,
};

export type CreateOrdersInput = {
  id?: string | null,
  username: string,
  type: StoreSettingsType,
  status: string,
  from: string,
  to: string,
  price?: number | null,
  message?: string | null,
  _version?: number | null,
};

export type ModelOrdersConditionInput = {
  username?: ModelIDInput | null,
  type?: ModelStoreSettingsTypeInput | null,
  status?: ModelStringInput | null,
  from?: ModelStringInput | null,
  to?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelOrdersConditionInput | null > | null,
  or?: Array< ModelOrdersConditionInput | null > | null,
  not?: ModelOrdersConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStoreSettingsTypeInput = {
  eq?: StoreSettingsType | null,
  ne?: StoreSettingsType | null,
};

export type ModelFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateOrdersInput = {
  id: string,
  username?: string | null,
  type?: StoreSettingsType | null,
  status?: string | null,
  from?: string | null,
  to?: string | null,
  price?: number | null,
  message?: string | null,
  _version?: number | null,
};

export type DeleteOrdersInput = {
  id: string,
  _version?: number | null,
};

export type CreateAdsInput = {
  id?: string | null,
  firm: string,
  site?: string | null,
  backgroundColor?: string | null,
  left: SideInput,
  right?: SideInput | null,
  isHidden?: boolean | null,
  _version?: number | null,
};

export type SideInput = {
  image?: string | null,
  title: string,
  button?: SideButtonInput | null,
};

export type SideButtonInput = {
  text: string,
  link: string,
  color?: string | null,
  background?: string | null,
  id?: string | null,
};

export type ModelAdsConditionInput = {
  firm?: ModelStringInput | null,
  site?: ModelStringInput | null,
  backgroundColor?: ModelStringInput | null,
  isHidden?: ModelBooleanInput | null,
  and?: Array< ModelAdsConditionInput | null > | null,
  or?: Array< ModelAdsConditionInput | null > | null,
  not?: ModelAdsConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type Ads = {
  __typename: "Ads",
  id: string,
  firm: string,
  site?: string | null,
  backgroundColor?: string | null,
  left: Side,
  right?: Side | null,
  isHidden?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Side = {
  __typename: "Side",
  image?: string | null,
  title: string,
  button?: SideButton | null,
};

export type SideButton = {
  __typename: "SideButton",
  text: string,
  link: string,
  color?: string | null,
  background?: string | null,
  id?: string | null,
};

export type UpdateAdsInput = {
  id: string,
  firm?: string | null,
  site?: string | null,
  backgroundColor?: string | null,
  left?: SideInput | null,
  right?: SideInput | null,
  isHidden?: boolean | null,
  _version?: number | null,
};

export type DeleteAdsInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username: string,
  email?: string | null,
  role?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelIDInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  username: string,
  email?: string | null,
  stores?: ModelStoreConnection | null,
  role?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type UpdateUserInput = {
  id: string,
  username?: string | null,
  email?: string | null,
  role?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateStoreInput = {
  id?: string | null,
  username: string,
  type: string,
  name: string,
  description?: string | null,
  clicked?: string | null,
  pricelist?: Array< PriceitemInput | null > | null,
  opentimes?: Array< OpentimeInput > | null,
  contact: ContactInput,
  location: LocationInput,
  imgs?: Array< string > | null,
  social?: SocialInput | null,
  settings: StoreSettingsInput,
  logo?: string | null,
  _version?: number | null,
};

export type PriceitemInput = {
  name?: string | null,
  price?: number | null,
  id?: number | null,
};

export type OpentimeInput = {
  day?: string | null,
  start?: string | null,
  end?: string | null,
  id?: string | null,
  isClosed?: boolean | null,
};

export type ContactInput = {
  phone: string,
  email: string,
  website?: string | null,
};

export type LocationInput = {
  city: string,
  lat?: string | null,
  lng?: string | null,
  country?: string | null,
  iso2?: string | null,
  admin_name: string,
  capital?: string | null,
  population?: string | null,
  population_proper?: string | null,
  driveto?: string | null,
  address?: string | null,
  zip?: string | null,
  iframe?: string | null,
};

export type SocialInput = {
  facebook?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
};

export type StoreSettingsInput = {
  isHidden?: StoreSettingsValidationInput | null,
  isConfirmed: StoreSettingsValidationInput,
};

export type StoreSettingsValidationInput = {
  status: boolean,
  message?: string | null,
  from?: string | null,
  to?: string | null,
};

export type ModelStoreConditionInput = {
  username?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  clicked?: ModelStringInput | null,
  imgs?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type UpdateStoreInput = {
  id: string,
  username?: string | null,
  type?: string | null,
  name?: string | null,
  description?: string | null,
  clicked?: string | null,
  pricelist?: Array< PriceitemInput | null > | null,
  opentimes?: Array< OpentimeInput > | null,
  contact?: ContactInput | null,
  location?: LocationInput | null,
  imgs?: Array< string > | null,
  social?: SocialInput | null,
  settings?: StoreSettingsInput | null,
  logo?: string | null,
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type CreateEvaluationInput = {
  id?: string | null,
  evaluationNum: number,
  name: string,
  email: string,
  phone: string,
  description: string,
  category: string,
  type: string,
  images: Array< string | null >,
  isConfirmed?: boolean | null,
  _version?: number | null,
};

export type ModelEvaluationConditionInput = {
  evaluationNum?: ModelIntInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  type?: ModelStringInput | null,
  images?: ModelStringInput | null,
  isConfirmed?: ModelBooleanInput | null,
  and?: Array< ModelEvaluationConditionInput | null > | null,
  or?: Array< ModelEvaluationConditionInput | null > | null,
  not?: ModelEvaluationConditionInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Evaluation = {
  __typename: "Evaluation",
  id: string,
  evaluationNum: number,
  name: string,
  email: string,
  phone: string,
  description: string,
  category: string,
  type: string,
  images: Array< string | null >,
  isConfirmed?: boolean | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateEvaluationInput = {
  id: string,
  evaluationNum?: number | null,
  name?: string | null,
  email?: string | null,
  phone?: string | null,
  description?: string | null,
  category?: string | null,
  type?: string | null,
  images?: Array< string | null > | null,
  isConfirmed?: boolean | null,
  _version?: number | null,
};

export type DeleteEvaluationInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelNotesFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelIDInput | null,
  notes?: ModelStringInput | null,
  and?: Array< ModelNotesFilterInput | null > | null,
  or?: Array< ModelNotesFilterInput | null > | null,
  not?: ModelNotesFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelOrdersFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelIDInput | null,
  type?: ModelStoreSettingsTypeInput | null,
  status?: ModelStringInput | null,
  from?: ModelStringInput | null,
  to?: ModelStringInput | null,
  price?: ModelFloatInput | null,
  message?: ModelStringInput | null,
  and?: Array< ModelOrdersFilterInput | null > | null,
  or?: Array< ModelOrdersFilterInput | null > | null,
  not?: ModelOrdersFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAdsFilterInput = {
  id?: ModelIDInput | null,
  firm?: ModelStringInput | null,
  site?: ModelStringInput | null,
  backgroundColor?: ModelStringInput | null,
  isHidden?: ModelBooleanInput | null,
  and?: Array< ModelAdsFilterInput | null > | null,
  or?: Array< ModelAdsFilterInput | null > | null,
  not?: ModelAdsFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelAdsConnection = {
  __typename: "ModelAdsConnection",
  items:  Array<Ads | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelIDInput | null,
  email?: ModelStringInput | null,
  role?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelIDInput | null,
  type?: ModelStringInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  clicked?: ModelStringInput | null,
  imgs?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelEvaluationFilterInput = {
  id?: ModelIDInput | null,
  evaluationNum?: ModelIntInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  phone?: ModelStringInput | null,
  description?: ModelStringInput | null,
  category?: ModelStringInput | null,
  type?: ModelStringInput | null,
  images?: ModelStringInput | null,
  isConfirmed?: ModelBooleanInput | null,
  and?: Array< ModelEvaluationFilterInput | null > | null,
  or?: Array< ModelEvaluationFilterInput | null > | null,
  not?: ModelEvaluationFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelEvaluationConnection = {
  __typename: "ModelEvaluationConnection",
  items:  Array<Evaluation | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  createdBy?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
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

export type ModelSubscriptionNotesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  or?: Array< ModelSubscriptionNotesFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionOrdersFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  from?: ModelSubscriptionStringInput | null,
  to?: ModelSubscriptionStringInput | null,
  price?: ModelSubscriptionFloatInput | null,
  message?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
  or?: Array< ModelSubscriptionOrdersFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionFloatInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionAdsFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  firm?: ModelSubscriptionStringInput | null,
  site?: ModelSubscriptionStringInput | null,
  backgroundColor?: ModelSubscriptionStringInput | null,
  isHidden?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionAdsFilterInput | null > | null,
  or?: Array< ModelSubscriptionAdsFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  username?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  clicked?: ModelSubscriptionStringInput | null,
  imgs?: ModelSubscriptionStringInput | null,
  logo?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionEvaluationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  evaluationNum?: ModelSubscriptionIntInput | null,
  name?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  phone?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  category?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  images?: ModelSubscriptionStringInput | null,
  isConfirmed?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionEvaluationFilterInput | null > | null,
  or?: Array< ModelSubscriptionEvaluationFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  in?: Array< number | null > | null,
  notIn?: Array< number | null > | null,
};

export type CreateCategoriesMutationVariables = {
  input: CreateCategoriesInput,
  condition?: ModelCategoriesConditionInput | null,
};

export type CreateCategoriesMutation = {
  createCategories?:  {
    __typename: "Categories",
    id: string,
    createdAt: string,
    createdBy: string,
    name: string,
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
    createdAt: string,
    createdBy: string,
    name: string,
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
    createdAt: string,
    createdBy: string,
    name: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateOrdersMutationVariables = {
  input: CreateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type CreateOrdersMutation = {
  createOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateOrdersMutationVariables = {
  input: UpdateOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type UpdateOrdersMutation = {
  updateOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteOrdersMutationVariables = {
  input: DeleteOrdersInput,
  condition?: ModelOrdersConditionInput | null,
};

export type DeleteOrdersMutation = {
  deleteOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateAdsMutationVariables = {
  input: CreateAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type CreateAdsMutation = {
  createAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAdsMutationVariables = {
  input: UpdateAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type UpdateAdsMutation = {
  updateAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAdsMutationVariables = {
  input: DeleteAdsInput,
  condition?: ModelAdsConditionInput | null,
};

export type DeleteAdsMutation = {
  deleteAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type UpdateStoreMutationVariables = {
  input: UpdateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type UpdateStoreMutation = {
  updateStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type DeleteStoreMutationVariables = {
  input: DeleteStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type DeleteStoreMutation = {
  deleteStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type CreateEvaluationMutationVariables = {
  input: CreateEvaluationInput,
  condition?: ModelEvaluationConditionInput | null,
};

export type CreateEvaluationMutation = {
  createEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateEvaluationMutationVariables = {
  input: UpdateEvaluationInput,
  condition?: ModelEvaluationConditionInput | null,
};

export type UpdateEvaluationMutation = {
  updateEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteEvaluationMutationVariables = {
  input: DeleteEvaluationInput,
  condition?: ModelEvaluationConditionInput | null,
};

export type DeleteEvaluationMutation = {
  deleteEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetCategoriesQueryVariables = {
  id: string,
};

export type GetCategoriesQuery = {
  getCategories?:  {
    __typename: "Categories",
    id: string,
    createdAt: string,
    createdBy: string,
    name: string,
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
      createdAt: string,
      createdBy: string,
      name: string,
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
      createdAt: string,
      createdBy: string,
      name: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
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
      username: string,
      store?:  {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      notes: string,
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
      username: string,
      store?:  {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      notes: string,
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

export type GetOrdersQueryVariables = {
  id: string,
};

export type GetOrdersQuery = {
  getOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      username: string,
      store?:  {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      type: StoreSettingsType,
      status: string,
      from: string,
      to: string,
      price?: number | null,
      message?: string | null,
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

export type SyncOrdersQueryVariables = {
  filter?: ModelOrdersFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncOrdersQuery = {
  syncOrders?:  {
    __typename: "ModelOrdersConnection",
    items:  Array< {
      __typename: "Orders",
      id: string,
      username: string,
      store?:  {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      type: StoreSettingsType,
      status: string,
      from: string,
      to: string,
      price?: number | null,
      message?: string | null,
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

export type GetAdsQueryVariables = {
  id: string,
};

export type GetAdsQuery = {
  getAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAdsQueryVariables = {
  filter?: ModelAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAdsQuery = {
  listAds?:  {
    __typename: "ModelAdsConnection",
    items:  Array< {
      __typename: "Ads",
      id: string,
      firm: string,
      site?: string | null,
      backgroundColor?: string | null,
      left:  {
        __typename: "Side",
        image?: string | null,
        title: string,
      },
      right?:  {
        __typename: "Side",
        image?: string | null,
        title: string,
      } | null,
      isHidden?: boolean | null,
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

export type SyncAdsQueryVariables = {
  filter?: ModelAdsFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAdsQuery = {
  syncAds?:  {
    __typename: "ModelAdsConnection",
    items:  Array< {
      __typename: "Ads",
      id: string,
      firm: string,
      site?: string | null,
      backgroundColor?: string | null,
      left:  {
        __typename: "Side",
        image?: string | null,
        title: string,
      },
      right?:  {
        __typename: "Side",
        image?: string | null,
        title: string,
      } | null,
      isHidden?: boolean | null,
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

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      stores?:  {
        __typename: "ModelStoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      role?: string | null,
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

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      username: string,
      email?: string | null,
      stores?:  {
        __typename: "ModelStoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      role?: string | null,
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

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type ListStoresQueryVariables = {
  id?: string | null,
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type SyncStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncStoresQuery = {
  syncStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
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

export type GetEvaluationQueryVariables = {
  id: string,
};

export type GetEvaluationQuery = {
  getEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListEvaluationsQueryVariables = {
  filter?: ModelEvaluationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEvaluationsQuery = {
  listEvaluations?:  {
    __typename: "ModelEvaluationConnection",
    items:  Array< {
      __typename: "Evaluation",
      id: string,
      evaluationNum: number,
      name: string,
      email: string,
      phone: string,
      description: string,
      category: string,
      type: string,
      images: Array< string | null >,
      isConfirmed?: boolean | null,
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

export type SyncEvaluationsQueryVariables = {
  filter?: ModelEvaluationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncEvaluationsQuery = {
  syncEvaluations?:  {
    __typename: "ModelEvaluationConnection",
    items:  Array< {
      __typename: "Evaluation",
      id: string,
      evaluationNum: number,
      name: string,
      email: string,
      phone: string,
      description: string,
      category: string,
      type: string,
      images: Array< string | null >,
      isConfirmed?: boolean | null,
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

export type OnCreateCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionCategoriesFilterInput | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories?:  {
    __typename: "Categories",
    id: string,
    createdAt: string,
    createdBy: string,
    name: string,
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
    createdAt: string,
    createdBy: string,
    name: string,
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
    createdAt: string,
    createdBy: string,
    name: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
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
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    notes: string,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnCreateOrdersSubscription = {
  onCreateOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnUpdateOrdersSubscription = {
  onUpdateOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteOrdersSubscriptionVariables = {
  filter?: ModelSubscriptionOrdersFilterInput | null,
};

export type OnDeleteOrdersSubscription = {
  onDeleteOrders?:  {
    __typename: "Orders",
    id: string,
    username: string,
    store?:  {
      __typename: "Store",
      id: string,
      username: string,
      type: string,
      name: string,
      description?: string | null,
      clicked?: string | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } > | null,
      contact:  {
        __typename: "Contact",
        phone: string,
        email: string,
        website?: string | null,
      },
      location:  {
        __typename: "Location",
        city: string,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name: string,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      },
      imgs?: Array< string > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      settings:  {
        __typename: "StoreSettings",
      },
      logo?: string | null,
      categories?:  {
        __typename: "ModelCategoriesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      notes?:  {
        __typename: "ModelNotesConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      orders?:  {
        __typename: "ModelOrdersConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    type: StoreSettingsType,
    status: string,
    from: string,
    to: string,
    price?: number | null,
    message?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateAdsSubscriptionVariables = {
  filter?: ModelSubscriptionAdsFilterInput | null,
};

export type OnCreateAdsSubscription = {
  onCreateAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAdsSubscriptionVariables = {
  filter?: ModelSubscriptionAdsFilterInput | null,
};

export type OnUpdateAdsSubscription = {
  onUpdateAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAdsSubscriptionVariables = {
  filter?: ModelSubscriptionAdsFilterInput | null,
};

export type OnDeleteAdsSubscription = {
  onDeleteAds?:  {
    __typename: "Ads",
    id: string,
    firm: string,
    site?: string | null,
    backgroundColor?: string | null,
    left:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    },
    right?:  {
      __typename: "Side",
      image?: string | null,
      title: string,
      button?:  {
        __typename: "SideButton",
        text: string,
        link: string,
        color?: string | null,
        background?: string | null,
        id?: string | null,
      } | null,
    } | null,
    isHidden?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username: string,
    email?: string | null,
    stores?:  {
      __typename: "ModelStoreConnection",
      items:  Array< {
        __typename: "Store",
        id: string,
        username: string,
        type: string,
        name: string,
        description?: string | null,
        clicked?: string | null,
        imgs?: Array< string > | null,
        logo?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    role?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    username: string,
    type: string,
    name: string,
    description?: string | null,
    clicked?: string | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } > | null,
    contact:  {
      __typename: "Contact",
      phone: string,
      email: string,
      website?: string | null,
    },
    location:  {
      __typename: "Location",
      city: string,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name: string,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    },
    imgs?: Array< string > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    settings:  {
      __typename: "StoreSettings",
      isHidden?:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      } | null,
      isConfirmed:  {
        __typename: "StoreSettingsValidation",
        status: boolean,
        message?: string | null,
        from?: string | null,
        to?: string | null,
      },
    },
    logo?: string | null,
    categories?:  {
      __typename: "ModelCategoriesConnection",
      items:  Array< {
        __typename: "Categories",
        id: string,
        createdAt: string,
        createdBy: string,
        name: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    notes?:  {
      __typename: "ModelNotesConnection",
      items:  Array< {
        __typename: "Notes",
        id: string,
        username: string,
        notes: string,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    orders?:  {
      __typename: "ModelOrdersConnection",
      items:  Array< {
        __typename: "Orders",
        id: string,
        username: string,
        type: StoreSettingsType,
        status: string,
        from: string,
        to: string,
        price?: number | null,
        message?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null >,
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

export type OnCreateEvaluationSubscriptionVariables = {
  filter?: ModelSubscriptionEvaluationFilterInput | null,
};

export type OnCreateEvaluationSubscription = {
  onCreateEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateEvaluationSubscriptionVariables = {
  filter?: ModelSubscriptionEvaluationFilterInput | null,
};

export type OnUpdateEvaluationSubscription = {
  onUpdateEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteEvaluationSubscriptionVariables = {
  filter?: ModelSubscriptionEvaluationFilterInput | null,
};

export type OnDeleteEvaluationSubscription = {
  onDeleteEvaluation?:  {
    __typename: "Evaluation",
    id: string,
    evaluationNum: number,
    name: string,
    email: string,
    phone: string,
    description: string,
    category: string,
    type: string,
    images: Array< string | null >,
    isConfirmed?: boolean | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
