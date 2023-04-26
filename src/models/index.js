// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories, Store, Category, Location, Image, Contact, Opentime, Priceitem, Sellplaces } = initSchema(schema);

export {
  Categories,
  Store,
  Category,
  Location,
  Image,
  Contact,
  Opentime,
  Priceitem,
  Sellplaces
};