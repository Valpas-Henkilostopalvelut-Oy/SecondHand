/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategories = /* GraphQL */ `
  subscription OnCreateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onCreateCategories(filter: $filter) {
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
export const onUpdateCategories = /* GraphQL */ `
  subscription OnUpdateCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onUpdateCategories(filter: $filter) {
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
export const onDeleteCategories = /* GraphQL */ `
  subscription OnDeleteCategories(
    $filter: ModelSubscriptionCategoriesFilterInput
  ) {
    onDeleteCategories(filter: $filter) {
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
export const onCreateNotes = /* GraphQL */ `
  subscription OnCreateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onCreateNotes(filter: $filter) {
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
export const onUpdateNotes = /* GraphQL */ `
  subscription OnUpdateNotes($filter: ModelSubscriptionNotesFilterInput) {
    onUpdateNotes(filter: $filter) {
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
export const onDeleteNotes = /* GraphQL */ `
  subscription OnDeleteNotes($filter: ModelSubscriptionNotesFilterInput) {
    onDeleteNotes(filter: $filter) {
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
export const onCreateOrders = /* GraphQL */ `
  subscription OnCreateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onCreateOrders(filter: $filter) {
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
export const onUpdateOrders = /* GraphQL */ `
  subscription OnUpdateOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onUpdateOrders(filter: $filter) {
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
export const onDeleteOrders = /* GraphQL */ `
  subscription OnDeleteOrders($filter: ModelSubscriptionOrdersFilterInput) {
    onDeleteOrders(filter: $filter) {
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
export const onCreateAds = /* GraphQL */ `
  subscription OnCreateAds($filter: ModelSubscriptionAdsFilterInput) {
    onCreateAds(filter: $filter) {
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
export const onUpdateAds = /* GraphQL */ `
  subscription OnUpdateAds($filter: ModelSubscriptionAdsFilterInput) {
    onUpdateAds(filter: $filter) {
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
export const onDeleteAds = /* GraphQL */ `
  subscription OnDeleteAds($filter: ModelSubscriptionAdsFilterInput) {
    onDeleteAds(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateStore = /* GraphQL */ `
  subscription OnCreateStore($filter: ModelSubscriptionStoreFilterInput) {
    onCreateStore(filter: $filter) {
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
export const onUpdateStore = /* GraphQL */ `
  subscription OnUpdateStore($filter: ModelSubscriptionStoreFilterInput) {
    onUpdateStore(filter: $filter) {
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
export const onDeleteStore = /* GraphQL */ `
  subscription OnDeleteStore($filter: ModelSubscriptionStoreFilterInput) {
    onDeleteStore(filter: $filter) {
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
export const onCreateEvaluation = /* GraphQL */ `
  subscription OnCreateEvaluation(
    $filter: ModelSubscriptionEvaluationFilterInput
  ) {
    onCreateEvaluation(filter: $filter) {
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
export const onUpdateEvaluation = /* GraphQL */ `
  subscription OnUpdateEvaluation(
    $filter: ModelSubscriptionEvaluationFilterInput
  ) {
    onUpdateEvaluation(filter: $filter) {
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
export const onDeleteEvaluation = /* GraphQL */ `
  subscription OnDeleteEvaluation(
    $filter: ModelSubscriptionEvaluationFilterInput
  ) {
    onDeleteEvaluation(filter: $filter) {
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
