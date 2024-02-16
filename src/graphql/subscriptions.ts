/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateTypes = /* GraphQL */ `subscription OnCreateTypes($filter: ModelSubscriptionTypesFilterInput) {
  onCreateTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTypesSubscriptionVariables,
  APITypes.OnCreateTypesSubscription
>;
export const onUpdateTypes = /* GraphQL */ `subscription OnUpdateTypes($filter: ModelSubscriptionTypesFilterInput) {
  onUpdateTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTypesSubscriptionVariables,
  APITypes.OnUpdateTypesSubscription
>;
export const onDeleteTypes = /* GraphQL */ `subscription OnDeleteTypes($filter: ModelSubscriptionTypesFilterInput) {
  onDeleteTypes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTypesSubscriptionVariables,
  APITypes.OnDeleteTypesSubscription
>;
export const onCreateLocations = /* GraphQL */ `subscription OnCreateLocations($filter: ModelSubscriptionLocationsFilterInput) {
  onCreateLocations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateLocationsSubscriptionVariables,
  APITypes.OnCreateLocationsSubscription
>;
export const onUpdateLocations = /* GraphQL */ `subscription OnUpdateLocations($filter: ModelSubscriptionLocationsFilterInput) {
  onUpdateLocations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateLocationsSubscriptionVariables,
  APITypes.OnUpdateLocationsSubscription
>;
export const onDeleteLocations = /* GraphQL */ `subscription OnDeleteLocations($filter: ModelSubscriptionLocationsFilterInput) {
  onDeleteLocations(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteLocationsSubscriptionVariables,
  APITypes.OnDeleteLocationsSubscription
>;
export const onCreateCities = /* GraphQL */ `subscription OnCreateCities($filter: ModelSubscriptionCitiesFilterInput) {
  onCreateCities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCitiesSubscriptionVariables,
  APITypes.OnCreateCitiesSubscription
>;
export const onUpdateCities = /* GraphQL */ `subscription OnUpdateCities($filter: ModelSubscriptionCitiesFilterInput) {
  onUpdateCities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCitiesSubscriptionVariables,
  APITypes.OnUpdateCitiesSubscription
>;
export const onDeleteCities = /* GraphQL */ `subscription OnDeleteCities($filter: ModelSubscriptionCitiesFilterInput) {
  onDeleteCities(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCitiesSubscriptionVariables,
  APITypes.OnDeleteCitiesSubscription
>;
export const onCreateNotes = /* GraphQL */ `subscription OnCreateNotes($filter: ModelSubscriptionNotesFilterInput) {
  onCreateNotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateNotesSubscriptionVariables,
  APITypes.OnCreateNotesSubscription
>;
export const onUpdateNotes = /* GraphQL */ `subscription OnUpdateNotes($filter: ModelSubscriptionNotesFilterInput) {
  onUpdateNotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateNotesSubscriptionVariables,
  APITypes.OnUpdateNotesSubscription
>;
export const onDeleteNotes = /* GraphQL */ `subscription OnDeleteNotes($filter: ModelSubscriptionNotesFilterInput) {
  onDeleteNotes(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteNotesSubscriptionVariables,
  APITypes.OnDeleteNotesSubscription
>;
export const onCreateCustomers = /* GraphQL */ `subscription OnCreateCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onCreateCustomers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCustomersSubscriptionVariables,
  APITypes.OnCreateCustomersSubscription
>;
export const onUpdateCustomers = /* GraphQL */ `subscription OnUpdateCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onUpdateCustomers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCustomersSubscriptionVariables,
  APITypes.OnUpdateCustomersSubscription
>;
export const onDeleteCustomers = /* GraphQL */ `subscription OnDeleteCustomers($filter: ModelSubscriptionCustomersFilterInput) {
  onDeleteCustomers(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCustomersSubscriptionVariables,
  APITypes.OnDeleteCustomersSubscription
>;
export const onCreateBusinesses = /* GraphQL */ `subscription OnCreateBusinesses(
  $filter: ModelSubscriptionBusinessesFilterInput
) {
  onCreateBusinesses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessesSubscriptionVariables,
  APITypes.OnCreateBusinessesSubscription
>;
export const onUpdateBusinesses = /* GraphQL */ `subscription OnUpdateBusinesses(
  $filter: ModelSubscriptionBusinessesFilterInput
) {
  onUpdateBusinesses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessesSubscriptionVariables,
  APITypes.OnUpdateBusinessesSubscription
>;
export const onDeleteBusinesses = /* GraphQL */ `subscription OnDeleteBusinesses(
  $filter: ModelSubscriptionBusinessesFilterInput
) {
  onDeleteBusinesses(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessesSubscriptionVariables,
  APITypes.OnDeleteBusinessesSubscription
>;
export const onCreateCategories = /* GraphQL */ `subscription OnCreateCategories(
  $filter: ModelSubscriptionCategoriesFilterInput
) {
  onCreateCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCategoriesSubscriptionVariables,
  APITypes.OnCreateCategoriesSubscription
>;
export const onUpdateCategories = /* GraphQL */ `subscription OnUpdateCategories(
  $filter: ModelSubscriptionCategoriesFilterInput
) {
  onUpdateCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCategoriesSubscriptionVariables,
  APITypes.OnUpdateCategoriesSubscription
>;
export const onDeleteCategories = /* GraphQL */ `subscription OnDeleteCategories(
  $filter: ModelSubscriptionCategoriesFilterInput
) {
  onDeleteCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCategoriesSubscriptionVariables,
  APITypes.OnDeleteCategoriesSubscription
>;
export const onCreateBusinessesCategories = /* GraphQL */ `subscription OnCreateBusinessesCategories(
  $filter: ModelSubscriptionBusinessesCategoriesFilterInput
) {
  onCreateBusinessesCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateBusinessesCategoriesSubscriptionVariables,
  APITypes.OnCreateBusinessesCategoriesSubscription
>;
export const onUpdateBusinessesCategories = /* GraphQL */ `subscription OnUpdateBusinessesCategories(
  $filter: ModelSubscriptionBusinessesCategoriesFilterInput
) {
  onUpdateBusinessesCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateBusinessesCategoriesSubscriptionVariables,
  APITypes.OnUpdateBusinessesCategoriesSubscription
>;
export const onDeleteBusinessesCategories = /* GraphQL */ `subscription OnDeleteBusinessesCategories(
  $filter: ModelSubscriptionBusinessesCategoriesFilterInput
) {
  onDeleteBusinessesCategories(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteBusinessesCategoriesSubscriptionVariables,
  APITypes.OnDeleteBusinessesCategoriesSubscription
>;
