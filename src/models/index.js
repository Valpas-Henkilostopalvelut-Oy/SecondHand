// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories, User, Store, Category, Location, Image, Contact, Opentime, Priceitem, Sellplaces, Social } = initSchema(schema);

export {
  Categories,
  User,
  Store,
  Category,
  Location,
  Image,
  Contact,
  Opentime,
  Priceitem,
  Sellplaces,
  Social
};