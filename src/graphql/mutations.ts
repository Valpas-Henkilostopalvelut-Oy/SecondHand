/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAreas = /* GraphQL */ `
  mutation CreateAreas(
    $input: CreateAreasInput!
    $condition: ModelAreasConditionInput
  ) {
    createAreas(input: $input, condition: $condition) {
      id
      name
      cities {
        id
        name
        area
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAreas = /* GraphQL */ `
  mutation UpdateAreas(
    $input: UpdateAreasInput!
    $condition: ModelAreasConditionInput
  ) {
    updateAreas(input: $input, condition: $condition) {
      id
      name
      cities {
        id
        name
        area
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAreas = /* GraphQL */ `
  mutation DeleteAreas(
    $input: DeleteAreasInput!
    $condition: ModelAreasConditionInput
  ) {
    deleteAreas(input: $input, condition: $condition) {
      id
      name
      cities {
        id
        name
        area
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCategories = /* GraphQL */ `
  mutation CreateCategories(
    $input: CreateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    createCategories(input: $input, condition: $condition) {
      id
      createdBy
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCategories = /* GraphQL */ `
  mutation UpdateCategories(
    $input: UpdateCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    updateCategories(input: $input, condition: $condition) {
      id
      createdBy
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCategories = /* GraphQL */ `
  mutation DeleteCategories(
    $input: DeleteCategoriesInput!
    $condition: ModelCategoriesConditionInput
  ) {
    deleteCategories(input: $input, condition: $condition) {
      id
      createdBy
      name
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
      id
      isConfirmed
      name
      description
      categories {
        id
        name
      }
      services
      clicked
      sellplaces {
        all
        free
      }
      pricelist {
        name
        price
        id
      }
      embedmap
      opentimes {
        day
        start
        end
        id
      }
      contact {
        phone
        email
        website
      }
      location {
        address
        city
        zip
        area
        country
        driveto
      }
      imgs {
        key
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
      id
      isConfirmed
      name
      description
      categories {
        id
        name
      }
      services
      clicked
      sellplaces {
        all
        free
      }
      pricelist {
        name
        price
        id
      }
      embedmap
      opentimes {
        day
        start
        end
        id
      }
      contact {
        phone
        email
        website
      }
      location {
        address
        city
        zip
        area
        country
        driveto
      }
      imgs {
        key
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
      id
      isConfirmed
      name
      description
      categories {
        id
        name
      }
      services
      clicked
      sellplaces {
        all
        free
      }
      pricelist {
        name
        price
        id
      }
      embedmap
      opentimes {
        day
        start
        end
        id
      }
      contact {
        phone
        email
        website
      }
      location {
        address
        city
        zip
        area
        country
        driveto
      }
      imgs {
        key
        id
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
