/**type Orders @model @auth(rules: [{allow: private}]) {
  id: ID!
  customersID: ID! @index(name: "byCustomers")
  Businesses: [Businesses] @hasMany(indexName: "byOrders", fields: ["id"])
  date: AWSDate!
  status: Int!
  totalPrice: Float
} */

import BaseType from "./basetype";

export interface Orders extends BaseType {
  customersID: string;
  date: Date;
  status: number;
  totalPrice: number;
}
