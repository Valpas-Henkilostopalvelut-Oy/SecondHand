/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAreas = /* GraphQL */ `
  subscription OnCreateAreas($filter: ModelSubscriptionAreasFilterInput) {
    onCreateAreas(filter: $filter) {
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
export const onUpdateAreas = /* GraphQL */ `
  subscription OnUpdateAreas($filter: ModelSubscriptionAreasFilterInput) {
    onUpdateAreas(filter: $filter) {
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
export const onDeleteAreas = /* GraphQL */ `
  subscription OnDeleteAreas($filter: ModelSubscriptionAreasFilterInput) {
    onDeleteAreas(filter: $filter) {
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
export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onCreateStore(filter: $filter, owner: $owner) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onUpdateStore(filter: $filter, owner: $owner) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore(
    $filter: ModelSubscriptionStoreFilterInput
    $owner: String
  ) {
    onDeleteStore(filter: $filter, owner: $owner) {
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
