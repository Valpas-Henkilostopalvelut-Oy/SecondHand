/** 
 * type Notes @model @auth(rules: [{allow: private}]) {
  id: ID!
  text: String!
  businessesID: ID! @index(name: "byBusinesses")
  customersID: ID! @index(name: "byCustomers")
}
*/

import BaseType from "./basetype";

export interface Notes extends BaseType {
  text: string;
  businessesID: string;
  customersID: string;
}
