/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getTypes = /* GraphQL */ `query GetTypes($id: ID!) {
  getTypes(id: $id) {
    id
    name
    image
    Businesses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTypesQueryVariables, APITypes.GetTypesQuery>;
export const listTypes = /* GraphQL */ `query ListTypes(
  $filter: ModelTypesFilterInput
  $limit: Int
  $nextToken: String
) {
  listTypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTypesQueryVariables, APITypes.ListTypesQuery>;
export const syncTypes = /* GraphQL */ `query SyncTypes(
  $filter: ModelTypesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncTypes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncTypesQueryVariables, APITypes.SyncTypesQuery>;
export const getLocations = /* GraphQL */ `query GetLocations($id: ID!) {
  getLocations(id: $id) {
    id
    Businesses {
      nextToken
      startedAt
      __typename
    }
    Cities {
      nextToken
      startedAt
      __typename
    }
    adminName
    country
    image
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetLocationsQueryVariables,
  APITypes.GetLocationsQuery
>;
export const listLocations = /* GraphQL */ `query ListLocations(
  $filter: ModelLocationsFilterInput
  $limit: Int
  $nextToken: String
) {
  listLocations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      adminName
      country
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListLocationsQueryVariables,
  APITypes.ListLocationsQuery
>;
export const syncLocations = /* GraphQL */ `query SyncLocations(
  $filter: ModelLocationsFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncLocations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      adminName
      country
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncLocationsQueryVariables,
  APITypes.SyncLocationsQuery
>;
export const getCities = /* GraphQL */ `query GetCities($id: ID!) {
  getCities(id: $id) {
    id
    locationId
    name
    zipcode
    Businesses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCitiesQueryVariables, APITypes.GetCitiesQuery>;
export const listCities = /* GraphQL */ `query ListCities(
  $filter: ModelCitiesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      locationId
      name
      zipcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCitiesQueryVariables,
  APITypes.ListCitiesQuery
>;
export const syncCities = /* GraphQL */ `query SyncCities(
  $filter: ModelCitiesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCities(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      locationId
      name
      zipcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCitiesQueryVariables,
  APITypes.SyncCitiesQuery
>;
export const citiesByLocationId = /* GraphQL */ `query CitiesByLocationId(
  $locationId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCitiesFilterInput
  $limit: Int
  $nextToken: String
) {
  citiesByLocationId(
    locationId: $locationId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      locationId
      name
      zipcode
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CitiesByLocationIdQueryVariables,
  APITypes.CitiesByLocationIdQuery
>;
export const getNotes = /* GraphQL */ `query GetNotes($id: ID!) {
  getNotes(id: $id) {
    id
    customersID
    businessesID
    text
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetNotesQueryVariables, APITypes.GetNotesQuery>;
export const listNotes = /* GraphQL */ `query ListNotes(
  $filter: ModelNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      customersID
      businessesID
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.ListNotesQueryVariables, APITypes.ListNotesQuery>;
export const syncNotes = /* GraphQL */ `query SyncNotes(
  $filter: ModelNotesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncNotes(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      customersID
      businessesID
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.SyncNotesQueryVariables, APITypes.SyncNotesQuery>;
export const notesByCustomersID = /* GraphQL */ `query NotesByCustomersID(
  $customersID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  notesByCustomersID(
    customersID: $customersID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      customersID
      businessesID
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotesByCustomersIDQueryVariables,
  APITypes.NotesByCustomersIDQuery
>;
export const notesByBusinessesID = /* GraphQL */ `query NotesByBusinessesID(
  $businessesID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelNotesFilterInput
  $limit: Int
  $nextToken: String
) {
  notesByBusinessesID(
    businessesID: $businessesID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      customersID
      businessesID
      text
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.NotesByBusinessesIDQueryVariables,
  APITypes.NotesByBusinessesIDQuery
>;
export const getCustomers = /* GraphQL */ `query GetCustomers($id: ID!) {
  getCustomers(id: $id) {
    id
    Notes {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCustomersQueryVariables,
  APITypes.GetCustomersQuery
>;
export const listCustomers = /* GraphQL */ `query ListCustomers(
  $filter: ModelCustomersFilterInput
  $limit: Int
  $nextToken: String
) {
  listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCustomersQueryVariables,
  APITypes.ListCustomersQuery
>;
export const syncCustomers = /* GraphQL */ `query SyncCustomers(
  $filter: ModelCustomersFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCustomers(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCustomersQueryVariables,
  APITypes.SyncCustomersQuery
>;
export const getBusinesses = /* GraphQL */ `query GetBusinesses($id: ID!) {
  getBusinesses(id: $id) {
    id
    Categoriess {
      nextToken
      startedAt
      __typename
    }
    Notes {
      nextToken
      startedAt
      __typename
    }
    locationsID
    address
    dirrection
    iframe
    name
    description
    cardDescription
    websiteUrl
    logo
    images
    openHours {
      openNow
      __typename
    }
    contacts {
      name
      phone
      email
      __typename
    }
    social {
      facebook
      twitter
      instagram
      tiktok
      __typename
    }
    typesID
    citiesID
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessesQueryVariables,
  APITypes.GetBusinessesQuery
>;
export const listBusinesses = /* GraphQL */ `query ListBusinesses(
  $filter: ModelBusinessesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinesses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesQueryVariables,
  APITypes.ListBusinessesQuery
>;
export const syncBusinesses = /* GraphQL */ `query SyncBusinesses(
  $filter: ModelBusinessesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBusinesses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBusinessesQueryVariables,
  APITypes.SyncBusinessesQuery
>;
export const businessesByLocationsID = /* GraphQL */ `query BusinessesByLocationsID(
  $locationsID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesByLocationsID(
    locationsID: $locationsID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesByLocationsIDQueryVariables,
  APITypes.BusinessesByLocationsIDQuery
>;
export const businessesByTypesID = /* GraphQL */ `query BusinessesByTypesID(
  $typesID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesByTypesID(
    typesID: $typesID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesByTypesIDQueryVariables,
  APITypes.BusinessesByTypesIDQuery
>;
export const businessesByCitiesID = /* GraphQL */ `query BusinessesByCitiesID(
  $citiesID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesByCitiesID(
    citiesID: $citiesID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesByCitiesIDQueryVariables,
  APITypes.BusinessesByCitiesIDQuery
>;
export const getCategories = /* GraphQL */ `query GetCategories($id: ID!) {
  getCategories(id: $id) {
    id
    name
    description
    image
    Businesses {
      nextToken
      startedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCategoriesQueryVariables,
  APITypes.GetCategoriesQuery
>;
export const listCategories = /* GraphQL */ `query ListCategories(
  $filter: ModelCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCategoriesQueryVariables,
  APITypes.ListCategoriesQuery
>;
export const syncCategories = /* GraphQL */ `query SyncCategories(
  $filter: ModelCategoriesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncCategoriesQueryVariables,
  APITypes.SyncCategoriesQuery
>;
export const getBusinessesCategories = /* GraphQL */ `query GetBusinessesCategories($id: ID!) {
  getBusinessesCategories(id: $id) {
    id
    businessesId
    categoriesId
    businesses {
      id
      locationsID
      address
      dirrection
      iframe
      name
      description
      cardDescription
      websiteUrl
      logo
      images
      typesID
      citiesID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    categories {
      id
      name
      description
      image
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBusinessesCategoriesQueryVariables,
  APITypes.GetBusinessesCategoriesQuery
>;
export const listBusinessesCategories = /* GraphQL */ `query ListBusinessesCategories(
  $filter: ModelBusinessesCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  listBusinessesCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      businessesId
      categoriesId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBusinessesCategoriesQueryVariables,
  APITypes.ListBusinessesCategoriesQuery
>;
export const syncBusinessesCategories = /* GraphQL */ `query SyncBusinessesCategories(
  $filter: ModelBusinessesCategoriesFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncBusinessesCategories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      businessesId
      categoriesId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncBusinessesCategoriesQueryVariables,
  APITypes.SyncBusinessesCategoriesQuery
>;
export const businessesCategoriesByBusinessesId = /* GraphQL */ `query BusinessesCategoriesByBusinessesId(
  $businessesId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessesCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesCategoriesByBusinessesId(
    businessesId: $businessesId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      businessesId
      categoriesId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesCategoriesByBusinessesIdQueryVariables,
  APITypes.BusinessesCategoriesByBusinessesIdQuery
>;
export const businessesCategoriesByCategoriesId = /* GraphQL */ `query BusinessesCategoriesByCategoriesId(
  $categoriesId: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelBusinessesCategoriesFilterInput
  $limit: Int
  $nextToken: String
) {
  businessesCategoriesByCategoriesId(
    categoriesId: $categoriesId
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      businessesId
      categoriesId
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.BusinessesCategoriesByCategoriesIdQueryVariables,
  APITypes.BusinessesCategoriesByCategoriesIdQuery
>;
