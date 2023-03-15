/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAreas = /* GraphQL */ `
  query GetAreas($id: ID!) {
    getAreas(id: $id) {
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
export const listAreas = /* GraphQL */ `
  query ListAreas(
    $filter: ModelAreasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAreas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncAreas = /* GraphQL */ `
  query SyncAreas(
    $filter: ModelAreasFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAreas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdBy
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCategories = /* GraphQL */ `
  query SyncCategories(
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
        createdBy
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncStores = /* GraphQL */ `
  query SyncStores(
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncStores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
