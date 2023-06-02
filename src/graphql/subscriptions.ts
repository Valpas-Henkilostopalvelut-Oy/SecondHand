/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
      id
      username
      email
      stores {
        id
        type
        username
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
          isClosed
        }
        contact {
          phone
          email
          website
        }
        location {
          city
          lat
          lng
          country
          iso2
          admin_name
          capital
          population
          population_proper
          driveto
          address
          zip
          iframe
        }
        imgs {
          key
          id
        }
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
      id
      username
      email
      stores {
        id
        type
        username
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
          isClosed
        }
        contact {
          phone
          email
          website
        }
        location {
          city
          lat
          lng
          country
          iso2
          admin_name
          capital
          population
          population_proper
          driveto
          address
          zip
          iframe
        }
        imgs {
          key
          id
        }
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
      id
      username
      email
      stores {
        id
        type
        username
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
          isClosed
        }
        contact {
          phone
          email
          website
        }
        location {
          city
          lat
          lng
          country
          iso2
          admin_name
          capital
          population
          population_proper
          driveto
          address
          zip
          iframe
        }
        imgs {
          key
          id
        }
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      role
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
    $username: String
  ) {
    onCreateStore(filter: $filter, username: $username) {
      id
      type
      username
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
        isClosed
      }
      contact {
        phone
        email
        website
      }
      location {
        city
        lat
        lng
        country
        iso2
        admin_name
        capital
        population
        population_proper
        driveto
        address
        zip
        iframe
      }
      imgs {
        key
        id
      }
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore(
    $filter: ModelSubscriptionStoreFilterInput
    $username: String
  ) {
    onUpdateStore(filter: $filter, username: $username) {
      id
      type
      username
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
        isClosed
      }
      contact {
        phone
        email
        website
      }
      location {
        city
        lat
        lng
        country
        iso2
        admin_name
        capital
        population
        population_proper
        driveto
        address
        zip
        iframe
      }
      imgs {
        key
        id
      }
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore(
    $filter: ModelSubscriptionStoreFilterInput
    $username: String
  ) {
    onDeleteStore(filter: $filter, username: $username) {
      id
      type
      username
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
        isClosed
      }
      contact {
        phone
        email
        website
      }
      location {
        city
        lat
        lng
        country
        iso2
        admin_name
        capital
        population
        population_proper
        driveto
        address
        zip
        iframe
      }
      imgs {
        key
        id
      }
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
