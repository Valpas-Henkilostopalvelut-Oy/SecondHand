/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoriesInput = {
  id?: string | null,
  createdBy?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type ModelCategoriesConditionInput = {
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
  createdBy?: string | null,
  name?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateCategoriesInput = {
  id: string,
  createdBy?: string | null,
  name?: string | null,
  _version?: number | null,
};

export type DeleteCategoriesInput = {
  id: string,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  username?: string | null,
  email?: string | null,
  role?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  username?: ModelStringInput | null,
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
  username?: string | null,
  email?: string | null,
  stores?:  Array<Store | null > | null,
  role?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Store = {
  __typename: "Store",
  id: string,
  type?: string | null,
  username?: string | null,
  isConfirmed?: boolean | null,
  name?: string | null,
  description?: string | null,
  categories?:  Array<Category | null > | null,
  services?: Array< number | null > | null,
  clicked?: string | null,
  sellplaces?: Sellplaces | null,
  pricelist?:  Array<Priceitem | null > | null,
  embedmap?: string | null,
  opentimes?:  Array<Opentime | null > | null,
  contact?: Contact | null,
  location?: Location | null,
  imgs?:  Array<Image | null > | null,
  social?: Social | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type Category = {
  __typename: "Category",
  id?: string | null,
  name?: string | null,
};

export type Sellplaces = {
  __typename: "Sellplaces",
  all?: number | null,
  free?: number | null,
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
  phone?: string | null,
  email?: string | null,
  website?: string | null,
};

export type Location = {
  __typename: "Location",
  city?: string | null,
  lat?: string | null,
  lng?: string | null,
  country?: string | null,
  iso2?: string | null,
  admin_name?: string | null,
  capital?: string | null,
  population?: string | null,
  population_proper?: string | null,
  driveto?: string | null,
  address?: string | null,
  zip?: string | null,
  iframe?: string | null,
};

export type Image = {
  __typename: "Image",
  key?: string | null,
  id?: string | null,
};

export type Social = {
  __typename: "Social",
  facebook?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
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
  type?: string | null,
  username?: string | null,
  isConfirmed?: boolean | null,
  name?: string | null,
  description?: string | null,
  categories?: Array< CategoryInput | null > | null,
  services?: Array< number | null > | null,
  clicked?: string | null,
  sellplaces?: SellplacesInput | null,
  pricelist?: Array< PriceitemInput | null > | null,
  embedmap?: string | null,
  opentimes?: Array< OpentimeInput | null > | null,
  contact?: ContactInput | null,
  location?: LocationInput | null,
  imgs?: Array< ImageInput | null > | null,
  social?: SocialInput | null,
  _version?: number | null,
};

export type CategoryInput = {
  id?: string | null,
  name?: string | null,
};

export type SellplacesInput = {
  all?: number | null,
  free?: number | null,
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
  phone?: string | null,
  email?: string | null,
  website?: string | null,
};

export type LocationInput = {
  city?: string | null,
  lat?: string | null,
  lng?: string | null,
  country?: string | null,
  iso2?: string | null,
  admin_name?: string | null,
  capital?: string | null,
  population?: string | null,
  population_proper?: string | null,
  driveto?: string | null,
  address?: string | null,
  zip?: string | null,
  iframe?: string | null,
};

export type ImageInput = {
  key?: string | null,
  id?: string | null,
};

export type SocialInput = {
  facebook?: string | null,
  instagram?: string | null,
  twitter?: string | null,
  youtube?: string | null,
  tiktok?: string | null,
};

export type ModelStoreConditionInput = {
  type?: ModelStringInput | null,
  username?: ModelStringInput | null,
  isConfirmed?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  services?: ModelIntInput | null,
  clicked?: ModelStringInput | null,
  embedmap?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
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

export type UpdateStoreInput = {
  id: string,
  type?: string | null,
  username?: string | null,
  isConfirmed?: boolean | null,
  name?: string | null,
  description?: string | null,
  categories?: Array< CategoryInput | null > | null,
  services?: Array< number | null > | null,
  clicked?: string | null,
  sellplaces?: SellplacesInput | null,
  pricelist?: Array< PriceitemInput | null > | null,
  embedmap?: string | null,
  opentimes?: Array< OpentimeInput | null > | null,
  contact?: ContactInput | null,
  location?: LocationInput | null,
  imgs?: Array< ImageInput | null > | null,
  social?: SocialInput | null,
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
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

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<Categories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  username?: ModelStringInput | null,
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
  type?: ModelStringInput | null,
  username?: ModelStringInput | null,
  isConfirmed?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  services?: ModelIntInput | null,
  clicked?: ModelStringInput | null,
  embedmap?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
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

export type ModelSubscriptionUserFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  email?: ModelSubscriptionStringInput | null,
  role?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionUserFilterInput | null > | null,
  or?: Array< ModelSubscriptionUserFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  type?: ModelSubscriptionStringInput | null,
  isConfirmed?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  services?: ModelSubscriptionIntInput | null,
  clicked?: ModelSubscriptionStringInput | null,
  embedmap?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
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
    createdBy?: string | null,
    name?: string | null,
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
    createdBy?: string | null,
    name?: string | null,
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
    createdBy?: string | null,
    name?: string | null,
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
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
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
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
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
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
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
    createdBy?: string | null,
    name?: string | null,
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
      createdBy?: string | null,
      name?: string | null,
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
      createdBy?: string | null,
      name?: string | null,
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
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
      username?: string | null,
      email?: string | null,
      stores?:  Array< {
        __typename: "Store",
        id: string,
        type?: string | null,
        username?: string | null,
        isConfirmed?: boolean | null,
        name?: string | null,
        description?: string | null,
        services?: Array< number | null > | null,
        clicked?: string | null,
        embedmap?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
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
      username?: string | null,
      email?: string | null,
      stores?:  Array< {
        __typename: "Store",
        id: string,
        type?: string | null,
        username?: string | null,
        isConfirmed?: boolean | null,
        name?: string | null,
        description?: string | null,
        services?: Array< number | null > | null,
        clicked?: string | null,
        embedmap?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null > | null,
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
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListStoresQueryVariables = {
  filter?: ModelStoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStoresQuery = {
  listStores?:  {
    __typename: "ModelStoreConnection",
    items:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
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
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
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

export type OnCreateCategoriesSubscriptionVariables = {
  filter?: ModelSubscriptionCategoriesFilterInput | null,
};

export type OnCreateCategoriesSubscription = {
  onCreateCategories?:  {
    __typename: "Categories",
    id: string,
    createdBy?: string | null,
    name?: string | null,
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
    createdBy?: string | null,
    name?: string | null,
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
    createdBy?: string | null,
    name?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscriptionVariables = {
  filter?: ModelSubscriptionUserFilterInput | null,
  username?: string | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
  username?: string | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
  username?: string | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    username?: string | null,
    email?: string | null,
    stores?:  Array< {
      __typename: "Store",
      id: string,
      type?: string | null,
      username?: string | null,
      isConfirmed?: boolean | null,
      name?: string | null,
      description?: string | null,
      categories?:  Array< {
        __typename: "Category",
        id?: string | null,
        name?: string | null,
      } | null > | null,
      services?: Array< number | null > | null,
      clicked?: string | null,
      sellplaces?:  {
        __typename: "Sellplaces",
        all?: number | null,
        free?: number | null,
      } | null,
      pricelist?:  Array< {
        __typename: "Priceitem",
        name?: string | null,
        price?: number | null,
        id?: number | null,
      } | null > | null,
      embedmap?: string | null,
      opentimes?:  Array< {
        __typename: "Opentime",
        day?: string | null,
        start?: string | null,
        end?: string | null,
        id?: string | null,
        isClosed?: boolean | null,
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        city?: string | null,
        lat?: string | null,
        lng?: string | null,
        country?: string | null,
        iso2?: string | null,
        admin_name?: string | null,
        capital?: string | null,
        population?: string | null,
        population_proper?: string | null,
        driveto?: string | null,
        address?: string | null,
        zip?: string | null,
        iframe?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      social?:  {
        __typename: "Social",
        facebook?: string | null,
        instagram?: string | null,
        twitter?: string | null,
        youtube?: string | null,
        tiktok?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null > | null,
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
  username?: string | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
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
  username?: string | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
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
  username?: string | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
    type?: string | null,
    username?: string | null,
    isConfirmed?: boolean | null,
    name?: string | null,
    description?: string | null,
    categories?:  Array< {
      __typename: "Category",
      id?: string | null,
      name?: string | null,
    } | null > | null,
    services?: Array< number | null > | null,
    clicked?: string | null,
    sellplaces?:  {
      __typename: "Sellplaces",
      all?: number | null,
      free?: number | null,
    } | null,
    pricelist?:  Array< {
      __typename: "Priceitem",
      name?: string | null,
      price?: number | null,
      id?: number | null,
    } | null > | null,
    embedmap?: string | null,
    opentimes?:  Array< {
      __typename: "Opentime",
      day?: string | null,
      start?: string | null,
      end?: string | null,
      id?: string | null,
      isClosed?: boolean | null,
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      city?: string | null,
      lat?: string | null,
      lng?: string | null,
      country?: string | null,
      iso2?: string | null,
      admin_name?: string | null,
      capital?: string | null,
      population?: string | null,
      population_proper?: string | null,
      driveto?: string | null,
      address?: string | null,
      zip?: string | null,
      iframe?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    social?:  {
      __typename: "Social",
      facebook?: string | null,
      instagram?: string | null,
      twitter?: string | null,
      youtube?: string | null,
      tiktok?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
