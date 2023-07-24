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
      createdAt
      createdBy
      name
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      createdAt
      createdBy
      name
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      createdAt
      createdBy
      name
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createNotes = /* GraphQL */ `
  mutation CreateNotes(
    $input: CreateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    createNotes(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateNotes = /* GraphQL */ `
  mutation UpdateNotes(
    $input: UpdateNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    updateNotes(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteNotes = /* GraphQL */ `
  mutation DeleteNotes(
    $input: DeleteNotesInput!
    $condition: ModelNotesConditionInput
  ) {
    deleteNotes(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      notes
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createOrders = /* GraphQL */ `
  mutation CreateOrders(
    $input: CreateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    createOrders(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      type
      status
      from
      to
      price
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateOrders = /* GraphQL */ `
  mutation UpdateOrders(
    $input: UpdateOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    updateOrders(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      type
      status
      from
      to
      price
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteOrders = /* GraphQL */ `
  mutation DeleteOrders(
    $input: DeleteOrdersInput!
    $condition: ModelOrdersConditionInput
  ) {
    deleteOrders(input: $input, condition: $condition) {
      id
      username
      store {
        id
        username
        type
        name
        description
        clicked
        pricelist {
          name
          price
          id
          __typename
        }
        opentimes {
          day
          start
          end
          id
          isClosed
          __typename
        }
        contact {
          phone
          email
          website
          __typename
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
          __typename
        }
        imgs
        social {
          facebook
          instagram
          twitter
          youtube
          tiktok
          __typename
        }
        settings {
          __typename
        }
        logo
        categories {
          nextToken
          startedAt
          __typename
        }
        notes {
          nextToken
          startedAt
          __typename
        }
        orders {
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
      type
      status
      from
      to
      price
      message
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createAds = /* GraphQL */ `
  mutation CreateAds(
    $input: CreateAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    createAds(input: $input, condition: $condition) {
      id
      firm
      site
      backgroundColor
      left {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      right {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      isHidden
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateAds = /* GraphQL */ `
  mutation UpdateAds(
    $input: UpdateAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    updateAds(input: $input, condition: $condition) {
      id
      firm
      site
      backgroundColor
      left {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      right {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      isHidden
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteAds = /* GraphQL */ `
  mutation DeleteAds(
    $input: DeleteAdsInput!
    $condition: ModelAdsConditionInput
  ) {
    deleteAds(input: $input, condition: $condition) {
      id
      firm
      site
      backgroundColor
      left {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      right {
        image
        title
        button {
          text
          link
          color
          background
          id
          __typename
        }
        __typename
      }
      isHidden
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        items {
          id
          username
          type
          name
          description
          clicked
          imgs
          logo
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        items {
          id
          username
          type
          name
          description
          clicked
          imgs
          logo
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
        items {
          id
          username
          type
          name
          description
          clicked
          imgs
          logo
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
      role
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      username
      type
      name
      description
      clicked
      pricelist {
        name
        price
        id
        __typename
      }
      opentimes {
        day
        start
        end
        id
        isClosed
        __typename
      }
      contact {
        phone
        email
        website
        __typename
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
        __typename
      }
      imgs
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
        __typename
      }
      settings {
        isHidden {
          status
          message
          from
          to
          __typename
        }
        isConfirmed {
          status
          message
          from
          to
          __typename
        }
        __typename
      }
      logo
      categories {
        items {
          id
          createdAt
          createdBy
          name
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
      notes {
        items {
          id
          username
          notes
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
      orders {
        items {
          id
          username
          type
          status
          from
          to
          price
          message
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      username
      type
      name
      description
      clicked
      pricelist {
        name
        price
        id
        __typename
      }
      opentimes {
        day
        start
        end
        id
        isClosed
        __typename
      }
      contact {
        phone
        email
        website
        __typename
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
        __typename
      }
      imgs
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
        __typename
      }
      settings {
        isHidden {
          status
          message
          from
          to
          __typename
        }
        isConfirmed {
          status
          message
          from
          to
          __typename
        }
        __typename
      }
      logo
      categories {
        items {
          id
          createdAt
          createdBy
          name
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
      notes {
        items {
          id
          username
          notes
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
      orders {
        items {
          id
          username
          type
          status
          from
          to
          price
          message
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
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
      username
      type
      name
      description
      clicked
      pricelist {
        name
        price
        id
        __typename
      }
      opentimes {
        day
        start
        end
        id
        isClosed
        __typename
      }
      contact {
        phone
        email
        website
        __typename
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
        __typename
      }
      imgs
      social {
        facebook
        instagram
        twitter
        youtube
        tiktok
        __typename
      }
      settings {
        isHidden {
          status
          message
          from
          to
          __typename
        }
        isConfirmed {
          status
          message
          from
          to
          __typename
        }
        __typename
      }
      logo
      categories {
        items {
          id
          createdAt
          createdBy
          name
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
      notes {
        items {
          id
          username
          notes
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
      orders {
        items {
          id
          username
          type
          status
          from
          to
          price
          message
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
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const createEvaluation = /* GraphQL */ `
  mutation CreateEvaluation(
    $input: CreateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    createEvaluation(input: $input, condition: $condition) {
      id
      evaluationNum
      name
      email
      phone
      description
      category
      type
      images
      isConfirmed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const updateEvaluation = /* GraphQL */ `
  mutation UpdateEvaluation(
    $input: UpdateEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    updateEvaluation(input: $input, condition: $condition) {
      id
      evaluationNum
      name
      email
      phone
      description
      category
      type
      images
      isConfirmed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const deleteEvaluation = /* GraphQL */ `
  mutation DeleteEvaluation(
    $input: DeleteEvaluationInput!
    $condition: ModelEvaluationConditionInput
  ) {
    deleteEvaluation(input: $input, condition: $condition) {
      id
      evaluationNum
      name
      email
      phone
      description
      category
      type
      images
      isConfirmed
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
