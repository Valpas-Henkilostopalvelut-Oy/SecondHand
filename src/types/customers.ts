/**type Customers @model @auth(rules: [{allow: private}]) {
  id: ID!
  name: String!
  email: String!
  role: CustomerRole
  phone: String
  password: String
  avatar: String
  Businesses: [Businesses] @hasMany(indexName: "byCustomers", fields: ["id"])
  Notes: [Notes] @hasMany(indexName: "byCustomers", fields: ["id"])
}

enum CustomerRole {
  USER
  ADMIN
}
*/

import BaseType from "./basetype";

export interface Customer {
  name: string;
  email: string;
  role: CustomerRole;
  phone: string;
  password: string;
  avatar: string;
}

enum CustomerRole {
  USER,
  ADMIN,
}
