/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createStore = /* GraphQL */ `
  mutation CreateStore(
    $input: CreateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    createStore(input: $input, condition: $condition) {
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
export const updateStore = /* GraphQL */ `
  mutation UpdateStore(
    $input: UpdateStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    updateStore(input: $input, condition: $condition) {
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
export const deleteStore = /* GraphQL */ `
  mutation DeleteStore(
    $input: DeleteStoreInput!
    $condition: ModelStoreConditionInput
  ) {
    deleteStore(input: $input, condition: $condition) {
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
