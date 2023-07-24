/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCategories = /* GraphQL */ `
  query GetCategories($id: ID!) {
    getCategories(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const getNotes = /* GraphQL */ `
  query GetNotes($id: ID!) {
    getNotes(id: $id) {
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
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNotesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        store {
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
  }
`;
export const syncNotes = /* GraphQL */ `
  query SyncNotes(
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
        username
        store {
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
  }
`;
export const getOrders = /* GraphQL */ `
  query GetOrders($id: ID!) {
    getOrders(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        store {
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
  }
`;
export const syncOrders = /* GraphQL */ `
  query SyncOrders(
    $filter: ModelOrdersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncOrders(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        store {
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
  }
`;
export const getAds = /* GraphQL */ `
  query GetAds($id: ID!) {
    getAds(id: $id) {
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
export const listAds = /* GraphQL */ `
  query ListAds($filter: ModelAdsFilterInput, $limit: Int, $nextToken: String) {
    listAds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firm
        site
        backgroundColor
        left {
          image
          title
          __typename
        }
        right {
          image
          title
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncAds = /* GraphQL */ `
  query SyncAds(
    $filter: ModelAdsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncAds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firm
        site
        backgroundColor
        left {
          image
          title
          __typename
        }
        right {
          image
          title
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        stores {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        username
        email
        stores {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getStore = /* GraphQL */ `
  query GetStore($id: ID!) {
    getStore(id: $id) {
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
export const listStores = /* GraphQL */ `
  query ListStores(
    $id: ID
    $filter: ModelStoreFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listStores(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
      __typename
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getEvaluation = /* GraphQL */ `
  query GetEvaluation($id: ID!) {
    getEvaluation(id: $id) {
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
export const listEvaluations = /* GraphQL */ `
  query ListEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvaluations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncEvaluations = /* GraphQL */ `
  query SyncEvaluations(
    $filter: ModelEvaluationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncEvaluations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
      __typename
    }
  }
`;
