// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Areas, Categories, Store, Category, City, Image, Location, Contact, Opentime, Priceitem, Sellplaces } = initSchema(schema);

export {
  Areas,
  Categories,
  Store,
  Category,
  City,
  Image,
  Location,
  Contact,
  Opentime,
  Priceitem,
  Sellplaces
};