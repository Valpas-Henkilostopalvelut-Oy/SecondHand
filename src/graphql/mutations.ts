/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createTypes = /* GraphQL */ `mutation CreateTypes(
  $input: CreateTypesInput!
  $condition: ModelTypesConditionInput
) {
  createTypes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateTypesMutationVariables,
  APITypes.CreateTypesMutation
>;
export const updateTypes = /* GraphQL */ `mutation UpdateTypes(
  $input: UpdateTypesInput!
  $condition: ModelTypesConditionInput
) {
  updateTypes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateTypesMutationVariables,
  APITypes.UpdateTypesMutation
>;
export const deleteTypes = /* GraphQL */ `mutation DeleteTypes(
  $input: DeleteTypesInput!
  $condition: ModelTypesConditionInput
) {
  deleteTypes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteTypesMutationVariables,
  APITypes.DeleteTypesMutation
>;
export const createLocations = /* GraphQL */ `mutation CreateLocations(
  $input: CreateLocationsInput!
  $condition: ModelLocationsConditionInput
) {
  createLocations(input: $input, condition: $condition) {
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
    city
    adminName
    country
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateLocationsMutationVariables,
  APITypes.CreateLocationsMutation
>;
export const updateLocations = /* GraphQL */ `mutation UpdateLocations(
  $input: UpdateLocationsInput!
  $condition: ModelLocationsConditionInput
) {
  updateLocations(input: $input, condition: $condition) {
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
    city
    adminName
    country
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateLocationsMutationVariables,
  APITypes.UpdateLocationsMutation
>;
export const deleteLocations = /* GraphQL */ `mutation DeleteLocations(
  $input: DeleteLocationsInput!
  $condition: ModelLocationsConditionInput
) {
  deleteLocations(input: $input, condition: $condition) {
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
    city
    adminName
    country
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteLocationsMutationVariables,
  APITypes.DeleteLocationsMutation
>;
export const createCities = /* GraphQL */ `mutation CreateCities(
  $input: CreateCitiesInput!
  $condition: ModelCitiesConditionInput
) {
  createCities(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.CreateCitiesMutationVariables,
  APITypes.CreateCitiesMutation
>;
export const updateCities = /* GraphQL */ `mutation UpdateCities(
  $input: UpdateCitiesInput!
  $condition: ModelCitiesConditionInput
) {
  updateCities(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.UpdateCitiesMutationVariables,
  APITypes.UpdateCitiesMutation
>;
export const deleteCities = /* GraphQL */ `mutation DeleteCities(
  $input: DeleteCitiesInput!
  $condition: ModelCitiesConditionInput
) {
  deleteCities(input: $input, condition: $condition) {
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
}
` as GeneratedMutation<
  APITypes.DeleteCitiesMutationVariables,
  APITypes.DeleteCitiesMutation
>;
export const createNotes = /* GraphQL */ `mutation CreateNotes(
  $input: CreateNotesInput!
  $condition: ModelNotesConditionInput
) {
  createNotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateNotesMutationVariables,
  APITypes.CreateNotesMutation
>;
export const updateNotes = /* GraphQL */ `mutation UpdateNotes(
  $input: UpdateNotesInput!
  $condition: ModelNotesConditionInput
) {
  updateNotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateNotesMutationVariables,
  APITypes.UpdateNotesMutation
>;
export const deleteNotes = /* GraphQL */ `mutation DeleteNotes(
  $input: DeleteNotesInput!
  $condition: ModelNotesConditionInput
) {
  deleteNotes(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteNotesMutationVariables,
  APITypes.DeleteNotesMutation
>;
export const createCustomers = /* GraphQL */ `mutation CreateCustomers(
  $input: CreateCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  createCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCustomersMutationVariables,
  APITypes.CreateCustomersMutation
>;
export const updateCustomers = /* GraphQL */ `mutation UpdateCustomers(
  $input: UpdateCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  updateCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCustomersMutationVariables,
  APITypes.UpdateCustomersMutation
>;
export const deleteCustomers = /* GraphQL */ `mutation DeleteCustomers(
  $input: DeleteCustomersInput!
  $condition: ModelCustomersConditionInput
) {
  deleteCustomers(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCustomersMutationVariables,
  APITypes.DeleteCustomersMutation
>;
export const createBusinesses = /* GraphQL */ `mutation CreateBusinesses(
  $input: CreateBusinessesInput!
  $condition: ModelBusinessesConditionInput
) {
  createBusinesses(input: $input, condition: $condition) {
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
    name
    description
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBusinessesMutationVariables,
  APITypes.CreateBusinessesMutation
>;
export const updateBusinesses = /* GraphQL */ `mutation UpdateBusinesses(
  $input: UpdateBusinessesInput!
  $condition: ModelBusinessesConditionInput
) {
  updateBusinesses(input: $input, condition: $condition) {
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
    name
    description
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBusinessesMutationVariables,
  APITypes.UpdateBusinessesMutation
>;
export const deleteBusinesses = /* GraphQL */ `mutation DeleteBusinesses(
  $input: DeleteBusinessesInput!
  $condition: ModelBusinessesConditionInput
) {
  deleteBusinesses(input: $input, condition: $condition) {
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
    name
    description
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
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBusinessesMutationVariables,
  APITypes.DeleteBusinessesMutation
>;
export const createCategories = /* GraphQL */ `mutation CreateCategories(
  $input: CreateCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  createCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCategoriesMutationVariables,
  APITypes.CreateCategoriesMutation
>;
export const updateCategories = /* GraphQL */ `mutation UpdateCategories(
  $input: UpdateCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  updateCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCategoriesMutationVariables,
  APITypes.UpdateCategoriesMutation
>;
export const deleteCategories = /* GraphQL */ `mutation DeleteCategories(
  $input: DeleteCategoriesInput!
  $condition: ModelCategoriesConditionInput
) {
  deleteCategories(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCategoriesMutationVariables,
  APITypes.DeleteCategoriesMutation
>;
export const createBusinessesCategories = /* GraphQL */ `mutation CreateBusinessesCategories(
  $input: CreateBusinessesCategoriesInput!
  $condition: ModelBusinessesCategoriesConditionInput
) {
  createBusinessesCategories(input: $input, condition: $condition) {
    id
    businessesId
    categoriesId
    businesses {
      id
      locationsID
      address
      name
      description
      websiteUrl
      logo
      images
      typesID
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
` as GeneratedMutation<
  APITypes.CreateBusinessesCategoriesMutationVariables,
  APITypes.CreateBusinessesCategoriesMutation
>;
export const updateBusinessesCategories = /* GraphQL */ `mutation UpdateBusinessesCategories(
  $input: UpdateBusinessesCategoriesInput!
  $condition: ModelBusinessesCategoriesConditionInput
) {
  updateBusinessesCategories(input: $input, condition: $condition) {
    id
    businessesId
    categoriesId
    businesses {
      id
      locationsID
      address
      name
      description
      websiteUrl
      logo
      images
      typesID
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
` as GeneratedMutation<
  APITypes.UpdateBusinessesCategoriesMutationVariables,
  APITypes.UpdateBusinessesCategoriesMutation
>;
export const deleteBusinessesCategories = /* GraphQL */ `mutation DeleteBusinessesCategories(
  $input: DeleteBusinessesCategoriesInput!
  $condition: ModelBusinessesCategoriesConditionInput
) {
  deleteBusinessesCategories(input: $input, condition: $condition) {
    id
    businessesId
    categoriesId
    businesses {
      id
      locationsID
      address
      name
      description
      websiteUrl
      logo
      images
      typesID
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
` as GeneratedMutation<
  APITypes.DeleteBusinessesCategoriesMutationVariables,
  APITypes.DeleteBusinessesCategoriesMutation
>;
