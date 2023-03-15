/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAreasInput = {
  id?: string | null,
  name?: string | null,
  cities?: Array< CityInput | null > | null,
  _version?: number | null,
};

export type CityInput = {
  id?: string | null,
  name?: string | null,
  area?: string | null,
};

export type ModelAreasConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelAreasConditionInput | null > | null,
  or?: Array< ModelAreasConditionInput | null > | null,
  not?: ModelAreasConditionInput | null,
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

export type Areas = {
  __typename: "Areas",
  id: string,
  name?: string | null,
  cities?:  Array<City | null > | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type City = {
  __typename: "City",
  id?: string | null,
  name?: string | null,
  area?: string | null,
};

export type UpdateAreasInput = {
  id: string,
  name?: string | null,
  cities?: Array< CityInput | null > | null,
  _version?: number | null,
};

export type DeleteAreasInput = {
  id: string,
  _version?: number | null,
};

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

export type CreateStoreInput = {
  id?: string | null,
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
};

export type ContactInput = {
  phone?: string | null,
  email?: string | null,
  website?: string | null,
};

export type LocationInput = {
  address?: string | null,
  city?: string | null,
  zip?: string | null,
  area?: string | null,
  country?: string | null,
  driveto?: string | null,
};

export type ImageInput = {
  key?: string | null,
  id?: string | null,
};

export type ModelStoreConditionInput = {
  isConfirmed?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  services?: ModelIntInput | null,
  clicked?: ModelStringInput | null,
  embedmap?: ModelStringInput | null,
  and?: Array< ModelStoreConditionInput | null > | null,
  or?: Array< ModelStoreConditionInput | null > | null,
  not?: ModelStoreConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
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

export type Store = {
  __typename: "Store",
  id: string,
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
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  owner?: string | null,
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
};

export type Contact = {
  __typename: "Contact",
  phone?: string | null,
  email?: string | null,
  website?: string | null,
};

export type Location = {
  __typename: "Location",
  address?: string | null,
  city?: string | null,
  zip?: string | null,
  area?: string | null,
  country?: string | null,
  driveto?: string | null,
};

export type Image = {
  __typename: "Image",
  key?: string | null,
  id?: string | null,
};

export type UpdateStoreInput = {
  id: string,
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
  _version?: number | null,
};

export type DeleteStoreInput = {
  id: string,
  _version?: number | null,
};

export type ModelAreasFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelAreasFilterInput | null > | null,
  or?: Array< ModelAreasFilterInput | null > | null,
  not?: ModelAreasFilterInput | null,
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

export type ModelAreasConnection = {
  __typename: "ModelAreasConnection",
  items:  Array<Areas | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelCategoriesFilterInput = {
  id?: ModelIDInput | null,
  createdBy?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelCategoriesFilterInput | null > | null,
  or?: Array< ModelCategoriesFilterInput | null > | null,
  not?: ModelCategoriesFilterInput | null,
};

export type ModelCategoriesConnection = {
  __typename: "ModelCategoriesConnection",
  items:  Array<Categories | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelStoreFilterInput = {
  id?: ModelIDInput | null,
  isConfirmed?: ModelBooleanInput | null,
  name?: ModelStringInput | null,
  description?: ModelStringInput | null,
  services?: ModelIntInput | null,
  clicked?: ModelStringInput | null,
  embedmap?: ModelStringInput | null,
  and?: Array< ModelStoreFilterInput | null > | null,
  or?: Array< ModelStoreFilterInput | null > | null,
  not?: ModelStoreFilterInput | null,
};

export type ModelStoreConnection = {
  __typename: "ModelStoreConnection",
  items:  Array<Store | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionAreasFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionAreasFilterInput | null > | null,
  or?: Array< ModelSubscriptionAreasFilterInput | null > | null,
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

export type ModelSubscriptionCategoriesFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  createdBy?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
  or?: Array< ModelSubscriptionCategoriesFilterInput | null > | null,
};

export type ModelSubscriptionStoreFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  isConfirmed?: ModelSubscriptionBooleanInput | null,
  name?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  services?: ModelSubscriptionIntInput | null,
  clicked?: ModelSubscriptionStringInput | null,
  embedmap?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStoreFilterInput | null > | null,
  or?: Array< ModelSubscriptionStoreFilterInput | null > | null,
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

export type CreateAreasMutationVariables = {
  input: CreateAreasInput,
  condition?: ModelAreasConditionInput | null,
};

export type CreateAreasMutation = {
  createAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateAreasMutationVariables = {
  input: UpdateAreasInput,
  condition?: ModelAreasConditionInput | null,
};

export type UpdateAreasMutation = {
  updateAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteAreasMutationVariables = {
  input: DeleteAreasInput,
  condition?: ModelAreasConditionInput | null,
};

export type DeleteAreasMutation = {
  deleteAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
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

export type CreateStoreMutationVariables = {
  input: CreateStoreInput,
  condition?: ModelStoreConditionInput | null,
};

export type CreateStoreMutation = {
  createStore?:  {
    __typename: "Store",
    id: string,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type GetAreasQueryVariables = {
  id: string,
};

export type GetAreasQuery = {
  getAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListAreasQueryVariables = {
  filter?: ModelAreasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAreasQuery = {
  listAreas?:  {
    __typename: "ModelAreasConnection",
    items:  Array< {
      __typename: "Areas",
      id: string,
      name?: string | null,
      cities?:  Array< {
        __typename: "City",
        id?: string | null,
        name?: string | null,
        area?: string | null,
      } | null > | null,
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

export type SyncAreasQueryVariables = {
  filter?: ModelAreasFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncAreasQuery = {
  syncAreas?:  {
    __typename: "ModelAreasConnection",
    items:  Array< {
      __typename: "Areas",
      id: string,
      name?: string | null,
      cities?:  Array< {
        __typename: "City",
        id?: string | null,
        name?: string | null,
        area?: string | null,
      } | null > | null,
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

export type GetStoreQueryVariables = {
  id: string,
};

export type GetStoreQuery = {
  getStore?:  {
    __typename: "Store",
    id: string,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
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
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        address?: string | null,
        city?: string | null,
        zip?: string | null,
        area?: string | null,
        country?: string | null,
        driveto?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
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
      } | null > | null,
      contact?:  {
        __typename: "Contact",
        phone?: string | null,
        email?: string | null,
        website?: string | null,
      } | null,
      location?:  {
        __typename: "Location",
        address?: string | null,
        city?: string | null,
        zip?: string | null,
        area?: string | null,
        country?: string | null,
        driveto?: string | null,
      } | null,
      imgs?:  Array< {
        __typename: "Image",
        key?: string | null,
        id?: string | null,
      } | null > | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      owner?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateAreasSubscriptionVariables = {
  filter?: ModelSubscriptionAreasFilterInput | null,
};

export type OnCreateAreasSubscription = {
  onCreateAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateAreasSubscriptionVariables = {
  filter?: ModelSubscriptionAreasFilterInput | null,
};

export type OnUpdateAreasSubscription = {
  onUpdateAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteAreasSubscriptionVariables = {
  filter?: ModelSubscriptionAreasFilterInput | null,
};

export type OnDeleteAreasSubscription = {
  onDeleteAreas?:  {
    __typename: "Areas",
    id: string,
    name?: string | null,
    cities?:  Array< {
      __typename: "City",
      id?: string | null,
      name?: string | null,
      area?: string | null,
    } | null > | null,
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

export type OnCreateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
  owner?: string | null,
};

export type OnCreateStoreSubscription = {
  onCreateStore?:  {
    __typename: "Store",
    id: string,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnUpdateStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStoreSubscription = {
  onUpdateStore?:  {
    __typename: "Store",
    id: string,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};

export type OnDeleteStoreSubscriptionVariables = {
  filter?: ModelSubscriptionStoreFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStoreSubscription = {
  onDeleteStore?:  {
    __typename: "Store",
    id: string,
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
    } | null > | null,
    contact?:  {
      __typename: "Contact",
      phone?: string | null,
      email?: string | null,
      website?: string | null,
    } | null,
    location?:  {
      __typename: "Location",
      address?: string | null,
      city?: string | null,
      zip?: string | null,
      area?: string | null,
      country?: string | null,
      driveto?: string | null,
    } | null,
    imgs?:  Array< {
      __typename: "Image",
      key?: string | null,
      id?: string | null,
    } | null > | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    owner?: string | null,
  } | null,
};
