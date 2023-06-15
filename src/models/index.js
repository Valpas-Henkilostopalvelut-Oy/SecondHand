// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Categories, Ads, User, Store, Category, Location, Image, Contact, Opentime, Priceitem, Sellplaces, Social, SideButton, Side, StoreSettings } = initSchema(schema);

export {
  Categories,
  Ads,
  User,
  Store,
  Category,
  Location,
  Image,
  Contact,
  Opentime,
  Priceitem,
  Sellplaces,
  Social,
  SideButton,
  Side,
  StoreSettings
};